
import reviews from "../data/reviews";
import ReviewCard from "../components/ReviewCard";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { Heart, Star, Truck } from "lucide-react";
import toast from "react-hot-toast";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const {
    wishlist,
    addToWishlist,
    removeFromWishlist,
  } = useContext(WishlistContext);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <h1 className="text-center text-4xl mt-20">
        Product Not Found
      </h1>
    );
  }

  // Main Image State
  const [selectedImage, setSelectedImage] = useState(
    product.images?.[0] || product.image
  );

  // Related Products
  const relatedProducts = products.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  );

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  const handleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
      toast.success("Removed from Wishlist");
    } else {
      addToWishlist(product);
      toast.success("Added to Wishlist ❤️");
    }
  };

  const handleCart = () => {
    addToCart(product);
    toast.success("Added to Cart 🛒");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">

      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}

          <div>

            <div className="relative">

              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-[500px] object-cover rounded-3xl shadow-lg hover:scale-105 duration-500"
              />

              <button
                onClick={handleWishlist}
                className="absolute top-5 right-5 bg-white p-3 rounded-full shadow-lg"
              >
                <Heart
                  className={
                    isWishlisted
                      ? "fill-red-500 text-red-500"
                      : "text-gray-500"
                  }
                />
              </button>

            </div>

            {/* Thumbnail Gallery */}

            <div className="grid grid-cols-4 gap-4 mt-5">

              {(product.images || [product.image]).map(
                (img, index) => (

                  <img
                    key={index}
                    src={img}
                    alt=""
                    onClick={() => setSelectedImage(img)}
                    className={`h-24 w-full object-cover rounded-xl cursor-pointer border-2 transition hover:scale-105 ${
                      selectedImage === img
                        ? "border-blue-600"
                        : "border-gray-300"
                    }`}
                  />

                )
              )}

            </div>

          </div>

          {/* Right Side */}

          <div>

            <p className="text-blue-600 text-lg font-semibold">
              {product.brand}
            </p>

            <h1 className="text-5xl font-bold mt-2">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-5">

              <Star
                size={22}
                className="fill-yellow-400 text-yellow-400"
              />

              <span className="font-semibold">
                {product.rating}
              </span>

              <span className="text-gray-500">
                (120 Reviews)
              </span>

            </div>

            <div className="flex items-center gap-4 mt-6">

              <h2 className="text-5xl font-bold text-green-600">
                ₹{product.price.toLocaleString()}
              </h2>

              <span className="line-through text-xl text-gray-400">
                ₹
                {Math.round(
                  product.price /
                    (1 - product.discount / 100)
                ).toLocaleString()}
              </span>

            </div>

            <p className="mt-5 text-green-600 font-bold">
              {product.stock}
            </p>

            <div className="flex items-center gap-2 mt-4 text-green-600">

              <Truck size={20} />

              <span>{product.delivery}</span>

            </div>

            <p className="mt-3 text-blue-600">
              {product.warranty}
            </p>

            <p className="mt-8 leading-8 text-gray-600">
              {product.description}
            </p>

            <div className="flex gap-4 mt-10">

              <button
                onClick={handleCart}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl"
              >
                Add To Cart
              </button>

              <button
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl"
              >
                Buy Now
              </button>

            </div>

          </div>

        </div>

      </div>

            {/* Related Products */}

      <div className="max-w-7xl mx-auto mt-16">

        <h2 className="text-4xl font-bold mb-8">
          Related Products
        </h2>

        {relatedProducts.length > 0 ? (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {relatedProducts.map((item) => (

              <ProductCard
                key={item.id}
                id={item.id}
                name={item.name}
                brand={item.brand}
                image={item.image}
                price={item.price}
                rating={item.rating}
                stock={item.stock}
                discount={item.discount}
                delivery={item.delivery}
                warranty={item.warranty}
              />

            ))}

          </div>

        ) : (

          <div className="bg-white rounded-2xl shadow-md p-8 text-center">

            <h3 className="text-2xl font-semibold text-gray-500">
              No Related Products Found 😔
            </h3>

          </div>

        )}

      </div>

    </div>
  );
}

export default ProductDetails;