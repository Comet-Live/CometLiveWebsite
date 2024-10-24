import React from "react";
import WebNavbar from "../components/WebNavbar";

export default function About() {
    return (
        <div>
            <WebNavbar />
            <div className="mx-10 rounded-3xl p-12">
                <h1 className="text-primary font-bold text-6xl">About.</h1>
                <p className="text-black">
                    Comet Live is a social media platform exclusively for college students, designed to help you make friends, connect with classmates, and even find that special someone on campus. Create a personalized profile, 
                    add your courses, and see who else shares your academic journey. Chat with classmates, form study groups, and expand your social circle within the university community. Are you looking to build meaningful connections or explore dating opportunities? Look no further! Whether you're a Business major or passionate about Arts and Humanities, Comet Live helps you find like-minded individuals who share your interests and 
                    academic pursuits. Our app provides a safe and familiar environment where you can scroll, match, and meet fellow students—be it for friendship, study partnerships, or romantic connections. Join the Comet Live community today and experience campus life like never before! Connect, engage, and thrive at your university.
                </p>
            </div>

            {/* Meet the Team Section */}
            <div className="text-center my-12">
                <h2 className="text-4xl font-bold">Meet the Team!</h2>
                
                {/* First Row */}
                <div className="grid grid-cols-4 gap-x-4 gap-y-8 mt-8 px-24">
                    <div className="relative group w-full max-w-[260px] mx-auto">
                        <img src="/path-to-image-1.jpg" alt="Maurya Doddala" className="rounded-md w-full object-cover" />
                        <div className="absolute bottom-0 bg-black bg-opacity-60 w-full p-2 text-center text-white transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">
                            <h3 className="font-semibold">Maurya Doddala</h3>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            <h3 className="font-bold text-lg">Maurya Doddala</h3>
                            <p>Chief Executive Officer</p>
                            <hr className="my-2 w-12 border-t-2 border-white" />
                            <div className="text-2xl">→</div>
                        </div>
                    </div>

                    <div className="relative group w-full max-w-[260px] mx-auto">
                        <img src="/path-to-image-2.jpg" alt="Yatin Vajja" className="rounded-md w-full object-cover" />
                        <div className="absolute bottom-0 bg-black bg-opacity-60 w-full p-2 text-center text-white transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">
                            <h3 className="font-semibold">Yatin Vajja</h3>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            <h3 className="font-bold text-lg">Yatin Vajja</h3>
                            <p>Chief Technology Officer</p>
                            <hr className="my-2 w-12 border-t-2 border-white" />
                            <div className="text-2xl">→</div>
                        </div>
                    </div>

                    <div className="relative group w-full max-w-[260px] mx-auto">
                        <img src="/path-to-image-3.jpg" alt="Sagnik Das" className="rounded-md w-full object-cover" />
                        <div className="absolute bottom-0 bg-black bg-opacity-60 w-full p-2 text-center text-white transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">
                            <h3 className="font-semibold">Sagnik Das</h3>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            <h3 className="font-bold text-lg">Sagnik Das</h3>
                            <p>Chief Operating Officer</p>
                            <hr className="my-2 w-12 border-t-2 border-white" />
                            <div className="text-2xl">→</div>
                        </div>
                    </div>

                    <div className="relative group w-full max-w-[260px] mx-auto">
                        <img src="/path-to-image-4.jpg" alt="Astha Bhatiya" className="rounded-md w-full object-cover" />
                        <div className="absolute bottom-0 bg-black bg-opacity-60 w-full p-2 text-center text-white transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">
                            <h3 className="font-semibold">Astha Bhatiya</h3>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            <h3 className="font-bold text-lg">Astha Bhatiya</h3>
                            <p>Business Analyst</p>
                            <hr className="my-2 w-12 border-t-2 border-white" />
                            <div className="text-2xl">→</div>
                        </div>
                    </div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-4 gap-x-4 gap-y-8 mt-8 px-24">
                    <div className="relative group w-full max-w-[260px] mx-auto">
                        <img src="/path-to-image-5.jpg" alt="Veer Shah" className="rounded-md w-full object-cover" />
                        <div className="absolute bottom-0 bg-black bg-opacity-60 w-full p-2 text-center text-white transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">
                            <h3 className="font-semibold">Veer Shah</h3>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            <h3 className="font-bold text-lg">Veer Shah</h3>
                            <p>Developer</p>
                            <hr className="my-2 w-12 border-t-2 border-white" />
                            <div className="text-2xl">→</div>
                        </div>
                    </div>

                    <div className="relative group w-full max-w-[260px] mx-auto">
                        <img src="/path-to-image-6.jpg" alt="Robel Mogesie" className="rounded-md w-full object-cover" />
                        <div className="absolute bottom-0 bg-black bg-opacity-60 w-full p-2 text-center text-white transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">
                            <h3 className="font-semibold">Robel Mogesie</h3>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            <h3 className="font-bold text-lg">Robel Mogesie</h3>
                            <p>Developer</p>
                            <hr className="my-2 w-12 border-t-2 border-white" />
                            <div className="text-2xl">→</div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    );
}
