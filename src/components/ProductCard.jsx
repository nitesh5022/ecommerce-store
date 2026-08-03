import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import {
  Heart,
  Star,
  Truck,
  ShieldCheck,
} from "lucide-react";
import toast from "react-hot-toast";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function ProductCard({
  id,
  name,
  brand,
  price,
  image,
  rating,
  stock,
  discount,
  delivery,
  warranty,
}) {
  const { addToCart } = useContext(CartContext);

  const {
    wishlist,
    addToWishlist,
    removeFromWishlist,
  } = useContext(WishlistContext);

  const navigate = useNavigate();

  const product = {
    id,
    name,
    brand,
    price,
    image,
    rating,
    stock,
    discount,
    delivery,
    warranty,
  };

  const isWishlisted = wishlist.some(
    (item) => item.id === id
  );

  const handleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(id);
      toast.success("Removed from Wishlist");
    } else {
      addToWishlist(product);
      toast.success(`${name} added to Wishlist ❤️`);
    }
  };

  const handleAddToCart = () => {
    addToCart(product);

    toast.success(`${name} added to Cart 🛒`);

    navigate("/cart");
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

      {/* Product Image */}
      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={name}
          className="w-full h-72 object-cover group-hover:scale-110 duration-700"
        />

        {/* Discount */}
        <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          {discount}% OFF
        </span>

        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <Heart
            size={20}
            className={
              isWishlisted
                ? "fill-red-500 text-red-500"
                : "text-gray-500"
            }
          />
        </button>

      </div>

      {/* Details */}
      <div className="p-6">

        {/* Brand */}
        <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full font-semibold">
          {brand}
        </span>

        {/* Name */}
        <h2 className="text-2xl font-bold mt-3 line-clamp-1">
          {name}
        </h2>

        {/* Rating & Stock */}
        <div className="flex justify-between items-center mt-4">

          <div className="flex items-center gap-1">

            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="font-semibold">
              {rating}
            </span>

          </div>

          <span className="text-green-600 text-sm font-medium">
            {stock}
          </span>

        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-5">

          <h3 className="text-3xl font-bold text-green-600">
            ₹{price.toLocaleString()}
          </h3>

          <span className="line-through text-gray-400">
            ₹
            {Math.round(
              price / (1 - discount / 100)
            ).toLocaleString()}
          </span>

        </div>

        {/* Delivery */}
        <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">

          <Truck size={16} />

          {delivery}

        </div>

        {/* Warranty */}
        <div className="flex items-center gap-2 mt-2 text-sm text-blue-600">

          <ShieldCheck size={16} />

          {warranty}

        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-6">

          <Link
            to={`/product/${id}`}
            className="text-center py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-900 hover:text-white transition"
          >
            View Details
          </Link>

          <button
            onClick={handleAddToCart}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition"
          >
            Add Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;