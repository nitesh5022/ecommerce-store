import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wishlist from "./pages/Wishlist";
import CategoryBar from "./components/CategoryBar";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <CategoryBar />
    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;