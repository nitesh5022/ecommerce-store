import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center">

          <h1 className="text-5xl font-bold text-gray-900">
            Welcome to
            <span className="text-blue-600"> ShopKart</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Discover amazing products at the best prices.
          </p>

          <Link
            to="/products"
            className="inline-block mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Shop Now
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;