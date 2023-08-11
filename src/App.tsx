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

function App() {
  const cartItems = useAppSelector(cartItemsSelector);
  const dispatch = useAppDispatch();
  const [userId, setUserId] = useState("");
  const firstSession = useRef(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userId = auth.currentUser?.uid;
        userId ? setUserId(userId) : null;
        firstSession.current = false;
        console.log(user);
      } else {
        if (firstSession.current) {
          signInAnonymous();
          firstSession.current = false;
        }
      }
    });
  }, [userId]);

  useEffect(() => {
    if (userId) {
      retrieveData(userId)
        .then((data) => {
          const retrievedCartItems = data?.cartItems as CartItemsType[];
          dispatch(setCartItem(retrievedCartItems));
          dispatch(setLoading(false));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [dispatch, userId]);

  useEffect(() => {
    if (userId && cartItems.length > 0) {
      storeData(userId, { cartItems }).catch((err) => {
        console.log(err, "Data Not Stored.");
      });
    }
  }, [cartItems, userId]);

  useEffect(() => {
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
      </Routes>
    </>
  );
}

export default App;
