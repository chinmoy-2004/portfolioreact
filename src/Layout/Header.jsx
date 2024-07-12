import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50 shadow-lg">
            <nav className=" bg-gray-800 px-4 lg:px-5 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
                    <Link to="/" className="flex items-center hover:animate-none">
                   
                            <img
                                src="/assets/file (1).png"
                                className="mr-3 h-16 animate-spin  hover:scale-150"
                                alt="Logo"
                            />
                     
                    </Link>
                    <button
                        onClick={toggleMenu}
                        className="inline-flex items-center p-2 ml-3 text-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="mobile-menu-2"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                            ></path>
                        </svg>
                    </button>
                    <div
                        className={`${isMenuOpen ? "block" : "hidden"} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 rounded lg:p-0 ${isActive ? "text-orange-400" : "text-white"} hover:text-yellow-300 transition-colors duration-300`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 rounded lg:p-0 ${isActive ? "text-orange-400" : "text-white"} hover:text-yellow-300 transition-colors duration-300`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 rounded lg:p-0 ${isActive ? "text-orange-400" : "text-white"} hover:text-yellow-300 transition-colors duration-300`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/projects"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 rounded lg:p-0 ${isActive ? "text-orange-400" : "text-white"} hover:text-yellow-300 transition-colors duration-300`
                                    }
                                >
                                    Projects
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
