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
import { dataRetrieved } from "./store/slices/booleanSlices";
import AuthPage from "./pages/AuthPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";

function App() {
  const cartItems = useAppSelector(cartItemsSelector);
  const initialRender = useRef(true);
  const dispatch = useAppDispatch();
  const [userId, setUserId] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userId = auth.currentUser?.uid;
        userId ? setUserId(userId) : null;
        console.log(user);
      } else {
        const AccountProcessing = "AccountProcessing" in sessionStorage;
        if (!AccountProcessing) {
          signInAnonymous();
        }
      }
    });
  }, [userId]);

  useEffect(() => {
    if (!initialRender.current && userId) {
      storeData(userId, { cartItems }).catch((err) => {
        console.log(err, "Data Not Stored.");
      });
    }
  }, [cartItems, userId]);

  useEffect(() => {
    if (initialRender.current && userId) {
      retrieveData(userId)
        .then((data) => {
          const retrievedCartItems = data?.cartItems as CartItemsType[];
          dispatch(setCartItem(retrievedCartItems));
          dispatch(dataRetrieved());
        })
        .catch((err) => {
          console.log(err);
        });
      initialRender.current = false;
    }
  }, [dispatch, userId]);

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/:productName" element={<ProductPage />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/auth" element={<AuthPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
