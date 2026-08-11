import {
  Smartphone,
  Shirt,
  Laptop,
  Home,
  Tv,
  Armchair,
  BookOpen,
  Gamepad2,
  ShoppingBag,
} from "lucide-react";

function CategoryBar() {
  const categories = [
    {
      name: "Mobiles",
      icon: <Smartphone size={32} />,
    },
    {
      name: "Fashion",
      icon: <Shirt size={32} />,
    },
    {
      name: "Electronics",
      icon: <Laptop size={32} />,
    },
    {
      name: "Beauty",
      icon: <ShoppingBag size={32} />,
    },
    {
      name: "Home",
      icon: <Home size={32} />,
    },
    {
      name: "Appliances",
      icon: <Tv size={32} />,
    },
    {
      name: "Furniture",
      icon: <Armchair size={32} />,
    },
    {
      name: "Books",
      icon: <BookOpen size={32} />,
    },
    {
      name: "Sports",
      icon: <Gamepad2 size={32} />,
    },
  ];

  return (
    <div className="bg-white shadow-sm">

      <div className="max-w-7xl mx-auto py-5 px-4 flex justify-between items-center">

        {categories.map((item, index) => (

          <div
            key={index}
            className="flex flex-col items-center cursor-pointer hover:text-blue-600 transition"
          >
            {item.icon}

            <p className="mt-2 font-medium text-sm">
              {item.name}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default CategoryBar;