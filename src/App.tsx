import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/:productName" element={<ProductPage />}></Route>
        <Route path="/search">
          <Route index element={<Search />}></Route>
          <Route path=":product" element={<Search />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
