import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function WebNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-primary px-4 md:px-10 rounded-b-3xl">
            <div className="flex justify-between items-center py-3 text-2xl text-white font-bold">
                {/* Logo or Brand */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate("/")}
                    className="cursor-pointer hover:text-primary hover:bg-white rounded-3xl px-4 py-2"
                >
                    Comet Live.
                </motion.div>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden">
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
                                className="h-8 w-8"
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
                                className="h-8 w-8"
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

                {/* Menu Items for Larger Screens */}
                <div className="hidden md:flex space-x-8">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => navigate("/about")}
                        className="cursor-pointer hover:text-primary hover:bg-white rounded-3xl px-4 py-2"
                    >
                        About.
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => navigate("/download")}
                        className="cursor-pointer hover:text-primary hover:bg-white rounded-3xl px-4 py-2"
                    >
                        Download.
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => navigate("/contact")}
                        className="cursor-pointer hover:text-primary hover:bg-white rounded-3xl px-4 py-2"
                    >
                        Contact.
                    </motion.div>
                </div>
            </div>

            {/* Mobile Menu (Only visible on small screens) */}
            {isOpen && (
                <motion.div
                    className="md:hidden flex flex-col items-center space-y-4 py-4 text-xl bg-primary text-white rounded-b-3xl font-bold"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                            navigate("/about");
                            toggleMenu();
                        }}
                        className="cursor-pointer hover:text-primary hover:bg-white rounded-3xl px-4 py-2"
                    >
                        About.
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                            navigate("/download");
                            toggleMenu();
                        }}
                        className="cursor-pointer hover:text-primary hover:bg-white rounded-3xl px-4 py-2"
                    >
                        Download.
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                            navigate("/contact");
                            toggleMenu();
                        }}
                        className="cursor-pointer hover:text-primary hover:bg-white rounded-3xl px-4 py-2"
                    >
                        Contact.
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}
