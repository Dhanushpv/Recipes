import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import RecipeFinder from '../../assets/img/headingrecipes.jpg';
import { LuChefHat } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Footer from "../Footer/Footer";

export default function Recipes() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [mealType, setMealType] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/recipes");
        setRecipes(res.data.recipes);
        setFilteredRecipes(res.data.recipes);
      } catch (err) {
        console.error("Error fetching recipes:", err);
      }
    };

    fetchRecipes();
  }, []);

  useEffect(() => {
    let filtered = recipes;
  
    if (search) {
      filtered = filtered.filter((recipe) =>
        recipe.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  
    if (mealType) {
      filtered = filtered.filter((recipe) => {
        if (Array.isArray(recipe.mealType)) {
          return recipe.mealType.some((type) =>
            type.toLowerCase().includes(mealType.toLowerCase())
          );
        }
        return recipe.mealType?.toLowerCase() === mealType.toLowerCase();
      });
    }
  
    setFilteredRecipes(filtered);
  }, [search, mealType, recipes]);

  const uniqueCategories = [
    ...new Set(
      recipes
        .map((r) =>
          Array.isArray(r.mealType) ? r.mealType.join(", ") : r.mealType
        )
    )
  ].filter(Boolean);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div>
      <Navbar />

      <div className="p-6">
        <div className="relative flex items-center py-5 sm:px-6 md:px-8"
         data-aos="fade-up"
         data-aos-delay={ 100}
        
        >
          <img src={RecipeFinder} alt="" className="rounded-lg w-full md:w-auto" />
          <h1 className="absolute md:left-24 text-2xl font-bold text-center text-white sm:text-xl md:text-5xl">
            Explore<span className="text-green-700"> Culinary</span> Insight
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6 sm:px-6 md:px-8" data-aos="fade-up"
         data-aos-delay={ 100}
        >
          <input
            type="text"
            placeholder="Search recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-2 border rounded"
          />

          <select
            onChange={(e) => setMealType(e.target.value)}
            value={mealType || ""}
            className="p-2 border rounded"
          >
            <option value="">All Categories</option>
            {uniqueCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <button
            onClick={() => {
              setSearch("");
              setMealType("");
            }}
            className="p-2 bg-gray-200 rounded"
          >
            Reset
          </button>
        </div>

        {/* Display Filtered Recipes */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:px-6 md:px-8">
            {filteredRecipes.map((recipe, index) => (
                <li
                key={recipe.id}
                className="border rounded shadow group relative overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={(index % 5) * 100} // Different delay for each card (multiplying index)
                >
                <img
                    src={recipe.image}
                    alt={recipe.name}
                    loading="lazy"
                    className="w-full h-full object-cover rounded group-hover:opacity-50 transition-opacity transform group-hover:scale-120 transition-transform duration-500 ease-in-out"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-transparent to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity p-4">
                    <div>
                    <h2 className="text-5xl font-bold text-white">{recipe.name}</h2>
                    <p className="text-xl text-white">{recipe.mealType}</p>
                    </div>
                    <button
                    onClick={() => navigate(`/recipes/${recipe.id}`)}
                    className="mt-2 px-4 py-2 bg-black text-white rounded-lg w-full flex justify-between"
                    >
                    <span>See Full Recipe</span>
                    <LuChefHat className="w-5 h-5 sm:w-6 sm:h-6 border rounded-lg p-1" />
                    </button>
                </div>
                </li>
            ))}
        </ul>

      </div>
      <Footer/>
    </div>
  );
}
