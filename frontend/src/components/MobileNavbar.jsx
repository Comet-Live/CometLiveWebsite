import React, { useState } from "react";
import { motion } from "framer-motion";

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-primary text-white fixed w-full top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
                {/* Logo */}
                <div className="text-2xl font-bold">MyLogo</div>

                {/* Hamburger Menu */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        {isOpen ? (
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-6 w-6"
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 90 }}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </motion.svg>
                        ) : (
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-6 w-6"
                                initial={{ rotate: 90 }}
                                animate={{ rotate: 0 }}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </motion.svg>
                        )}
                    </button>
                </div>

                {/* Menu Items for Desktop */}
                <div className="hidden lg:flex space-x-8">
                    <a href="#home" className="hover:text-secondary">
                        Home
                    </a>
                    <a href="#about" className="hover:text-secondary">
                        About
                    </a>
                    <a href="#services" className="hover:text-secondary">
                        Services
                    </a>
                    <a href="#contact" className="hover:text-secondary">
                        Contact
                    </a>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    className="lg:hidden flex flex-col bg-primary text-white px-4 py-4 space-y-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    <a
                        href="#home"
                        className="hover:text-secondary"
                        onClick={toggleMenu}
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="hover:text-secondary"
                        onClick={toggleMenu}
                    >
                        About
                    </a>
                    <a
                        href="#services"
                        className="hover:text-secondary"
                        onClick={toggleMenu}
                    >
                        Services
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-secondary"
                        onClick={toggleMenu}
                    >
                        Contact
                    </a>
                </motion.div>
            )}
        </nav>
    );
};

export default MobileNavbar;
