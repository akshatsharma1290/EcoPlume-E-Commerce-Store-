import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/:productName" element={<ProductPage/>}></Route>

      </Routes>
    </>
  );
}

export default App;
