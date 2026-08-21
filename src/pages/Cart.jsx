import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);

  // Total Items
  const totalItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  // Subtotal
  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  // Delivery Charge
  const deliveryCharge = subtotal === 0 || subtotal >= 50000 ? 0 : 99;

  // Grand Total
  const grandTotal = subtotal + deliveryCharge;

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">

      {/* Page Heading */}
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          Shopping Cart
        </h1>

        <p className="text-gray-500 mb-10">
          Review your items before checkout.
        </p>

        {cart.length === 0 ? (

          /* Empty Cart */
          <div className="bg-white rounded-2xl shadow-md p-12 text-center">

            <h2 className="text-3xl font-bold text-gray-700">
              Your Cart is Empty
            </h2>

            <p className="text-gray-500 mt-3">
              Add some products to your cart and come back here.
            </p>

          </div>

        ) : (

          /* Cart Layout */
          <div className="grid lg:grid-cols-3 gap-8">

            {/* =========================
                LEFT SIDE - CART PRODUCTS
            ========================== */}

            <div className="lg:col-span-2 space-y-6">

              {/* Total Items */}
              <div className="bg-white rounded-2xl shadow-md p-5">

                <h2 className="text-2xl font-bold text-gray-800">
                  Cart Items ({totalItems})
                </h2>

              </div>

              {/* Products */}
              {cart.map((item) => (

                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-md p-6"
                >

                  <div className="flex flex-col md:flex-row gap-6">

                    {/* Product Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full md:w-40 h-40 object-cover rounded-xl"
                    />

                    {/* Product Information */}
                    <div className="flex-1">

                      <h2 className="text-2xl font-bold text-gray-900">
                        {item.name}
                      </h2>

                      <p className="text-gray-500 mt-1">
                        {item.brand}
                      </p>

                      {/* Price */}
                      <p className="text-2xl font-bold text-green-600 mt-4">
                        ₹{item.price.toLocaleString()}
                      </p>

                      {/* Quantity */}
                      <div className="flex items-center gap-5 mt-5">

                        <span className="font-semibold text-gray-600">
                          Quantity:
                        </span>

                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 text-white text-xl font-bold transition"
                        >
                          -
                        </button>

                        <span className="text-xl font-bold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQty(item.id)}
                          className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 text-white text-xl font-bold transition"
                        >
                          +
                        </button>

                      </div>

                      {/* Item Total */}
                      <p className="text-gray-600 mt-4">
                        Item Total:{" "}
                        <span className="font-bold text-gray-900">
                          ₹
                          {(item.price * item.quantity).toLocaleString()}
                        </span>
                      </p>

                      {/* Remove */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="mt-5 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition"
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>


            {/* =========================
                RIGHT SIDE - ORDER SUMMARY
            ========================== */}

            <div>

              <div className="bg-white rounded-2xl shadow-lg p-7 sticky top-6">

                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Order Summary
                </h2>

                {/* Total Items */}
                <div className="flex justify-between text-gray-600 mb-4">

                  <span>
                    Total Items
                  </span>

                  <span className="font-semibold text-gray-900">
                    {totalItems}
                  </span>

                </div>

                {/* Subtotal */}
                <div className="flex justify-between text-gray-600 mb-4">

                  <span>
                    Subtotal
                  </span>

                  <span className="font-semibold text-gray-900">
                    ₹{subtotal.toLocaleString()}
                  </span>

                </div>

                {/* Delivery */}
                <div className="flex justify-between text-gray-600 mb-5">

                  <span>
                    Delivery
                  </span>

                  <span className="font-semibold text-green-600">

                    {deliveryCharge === 0
                      ? "FREE"
                      : `₹${deliveryCharge}`}

                  </span>

                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-5"></div>

                {/* Grand Total */}
                <div className="flex justify-between items-center">

                  <span className="text-xl font-bold text-gray-900">
                    Total
                  </span>

                  <span className="text-2xl font-bold text-green-600">
                    ₹{grandTotal.toLocaleString()}
                  </span>

                </div>

                {/* Checkout Button */}
                <button
                  className="w-full mt-7 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg transition"
                >
                  Proceed to Checkout
                </button>

                {/* Free Delivery Message */}
                {deliveryCharge === 0 && (
                  <p className="text-center text-green-600 text-sm font-medium mt-4">
                    🎉 You got FREE delivery!
                  </p>
                )}

              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default Cart;