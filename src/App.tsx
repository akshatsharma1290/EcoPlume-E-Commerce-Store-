import { useEffect, useRef  } from "react";
import { signInAnonymous } from "./firebase/auth/anonymousAuth";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
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
  useEffect(() => {
    // Check if the user ID is already stored in local storage
    const userId = localStorage.getItem("UserId");
    if (!userId) {
      // If the user ID is not in local storage, sign in anonymously
      signInAnonymous();
    } else {
      // If the user ID is available, you can use it to retrieve the user's data from Firebase
      console.log("Retrieving data for user with ID:", userId);
    }
  }, []);

  useEffect(()=>{
  onAuthStateChanged(auth , (user)=>{
    console.log(user);
  })
  }, [])


  useEffect(() => {
    if (!initialRender.current) {
      const userId = localStorage.getItem("UserId") || "";
      storeData(userId, { cartItems }).catch((err) => {
        console.log(err);
      });
    }
  }, [cartItems]);

  useEffect(() => {
    // The effect for retrieving data
    const userId = localStorage.getItem("UserId") || "";
    if (initialRender.current) {
      retrieveData(userId)
        .then((data) => {
          const retrievedCartItems = data?.cartItems as CartItemsType[];
          dispatch(setCartItem(retrievedCartItems));
          dispatch(dataRetrieved())
        })
        .catch((err) => {
          console.log(err);
        });
      initialRender.current = false;
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
