import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function WebNavbar() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="bg-primary mx-10 rounded-b-3xl">
                <div className="flex justify-around items-center py-3 text-2xl text-white font-bold">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => navigate("/")}
                        className="cursor-pointer hover:text-primary hover:bg-white rounded-3xl px-4 py-2"
                    >
                        Comet Live.
                    </motion.div>
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
        </div>
    );
}
