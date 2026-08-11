import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import CategoryBar from "../components/CategoryBar";
import HeroBanner from "../components/HeroBanner";
import Deals from "../components/Deals";

const Products = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [sortOrder, setSortOrder] = useState("");

  // Filter Products
  const filteredProducts = products.filter((item) => {
    const matchSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || item.category === category;

    let matchPrice = true;

    if (priceRange === "0-5000") {
      matchPrice = item.price <= 5000;
    }

    if (priceRange === "5001-50000") {
      matchPrice =
        item.price > 5000 &&
        item.price <= 50000;
    }

    if (priceRange === "50001+") {
      matchPrice = item.price > 50000;
    }

    return (
      matchSearch &&
      matchCategory &&
      matchPrice
    );
  });

  // Sorting
  const sortedProducts = [...filteredProducts];

  if (sortOrder === "low-high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sortOrder === "high-low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  if (sortOrder === "a-z") {
    sortedProducts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  if (sortOrder === "z-a") {
    sortedProducts.sort((a, b) =>
      b.name.localeCompare(a.name)
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-100">

      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 py-20">

        <div className="w-full text-center px-6">

          <h1 className="text-6xl font-bold text-white">
            Our Products
          </h1>

          <p className="mt-4 text-xl text-blue-100">
            Discover premium gadgets with amazing offers.
          </p>

        </div>

      </div>

      {/* Filters */}
      <div className="w-full px-10 -mt-10">

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

            {/* Search */}
            <input
              type="text"
              placeholder="Search Products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Category */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>All</option>
              <option>Mobile</option>
              <option>Laptop</option>
              <option>Watch</option>
              <option>Headphone</option>
              <option>Accessories</option>
            </select>

            {/* Price */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Prices</option>
              <option value="0-5000">₹0 - ₹5,000</option>
              <option value="5001-50000">₹5,001 - ₹50,000</option>
              <option value="50001+">₹50,001+</option>
            </select>

            {/* Sort */}
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Sort By</option>
              <option value="low-high">Price : Low to High</option>
              <option value="high-low">Price : High to Low</option>
              <option value="a-z">Name : A-Z</option>
              <option value="z-a">Name : Z-A</option>
            </select>

          </div>

        </div>

      </div>

      {/* Product Count */}
      <div className="w-full px-10 mt-10">

        <h2 className="text-3xl font-bold text-gray-700">
          {sortedProducts.length} Products Found
        </h2>

      </div>

      {/* Products */}
      <div className="w-full px-10 py-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

          {sortedProducts.length > 0 ? (

            sortedProducts.map((item) => (

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

            ))

          ) : (

            <div className="col-span-5 text-center py-20">

              <h2 className="text-3xl font-bold text-gray-500">
                No Product Found 😔
              </h2>

            </div>

          )}

        </div>

      </div>

    </div>
  );
};

export default Products;