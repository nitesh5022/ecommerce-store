import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  const moveToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);

    toast.success(`${product.name} moved to Cart 🛒`);
  };

  if (wishlist.length === 0) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <h1 className="text-4xl font-bold text-gray-400">
          ❤️ Wishlist is Empty
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">

      <h1 className="text-5xl font-bold text-center mb-10">
        My Wishlist ❤️
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">

        {wishlist.map((item) => (

          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg p-5"
          >

            <img
              src={item.image}
              alt={item.name}
              className="w-full h-60 object-cover rounded-lg"
            />

            <div className="text-center mt-5">

              <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
                {item.brand}
              </span>

              <h2 className="text-3xl font-bold mt-3">
                {item.name}
              </h2>

              <h3 className="text-green-600 text-4xl font-bold mt-4">
                ₹{item.price.toLocaleString()}
              </h3>

            </div>

            <div className="flex gap-3 mt-6">

              <button
                onClick={() => moveToCart(item)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
              >
                Move To Cart
              </button>

              <button
                onClick={() => removeFromWishlist(item.id)}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg"
              >
                Remove
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Wishlist;