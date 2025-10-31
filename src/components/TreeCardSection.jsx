// src/components/TreeCardSection.jsx
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const trees = [
  { id: 1, name: "Fiddle Leaf Fig", price: 45, rating: 4.5, image: "https://images.pexels.com/photos/4503265/pexels-photo-4503265.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 2, name: "Snake Plant", price: 30, rating: 4.0, image: "https://images.pexels.com/photos/5699664/pexels-photo-5699664.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 3, name: "Monstera", price: 50, rating: 4.8, image: "https://images.pexels.com/photos/6208081/pexels-photo-6208081.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 4, name: "Peace Lily", price: 25, rating: 4.2, image: "https://images.pexels.com/photos/3076897/pexels-photo-3076897.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 5, name: "Rubber Plant", price: 40, rating: 4.6, image: "https://images.pexels.com/photos/4503263/pexels-photo-4503263.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 6, name: "Aloe Vera", price: 20, rating: 4.1, image: "https://images.pexels.com/photos/3076899/pexels-photo-3076899.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 7, name: "ZZ Plant", price: 35, rating: 4.3, image: "https://images.pexels.com/photos/3076900/pexels-photo-3076900.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 8, name: "Spider Plant", price: 18, rating: 4.0, image: "https://images.pexels.com/photos/5699665/pexels-photo-5699665.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 9, name: "Boston Fern", price: 28, rating: 4.4, image: "https://images.pexels.com/photos/4503261/pexels-photo-4503261.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 10, name: "Pothos", price: 22, rating: 4.2, image: "https://images.pexels.com/photos/5699666/pexels-photo-5699666.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 11, name: "Bamboo Palm", price: 38, rating: 4.5, image: "https://images.pexels.com/photos/6207829/pexels-photo-6207829.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 12, name: "Calathea", price: 32, rating: 4.3, image: "https://images.pexels.com/photos/6208082/pexels-photo-6208082.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 13, name: "Dracaena", price: 27, rating: 4.1, image: "https://images.pexels.com/photos/4503262/pexels-photo-4503262.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 14, name: "Orchid", price: 55, rating: 4.7, image: "https://images.pexels.com/photos/6208083/pexels-photo-6208083.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 15, name: "Money Plant", price: 15, rating: 4.0, image: "https://images.pexels.com/photos/3076901/pexels-photo-3076901.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 16, name: "Lucky Bamboo", price: 18, rating: 4.1, image: "https://images.pexels.com/photos/5699667/pexels-photo-5699667.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

const TreeCardSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="py-16 px-6 md:px-12 bg-green-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-10">
        Our Plant Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {trees.map((tree) => (
          <div
            key={tree.id}
            data-aos="fade-up"
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img src={tree.image} alt={tree.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-green-800">{tree.name}</h3>
              <p className="text-green-700 font-medium">⭐ {tree.rating} | ${tree.price}</p>
              <button
                onClick={() => navigate(`/details/${tree.id}`)}
                className="mt-3 w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreeCardSection;
