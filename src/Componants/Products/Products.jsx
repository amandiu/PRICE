import React from "react";
import Product from "../Product/Product";

const Products = () => {
  const products = [
    {
      id: "101",
      name: "Wireless Bluetooth Headphones",
      description:
        "High-quality over-ear headphones with active noise cancellation.",
      price: 99.99,
      features: [
        "Bluetooth 5.0",
        "40-hour battery life",
        "Built-in microphone",
        "Foldable design for portability",
        "Comfortable memory foam ear cushions",
        "Supports voice assistants",
        "USB-C fast charging",
        "Customizable sound profiles via app",
      ],
    },
    {
      id: "102",
      name: "Smart LED Light Bulb",
      description:
        "Color-changing smart bulb compatible with Alexa and Google Assistant.",
      price: 19.99,
      features: [
        "16 million colors",
        "Wi-Fi enabled",
        "App control for scheduling",
        "Energy-efficient LED technology",
        "Compatible with voice commands",
        "Adjustable brightness and color temperature",
        "Group multiple bulbs for synchronized lighting",
        "Works with IFTTT for automation",
      ],
    },
    {
      id: "103",
      name: "Portable Power Bank",
      description: "10000mAh power bank with fast charging capabilities.",
      price: 29.99,
      features: [
        "Dual USB ports",
        "LED battery indicator",
        "Lightweight design",
        "Supports Quick Charge 3.0",
        "Overcharge and short-circuit protection",
        "Slim and compact for easy carrying",
        "Charges two devices simultaneously",
        "Durable aluminum casing",
      ],
    },
    {
      id: "104",
      name: "Ergonomic Office Chair",
      description: "Comfortable office chair with adjustable lumbar support.",
      price: 149.99,
      features: [
        "Mesh backrest for breathability",
        "Adjustable armrests and headrest",
        "360-degree swivel",
        "High-density foam cushion",
        "Tilt and height adjustment",
        "Durable nylon base with smooth-rolling casters",
        "Supports up to 300 lbs",
        "Easy assembly with included tools",
      ],
    },
    {
      id: "105",
      name: "4K Action Camera",
      description:
        "Waterproof action camera with 4K video recording and Wi-Fi.",
      price: 89.99,
      features: [
        "170° wide-angle lens",
        "Built-in Wi-Fi for instant sharing",
        "Includes multiple mounts for versatility",
        "Supports up to 128GB microSD card",
        "2-inch LCD screen for live preview",
        "Waterproof up to 30 meters",
        "Time-lapse and slow-motion modes",
        "Rechargeable battery with long life",
      ],
    },
    {
      id: "106",
      name: "Electric Kettle",
      description:
        "1.7-liter electric kettle with rapid boiling and auto shut-off.",
      price: 39.99,
      features: [
        "Stainless steel body",
        "Boil-dry protection",
        "360° base for cord-free convenience",
        "LED indicator light",
        "Large spout for easy pouring",
        "Removable and washable filter",
        "Cool-touch handle",
        "Fast boil time of 3-5 minutes",
      ],
    },
    {
      id: "107",
      name: "Smart Fitness Tracker",
      description:
        "Water-resistant fitness tracker with heart rate monitor and sleep tracking.",
      price: 49.99,
      features: [
        "7-day battery life",
        "OLED display",
        "Step and calorie tracking",
        "Heart rate monitoring",
        "Water-resistant up to 50 meters",
        "Sleep quality analysis",
        "Smart notifications for calls and messages",
        "Compatible with iOS and Android",
      ],
    },
    {
      id: "108",
      name: "Robot Vacuum Cleaner",
      description: "Smart robot vacuum with app control and voice commands.",
      price: 199.99,
      features: [
        "Auto-charging and scheduling",
        "HEPA filter for allergen removal",
        "Works on carpets and hard floors",
        "Obstacle detection sensors",
        "Compact design to clean under furniture",
        "Remote control via app",
        "Quiet operation",
        "Supports Alexa and Google Assistant",
      ],
    },
    {
      id: "109",
      name: "Portable Camping Tent",
      description: "Lightweight 4-person camping tent with easy setup.",
      price: 79.99,
      features: [
        "Weather-resistant material",
        "Built-in ventilation",
        "Compact storage bag",
        "Spacious interior for 4 people",
        "Easy setup in 5 minutes",
        "Waterproof rainfly included",
        "Durable fiberglass poles",
        "Internal pockets for gear storage",
      ],
    },
    {
      id: "110",
      name: "Stainless Steel Cookware Set",
      description:
        "10-piece cookware set with durable stainless steel construction.",
      price: 129.99,
      features: [
        "Oven-safe up to 500°F",
        "Dishwasher-safe",
        "Even heat distribution",
        "Ergonomic handles for comfortable grip",
        "Tempered glass lids with steam vents",
        "Compatible with all stovetops including induction",
        "Scratch-resistant surface",
        "Lifetime warranty",
      ],
    },
  ];

  return (
    <div>
      <p class="underline hover:underline-offset-8 text-center -mb-10 mt-4 text-4xl font-extrabold text-white hover:text-blue-300">
        OUR PRODUCTS
      </p>
      <div className="grid p-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
