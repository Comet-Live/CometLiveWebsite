import React from "react";
import WebNavbar from "../components/WebNavbar";

export default function About() {
    return (
        <div>
            <WebNavbar />
            <div className=" mx-10 rounded-3xl  p-12">
                <h1 className="text-primary font-bold mb-3 text-6xl">About.</h1>
                <p className="text-black">
                    Comet Live is a social media platform for UTD students that
                    lets you make friends and connect with people in your
                    classes. You can create a profile, add your classes, and see
                    who else is in your classes. You can also chat with people
                    in your classes and create study groups. Comet Live is a
                    great way to meet new people and make friends at UTD.
                </p>
            </div>
        </div>
    );
}
