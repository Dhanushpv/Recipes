import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Componets/Home/Home";
import Recipes from "./Componets/Recipes/Recipes";
import RecipeDetails from "./Componets/RecipesDetail/RecipesDetail";
import About from "./Componets/About/About";
import FavoriteRecipes from "./Componets/Favorite/Favorite";
import Contact from "./Componets/Contact/Contact";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/About" element={<About />} />
          <Route path="/FavoriteRecipes" element={<FavoriteRecipes />} />
          <Route path="/Contact" element={<Contact />} />



        </Routes>
      </Router>
    </div>
  );
}

export default App;
