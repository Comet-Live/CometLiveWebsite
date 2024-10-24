import React from "react";
import WebNavbar from "../components/WebNavbar";

export default function About() {
    return (
        <div>
            <WebNavbar />
            <div className=" mx-10 rounded-3xl  p-12">
                <h1 className="text-primary font-bold text-6xl">About.</h1>
                <p className="text-black">
                Comet Live is a social media platform exclusively for college students, designed to help you make friends, connect with classmates, and even find that special someone on campus. Create a personalized profile, 
                add your courses, and see who else shares your academic journey. Chat with classmates, form study groups, and expand your social circle within the university community. Are you looking to build meaningful connections or explore dating opportunities? Look no further! Whether you're a Business major or passionate about Arts and Humanities, Comet Live helps you find like-minded individuals who share your interests and 
                academic pursuits. Our app provides a safe and familiar environment where you can scroll, match, and meet fellow students—be it for friendship, study partnerships, or romantic connections. Join the Comet Live community today and experience campus life like never before! Connect, engage, and thrive at your university.
                </p>
            </div>
        </div>
    );
}
