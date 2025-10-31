// src/components/Banner.jsx
import React, { useState, useEffect, } from "react";

const banners = [
  { 
    id: 1, 
    title: "Welcome to GreenNest", 
    subtitle: "Discover the joy of living with plants 🌿", 
    image: "https://images.pexels.com/photos/4503265/pexels-photo-4503265.jpeg?auto=compress&cs=tinysrgb&w=1200" 
  },
  { 
    id: 2, 
    title: "Decorate Your Space", 
    subtitle: "Transform your home with fresh greenery 🌱", 
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200" 
  },
  { 
    id: 6, 
    title: "Nature Indoors", 
    subtitle: "Bring the outdoors inside with lush greenery 🌿", 
    image: "https://images.pexels.com/photos/5699663/pexels-photo-5699663.jpeg?auto=compress&cs=tinysrgb&w=1200" 
  },
  { 
    id: 2, 
    title: "Decorate Your Space", 
    subtitle: "Transform your home with fresh greenery 🌱", 
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200" 
  },
   { 
    id: 5, 
    title: "Plant Care Made Easy", 
    subtitle: "Tips and tools to keep your plants happy and healthy 🌱", 
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1200" 
  },
];


const Banner = () => {

  const [current, setCurrent] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {banners.map((banner, i) => (
        <div
          key={banner.id}
          className={`absolute inset-0 flex flex-col md:flex-row items-center justify-between p-6 transition-all duration-1000 ease-in-out transform ${
            i === current ? "opacity-100 translate-x-0 z-10" : "opacity-0 -translate-x-10 z-0"
          }`}
        >
          <div className="md:w-1/2 text-center md:text-left space-y-3">
            <h2 className="text-3xl md:text-5xl font-bold text-green-700">{banner.title}</h2>
            <p className="text-gray-600 text-lg md:text-xl">{banner.subtitle}</p>
          </div>
          <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
            <img src={banner.image} alt={banner.title} className="w-full md:w-[450px] h-[280px] md:h-[380px] object-cover rounded-xl shadow-md" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
