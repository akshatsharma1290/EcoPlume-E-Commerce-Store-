import { useEffect, useRef } from "react";
import { signInAnonymous } from "./firebase/auth/anonymousAuth";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import { useState } from "react";
import Navbar from "./components/Reusables/Navbar";
import ProductPage from "./pages/ProductPage";
import Search from "./pages/Search";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import {
  CartItemsType,
  cartItemsSelector,
  setCartItem,
} from "./store/slices/cartItemsSlice";
import { retrieveData, storeData } from "./firebase/functions/DataInterchange";
import AuthPage from "./pages/AuthPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { setLoading } from "./store/slices/loadingSlice";
import { setTheme } from "./store/slices/themeSlice";
import CheckoutPanel from "./components/CheckoutComponents/CheckoutPanel";
import NotFound from "./components/StatusComponents/NotFound";
import PaymentSuccess from "./components/StatusComponents/PaymentSuccess";

function App() {
  const cartItems = useAppSelector(cartItemsSelector);
  const dispatch = useAppDispatch();
  const [userId, setUserId] = useState("");
  const firstSession = useRef(true);
  const isDataRetrieved = useRef(false);
  const canStoreData = useRef(false);
  const canRetrieveData = useRef(true);
  const newUser = useRef(false);

  useEffect(() => {
    // Watching The Authentication State.
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userId = auth.currentUser?.uid;
        // If user is logged in then storing his uid as a state.
        userId ? setUserId(userId) : null;
        // This condition will run when user sign up / log in / log out . So his auth state will change but the cart items is preserved so there is no need to retrieve the data only the data is need to be stored in the new account that user entered.
        if (!firstSession.current && !newUser.current) {
          canRetrieveData.current = false;
        } else if (newUser.current) {
          // This condition will run if previously user don't have any account and new to the web app that there is no data available to fetch so only the user new empty doc will be created in the firestore.
          dispatch(setLoading(false));
          canRetrieveData.current = false;
          canStoreData.current = true;
          isDataRetrieved.current = true;
        }
        firstSession.current = false;
      } else {
        // If user is new means not logged in then he will be signed anonymously then the auth state will change so the first condition will run that's why newUser is set to true because for new Users the conditions is bit different. And also this condition will only run when the session is first means if user perform any other account processing than this will not be trigerred.
        if (firstSession.current) {
          newUser.current = true;
          signInAnonymous();
          firstSession.current = false;
        }
      }
    });
  }, [userId, dispatch]);

  useEffect(() => {
    // If User exists and retrieving data is allowed then the cart items will be fetched from the firestore.
    if (userId && canRetrieveData.current) {
      retrieveData(userId)
        .then((data) => {
          const retrievedCartItems = data?.cartItems as CartItemsType[];
          // Updating The Cart Items
          dispatch(setCartItem(retrievedCartItems));
          // Terminating Loading
          dispatch(setLoading(false));
          // isDataRetrieved marked as true
          isDataRetrieved.current = true;
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [dispatch, userId]);

  useEffect(() => {
    // If user exists and storing data is allowed then the data will be stored in firestore.
    if (canStoreData.current && userId) {
      storeData(userId, { cartItems }).catch((err) => {
        console.error(err, "Data Not Stored.");
      });
      // If data retrieving is not allowed then the loading will stop and the retrieving of data will be allowed then.
      if (!canRetrieveData.current) {
        dispatch(setLoading(false));
        canRetrieveData.current = true;
      }
    } else {
      // If storing data is not allowed so when the data is retrieved only then it will be allowed to store the data.
      if (isDataRetrieved.current) {
        canStoreData.current = true;
      }
    }
  }, [cartItems, userId, dispatch]);

  useEffect(() => {
    // If theme exists get it from local storage then set the current styles according to that theme else default theme will work.
    if ("theme" in localStorage) {
      const userTheme = localStorage.getItem("theme");
      if (userTheme) {
        dispatch(setTheme(userTheme));
        document.documentElement.className = userTheme;
      }
    }
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/:productName" element={<ProductPage />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/auth" element={<AuthPage />}></Route>
        <Route path="/checkout" element={<CheckoutPanel />}></Route>
        <Route path="/success" element={<PaymentSuccess />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
