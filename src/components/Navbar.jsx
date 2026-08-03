import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { Heart } from "lucide-react";

function Navbar() {
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          ShopKart
        </h1>

        {/* Menu */}
        <div className="flex items-center gap-6 text-lg">

          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link to="/products" className="hover:text-blue-600">
            Products
          </Link>

          <Link to="/about" className="hover:text-blue-600">
            About
          </Link>

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="relative hover:text-red-500 flex items-center gap-1"
          >
            <Heart size={22} />

            {wishlist.length > 0 && (
              <span className="absolute -top-3 -right-4 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative hover:text-blue-600"
          >
            🛒 Cart

            {cart.length > 0 && (
              <span className="absolute -top-3 -right-5 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>

          <Link to="/login" className="hover:text-blue-600">
            Login
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;