import WishlistProvider from "./context/WishlistContext";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";
import CartProvider from "./context/CartContext";

import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <CartProvider>

      <WishlistProvider>

        <Toaster
          position="top-right"
          reverseOrder={false}
        />

        <App />

      </WishlistProvider>

    </CartProvider>

  </StrictMode>
);