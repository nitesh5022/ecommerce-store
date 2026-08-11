import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
} from "lucide-react";

const banners = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1800&q=80",
    title: "Latest Smartphones",
    subtitle: "Upgrade your phone with amazing deals",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1800&q=80",
    title: "Premium Laptops",
    subtitle: "Powerful laptops at unbeatable prices",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1800&q=80",
    title: "Smart Watches",
    subtitle: "Discover the latest smart watches",
  },
];

function Home() {
  const [current, setCurrent] = useState(0);

  // Automatic Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Previous Slide
  const previousSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + banners.length) % banners.length
    );
  };

  // Next Slide
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  return (
    <main className="bg-gray-100">

      {/* ================= HERO BANNER ================= */}

      <section className="relative w-full overflow-hidden">

        {/* Banner Image */}

        <img
          src={banners[current].image}
          alt={banners[current].title}
          className="w-full h-[420px] md:h-[500px] lg:h-[560px] object-cover"
        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-black/35"></div>

        {/* Hero Content */}

        <div className="absolute inset-0 flex items-center">

          <div className="max-w-7xl mx-auto w-full px-8 md:px-16">

            <div className="max-w-xl text-white">

              <p className="text-lg md:text-xl font-medium mb-3">
                ShopKart Exclusive
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {banners[current].title}
              </h1>

              <p className="mt-5 text-lg md:text-2xl text-gray-100">
                {banners[current].subtitle}
              </p>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 mt-8
                           bg-yellow-400 hover:bg-yellow-300
                           text-black font-semibold
                           px-8 py-4 rounded-lg
                           transition duration-300"
              >
                <ShoppingBag size={21} />
                Shop Now
              </Link>

            </div>

          </div>

        </div>

        {/* Previous Button */}

        <button
          onClick={previousSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2
                     w-12 h-12
                     bg-white/90 hover:bg-white
                     rounded-full
                     shadow-lg
                     flex items-center justify-center
                     transition"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Next Button */}

        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2
                     w-12 h-12
                     bg-white/90 hover:bg-white
                     rounded-full
                     shadow-lg
                     flex items-center justify-center
                     transition"
        >
          <ChevronRight size={28} />
        </button>

        {/* Slider Dots */}

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">

          {banners.map((banner, index) => (
            <button
              key={banner.id}
              onClick={() => setCurrent(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-8 bg-white"
                  : "w-3 bg-white/60"
              }`}
            />
          ))}

        </div>

      </section>

      {/* ================= QUICK FEATURES ================= */}

      <section className="bg-white py-8">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="text-center">
              <div className="text-3xl">🚚</div>
              <h3 className="font-semibold mt-2">
                Fast Delivery
              </h3>
              <p className="text-sm text-gray-500">
                Quick & reliable delivery
              </p>
            </div>

            <div className="text-center">
              <div className="text-3xl">💳</div>
              <h3 className="font-semibold mt-2">
                Secure Payment
              </h3>
              <p className="text-sm text-gray-500">
                100% secure checkout
              </p>
            </div>

            <div className="text-center">
              <div className="text-3xl">🔄</div>
              <h3 className="font-semibold mt-2">
                Easy Returns
              </h3>
              <p className="text-sm text-gray-500">
                Simple return policy
              </p>
            </div>

            <div className="text-center">
              <div className="text-3xl">⭐</div>
              <h3 className="font-semibold mt-2">
                Best Quality
              </h3>
              <p className="text-sm text-gray-500">
                Premium products
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= SHOP NOW SECTION ================= */}

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            Explore Our Products
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Discover amazing products at the best prices.
          </p>

          <Link
            to="/products"
            className="inline-block mt-7
                       bg-blue-600 hover:bg-blue-700
                       text-white
                       px-8 py-4
                       rounded-lg
                       font-semibold
                       transition"
          >
            View All Products
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Home;