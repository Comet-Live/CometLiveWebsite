import React from "react";
import WebNavbar from "../components/WebNavbar";
import { motion } from "framer-motion";

export default function Download() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <WebNavbar />

            {/* Main Content */}
            <div className="flex-grow flex flex-col items-center justify-center text-center p-4">
                <h1 className="text-4xl md:text-6xl font-bold text-primary mb-8">
                    Download Comet Live
                </h1>
                <p className="text-lg md:text-2xl mb-6">
                    Stay connected with fellow UTD students on the go. Download
                    our app on your mobile device and never miss an opportunity
                    to connect!
                </p>
                <div className="lg:flex gap-4">
                    {/* Download Buttons */}
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href="https://play.google.com/store/apps/details?id=com.cometlive"
                    >
                        <img
                            src="apple.png"
                            alt="App Store logo"
                            className="h-24 xs:h-16 w-auto"
                        />{" "}
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href="https://play.google.com/store/apps/details?id=com.cometlive"
                        className=""
                    >
                        <img
                            src="google.png"
                            alt="Google logo"
                            className="h-24 xs:h-16 w-auto mt-3 lg:mt-0"
                        />
                    </motion.a>
                </div>
            </div>
        </div>
    );
}
