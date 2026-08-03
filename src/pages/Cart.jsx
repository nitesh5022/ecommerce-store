import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);

  // Total Price
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">

      <h1 className="text-5xl font-bold mb-10">
        Shopping Cart
      </h1>

      <h2 className="text-2xl">
        Total Items : {cart.length}
      </h2>

      <h2 className="text-3xl font-bold text-green-600 mt-3 mb-10">
        Total Price : ₹{totalPrice.toLocaleString()}
      </h2>

      {cart.length === 0 ? (
        <h2 className="text-2xl text-gray-500">
          Cart is Empty
        </h2>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 bg-white shadow-lg rounded-xl p-5"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-36 h-36 rounded-lg object-cover"
              />

              <div className="flex flex-col justify-between flex-1">

                <div>

                  <h2 className="text-2xl font-bold">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    {item.brand}
                  </p>

                  <h3 className="text-green-600 text-2xl font-bold mt-3">
                    ₹{item.price.toLocaleString()}
                  </h3>

                  <div className="flex items-center gap-4 mt-5">

                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="bg-red-500 text-white w-10 h-10 rounded-full"
                    >
                      -
                    </button>

                    <span className="text-2xl font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="bg-green-500 text-white w-10 h-10 rounded-full"
                    >
                      +
                    </button>

                  </div>

                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-5 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
                >
                  Remove
                </button>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Cart;