import React, { useState } from "react";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi"; // Menu Icon
import Recopelogo from "../../assets/img/Recopelogo.png"; // Correct image import
import { useNavigate } from "react-router-dom";

function Navbar() {
   
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <nav className="bg-white text-gray-700 px-5 py-3 flex justify-between items-center shadow-md">
            {/* Logo */}
            <div className="w-14 h-14">
                <img src={Recopelogo} alt="Recopelogo" className="w-full" />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6 justify-center">
            <li>
            <a onClick={() => navigate("/")} className="relative fade-in after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-400">
                Home
            </a>
            </li>

            <li>
                <a onClick={() => navigate("/Recipes")} className="relative fade-in after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-400">
                Recipes
                </a>
            </li>
            <li>
                <a onClick={() => navigate("/About")} className="relative fade-in after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-400">
                About
                </a>
            </li>  
            <li>
                <a onClick={() => navigate("/FavoriteRecipes")} className="relative fade-in after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-400">
                FavoriteRecipes
                </a>
            </li> 
            {/* <li>
                <a onClick={() => navigate("/Contact")} className="relative fade-in after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-400">
                Contact
                </a>
            </li> */}
            </ul>


            {/* Search Icon & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <BsFillSearchHeartFill
                className="w-6 h-6 text-gray-700 hover:text-yellow-400 cursor-pointer"
                onClick={() => setShowSearch(!showSearch)}
            />

            {/* Search Input (Conditional Rendering) */}
            {showSearch && (
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-3 py-1 border rounded-lg outline-none focus:ring focus:ring-yellow-400"
                />
            )}

            {/* Menu Icon */}
            <FiMenu
                className="w-8 h-8 md:hidden cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
            />
        </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        <li><a href="/" className="hover:text-yellow-400">Home</a></li>
                        <li><a href="/recipes" className="hover:text-yellow-400">Recipes</a></li>
                        <li><a href="/about" className="hover:text-yellow-400">About</a></li>
                        <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
