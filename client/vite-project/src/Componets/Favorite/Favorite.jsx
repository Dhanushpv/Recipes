import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function FavoriteRecipes() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((recipe) => recipe.id !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Favorite Recipes</h1>
        {favorites.length === 0 ? (
          <p className="text-center text-gray-500">No favorite recipes added.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((recipe) => (
              <div key={recipe.id} className="bg-white rounded-lg shadow-md p-4">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h2 className="text-lg font-semibold mt-2">{recipe.name}</h2>
                <p className="text-gray-500">{recipe.cuisine}</p>
                <div className="flex justify-between items-center mt-4">
                  <Link to={`/recipe/${recipe.id}`} className="text-orange-500 font-bold">
                    View Details
                  </Link>
                  <button
                    onClick={() => removeFromFavorites(recipe.id)}
                    className="text-red-500 font-bold"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
