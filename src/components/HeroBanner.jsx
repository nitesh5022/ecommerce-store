import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  {
    id: 1,
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/placeholder.jpg",
    title: "Big Billion Days",
    subtitle: "Best Deals on Mobiles, Electronics & More",
  },
  {
    id: 2,
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/placeholder.jpg",
    title: "Premium Electronics",
    subtitle: "Upgrade Your Gadgets at Amazing Prices",
  },
  {
    id: 3,
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/placeholder.jpg",
    title: "Fashion Sale",
    subtitle: "Trending Styles at Best Prices",
  },
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + banners.length) % banners.length
    );
  };

  return (
    <section className="w-full bg-gray-100 py-3">

      <div className="relative w-full overflow-hidden">

        {/* Banner Image */}
        <img
          src={banners[current].image}
          alt={banners[current].title}
          className="w-full h-[300px] md:h-[360px] lg:h-[420px] object-cover"
        />

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 
                     bg-white/90 hover:bg-white 
                     w-12 h-12 rounded-full shadow-lg 
                     flex items-center justify-center"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 
                     bg-white/90 hover:bg-white 
                     w-12 h-12 rounded-full shadow-lg 
                     flex items-center justify-center"
        >
          <ChevronRight size={28} />
        </button>

        {/* Banner Text */}
        <div className="absolute inset-0 flex items-center">

          <div className="ml-10 md:ml-20 text-white">

            <h2 className="text-3xl md:text-5xl font-bold">
              {banners[current].title}
            </h2>

            <p className="mt-3 text-lg md:text-2xl">
              {banners[current].subtitle}
            </p>

            <button
              className="mt-6 bg-yellow-400 
                         text-black font-semibold 
                         px-7 py-3 rounded-lg
                         hover:bg-yellow-300"
            >
              Shop Now
            </button>

          </div>

        </div>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">

          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index
                  ? "bg-white"
                  : "bg-white/50"
              }`}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default HeroBanner;