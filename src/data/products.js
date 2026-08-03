const products = [
  {
    id: 1,
    name: "iPhone 16",
    brand: "Apple",
    category: "Mobile",
    price: 79999,

    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",

    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505",
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e",
    ],

    rating: 4.8,
    stock: "In Stock",
    discount: 20,
    delivery: "Free Delivery",
    warranty: "1 Year Warranty",

    description:
      "Latest Apple iPhone with A18 Bionic Chip, Super Retina XDR Display and Advanced Camera System.",
  },

  {
    id: 2,
    name: "Samsung S25",
    brand: "Samsung",
    category: "Mobile",
    price: 69999,

    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",

    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505",
    ],

    rating: 4.7,
    stock: "In Stock",
    discount: 15,
    delivery: "Free Delivery",
    warranty: "1 Year Warranty",

    description:
      "Samsung flagship smartphone with Dynamic AMOLED display and flagship performance.",
  },

  {
    id: 3,
    name: "MacBook Air",
    brand: "Apple",
    category: "Laptop",
    price: 99999,

    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",

    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
    ],

    rating: 4.9,
    stock: "In Stock",
    discount: 10,
    delivery: "Free Delivery",
    warranty: "2 Years Warranty",

    description:
      "Apple MacBook Air with Retina Display and powerful performance.",
  },

  {
    id: 4,
    name: "Apple Watch",
    brand: "Apple",
    category: "Watch",
    price: 39999,

    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",

    images: [
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
    ],

    rating: 4.6,
    stock: "In Stock",
    discount: 25,
    delivery: "Free Delivery",
    warranty: "1 Year Warranty",

    description:
      "Premium Apple Watch with health tracking and fitness features.",
  },

  {
    id: 5,
    name: "AirPods Pro",
    brand: "Apple",
    category: "Headphone",
    price: 24999,

    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37",

    images: [
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
    ],

    rating: 4.8,
    stock: "Limited Stock",
    discount: 18,
    delivery: "Free Delivery",
    warranty: "1 Year Warranty",

    description:
      "AirPods Pro with Active Noise Cancellation and Spatial Audio.",
  },

  {
    id: 6,
    name: "Gaming Mouse",
    brand: "Logitech",
    category: "Accessories",
    price: 2999,

    image: "https://images.unsplash.com/photo-1527814050087-3793815479db",

    images: [
      "https://images.unsplash.com/photo-1527814050087-3793815479db",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7",
      "https://images.unsplash.com/photo-1629429408209-1f912961dbd8",
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
    ],

    rating: 4.5,
    stock: "In Stock",
    discount: 30,
    delivery: "Free Delivery",
    warranty: "2 Years Warranty",

    description:
      "RGB Gaming Mouse with programmable buttons and adjustable DPI.",
  },

  {
    id: 7,
    name: "Sony Headphones",
    brand: "Sony",
    category: "Headphone",
    price: 14999,

    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",

    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
      "https://images.unsplash.com/photo-1608156639585-b3a032ef9689",
    ],

    rating: 4.7,
    stock: "Limited Stock",
    discount: 22,
    delivery: "Free Delivery",
    warranty: "2 Years Warranty",

    description:
      "Sony premium wireless headphones with deep bass and ANC.",
  },

  {
    id: 8,
    name: "Dell XPS 15",
    brand: "Dell",
    category: "Laptop",
    price: 129999,

    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",

    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
    ],

    rating: 4.9,
    stock: "Only 3 Left",
    discount: 12,
    delivery: "Free Delivery",
    warranty: "3 Years Warranty",

    description:
      "Dell XPS 15 premium laptop for professionals with high-end performance.",
  },
];

export default products;