import React from "react";

function Footer() {
    return (
        <div className="p-6">
            <footer className="bg-gray-900 text-white py-10 rounded-3xl">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div className="mb-6 md:mb-0">
                            <h1 className="text-4xl font-bold">
                                <span className="text-white">Lic</span>
                                <span className="text-yellow-500">eria</span>
                            </h1>
                            <p className="mt-2 text-gray-400">
                                Join Liceria  now and embark on a culinary journey to explore, create,
                                and savor amazing recipes!
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-16">
                            <div className="mb-6 md:mb-0">
                                <h2 className="font-bold mb-2">Company</h2>
                                <ul className="text-gray-400">
                                    <li className="mb-1">
                                        <a href="#" className="hover:text-yellow-500">
                                            Home
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#" className="hover:text-yellow-500">
                                            About Us
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#" className="hover:text-yellow-500">
                                            Recipes
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#" className="hover:text-yellow-500">
                                            Recipes Form
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-6 md:mb-0">
                                <h2 className="font-bold mb-2">Recipes</h2>
                                <ul className="text-gray-400">
                                    <li className="mb-1">
                                        <a href="#" className="hover:text-yellow-500">
                                            Appetizers
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#" className="hover:text-yellow-500">
                                            Main Courses
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#" className="hover:text-yellow-500">
                                            Deserts &amp; Sweets
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#" className="hover:text-yellow-500">
                                            International Flavors
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-6 md:mb-0">
                                <h2 className="font-bold mb-2">Contact</h2>
                                <ul className="text-gray-400">
                                    <li className="mb-1">
                                        <a href="#" className="hover:text-yellow-500">
                                            Instagram
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#" className="hover:text-yellow-500">
                                            Facebook
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#" className="hover:text-yellow-500">
                                            Twitter
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="#" className="hover:text-yellow-500">
                                            LinkedIn
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:space-x-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 rounded-full text-gray-900 mb-4 md:mb-0"
                            />
                            <button className="bg-yellow-500 text-white px-6 py-2 rounded-full">
                                Sign Up
                            </button>
                        </div>
                    </div>

                </div>
            </footer>
        </div>


    )
}
export default Footer