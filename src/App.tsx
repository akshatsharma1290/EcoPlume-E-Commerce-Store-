import { useEffect } from "react";
import { signInAnonymous } from "./firebase/auth/anonymousAuth";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import Navbar from "./components/Reusables/Navbar";
import ProductPage from "./pages/ProductPage";
import Search from "./pages/Search";

function App() {
  useEffect(() => {
    // Check if the user ID is already stored in local storage
    const userId = localStorage.getItem("anonymousUserId");
    if (!userId) {
      // If the user ID is not in local storage, sign in anonymously
      signInAnonymous();
    } else {
      // If the user ID is available, you can use it to retrieve the user's data from Firebase
      console.log("Retrieving data for user with ID:", userId);
    }
  }, []);

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
