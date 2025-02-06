import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import letscook from "../../assets/img/Letscook.jpg";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
        setRecipe(response.data);

        // Check if this recipe is already in favorites
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setIsFavorite(favorites.some((fav) => fav.id === response.data.id));
      } catch (err) {
        console.error("Error fetching recipe details:", err);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  const handleFavoriteToggle = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter((fav) => fav.id !== recipe.id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      // Add to favorites
      favorites.push(recipe);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  if (!recipe) {
    return (
      <div className="flex justify-center items-center h-screen">
        <motion.div
          className="w-16 h-16 border-4 border-t-orange-500 border-gray-300 rounded-full animate-spin"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar />

      {/* Banner Section */}
      <motion.div
        className="relative flex flex-col md:flex-row items-center p-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-full">
          <img
            src={letscook}
            className="rounded-lg drop-shadow-xl w-full h-56 md:h-72 lg:h-96 object-cover"
            alt="Let's Cook"
          />
          <h1 className="absolute top-1/2 left-5 transform -translate-y-1/2 text-black drop-shadow-md text-lg sm:text-2xl md:text-4xl font-bold w-3/4 lg:w-1/2">
            <div className="text-sm md:text-xl">Let's Cook</div>
            {recipe.name}
          </h1>
        </div>
      </motion.div>

      {/* Recipe Details Section */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Ingredients */}
        <motion.div
          className="w-full"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xl md:text-2xl font-bold">{recipe.mealType || "N/A"}</p>
          <p className="text-xl md:text-2xl py-3 font-semibold">Ingredients</p>
          <div className="space-y-2">
            {recipe.ingredients?.length > 0 ? (
              recipe.ingredients.map((ingredient, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-orange-500 text-lg font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="text-gray-600 text-sm sm:text-lg">{ingredient}</div>
                </motion.div>
              ))
            ) : (
              <motion.div
                className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-orange-500 text-lg font-bold">01</div>
                <div className="text-gray-600 text-sm sm:text-lg">No ingredients available</div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Recipe Image */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto object-cover rounded-lg"
          />
        </motion.div>
      </div>

      {/* Instructions */}
      <motion.p
        className="mt-4 text-lg sm:text-xl text-justify p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <strong>Instructions:</strong>{" "}
        {Array.isArray(recipe.instructions)
          ? recipe.instructions.join(" ")
          : recipe.instructions}
      </motion.p>

      {/* Add to Favorites Button */}
      <div className="flex justify-center my-6">
        <button
          onClick={handleFavoriteToggle}
          className={`px-6 py-2 rounded-lg text-white font-semibold transition ${
            isFavorite ? "bg-red-500 hover:bg-red-600" : "bg-orange-500 hover:bg-orange-600"
          }`}
        >
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>

      <Footer />
    </motion.div>
  );
}
