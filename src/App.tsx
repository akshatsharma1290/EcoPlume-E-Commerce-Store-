import { useEffect, useRef } from "react";
import { signInAnonymous } from "./firebase/auth/anonymousAuth";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import Navbar from "./components/Reusables/Navbar";
import ProductPage from "./pages/ProductPage";
import Search from "./pages/Search";
import { useAppSelector } from "./store/hooks";
import { cartItemsSelector } from "./store/slices/cartItemsSlice";
import { storeData } from "./firebase/functions/DataInterchange";

function App() {
  const cartItems = useAppSelector(cartItemsSelector);
  const initialRender = useRef(true);
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

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    const userId = localStorage.getItem("UserId") || "";

    storeData(userId, { cartItems })
      .then(() => {
        console.log("Data Stored");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cartItems]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/:productName" element={<ProductPage />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </>
  );
}

export default App;
