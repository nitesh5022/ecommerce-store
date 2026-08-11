import { Link } from "react-router-dom";
import { useContext } from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
} from "lucide-react";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-4xl font-extrabold text-blue-600">
            ShopKart
          </h1>
        </Link>

        {/* Search Bar */}
        <div className="flex items-center flex-1 max-w-2xl border-2 border-blue-500 rounded-lg overflow-hidden">

          <div className="px-4 text-gray-500">
            <Search size={22} />
          </div>

          <input
            type="text"
            placeholder="Search Products, Brands and More..."
            className="w-full p-3 outline-none"
          />

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-8 text-lg">

          <Link
            to="/login"
            className="flex items-center gap-2 hover:text-blue-600"
          >
            <User size={22} />
            Login
          </Link>

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="relative flex items-center hover:text-red-500"
          >
            <Heart size={24} />

            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex items-center gap-2 hover:text-blue-600"
          >
            <ShoppingCart size={24} />
            Cart

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>

        </div>

      </div>

      {/* Bottom Menu */}
      <div className="border-t">

        <div className="max-w-7xl mx-auto flex justify-center gap-12 py-3 text-lg">

          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link to="/products" className="hover:text-blue-600">
            Products
          </Link>

          <Link to="/about" className="hover:text-blue-600">
            About
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;