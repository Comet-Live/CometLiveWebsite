import React from "react";
import WebNavbar from "../components/WebNavbar";
import PhoneModel from "../components/PhoneModel";
import { Users, Heart, Shield, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center text-center">
        <div className="rounded-full bg-primary/10 p-3 mb-4">
            <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-3xl font-semibold mb-4">{title}</h3>
        <p className="text-xl text-gray-600 dark:text-gray-300">
            {description}
        </p>
    </div>
);

export const StatCard = ({ number, label }) => (
    <div className="text-center p-6">
        <div className="text-4xl font-bold text-primary mb-2">{number}</div>
        <div className="text-gray-600 dark:text-gray-300">{label}</div>
    </div>
);

export default function Home() {
    const navigate = useNavigate();
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <WebNavbar />

                {/* Responsive layout for phone model and heading */}
                <div className="flex-grow flex flex-col md:flex-row">
                    {/* Phone Model - hidden on small screens */}
                    <div className="hidden scale-0 md:scale-100 lg:flex w-full md:w-1/2 items-center justify-center p-4">
                        <PhoneModel />
                    </div>

                    {/* Heading */}
                    <div className="w-full md:w-1/2 flex flex-col text-left items-center justify-center  p-4 md:p-0">
                        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                            Find Your Best Friends at UTD
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 mr-6 text-black">
                            Connect with fellow Comets who share your interests,
                            majors, and campus experiences.
                        </p>
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <div className="mt-10 mx-6 md:mx-16">
                <p className="text-lg md:text-3xl leading-relaxed md:leading-normal">
                    Are you a UT Dallas student looking to build meaningful
                    connections within your college community?
                    <br />
                    <br />
                    Look no further! Comet is the go-to app for UTD students to
                    connect, date, and foster relationships that go beyond the
                    classroom. Whether you’re a Business major from JSOM or a
                    passionate Arts and Humanities enthusiast, Comet helps you
                    find like-minded individuals who share your passions and
                    academic interests. Our app is designed exclusively for UTD
                    students, creating a safe and familiar environment where you
                    can scroll, match, and meet fellow Comets.
                </p>
            </div>
            {/* Features Section */}
            <div className="container mx-auto px-4 py-24">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    Why Choose Comet Live?
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={Users}
                        title="UTD Exclusive"
                        description="Connect only with verified UTD students, ensuring a safe and familiar community."
                    />
                    <FeatureCard
                        icon={Heart}
                        title="Interest-Based Matching"
                        description="Find matches based on your major, classes, and campus activities."
                    />
                    <FeatureCard
                        icon={Shield}
                        title="Safe & Secure"
                        description="Verified profiles and strict privacy controls to keep you safe."
                    />
                </div>
            </div>

            {/* Description Section */}
            <div className="text-center mx-6 px-4 py-24 rounded-2xl bg-primary">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl text-white md:text-4xl font-bold text-center mb-8">
                        Your Campus Dating Experience
                    </h2>
                    <p className="text-lg md:text-xl text-white leading-relaxed text-center mb-12">
                        Are you a UT Dallas student looking to build meaningful
                        connections within your college community? Look no
                        further! Comet is the go-to app for UTD students to
                        connect, date, and foster relationships that go beyond
                        the classroom.
                    </p>
                    <div className="flex justify-center">
                        <button
                            className="bg-white text-primary text-2xl px-8 py-3 rounded-full font-bold flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                            onClick={() => navigate("/download")}
                        >
                            <Download className="mr-2 w-5 h-5" />
                            Download Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Extra space at the bottom */}
            <div className="h-36 md:h-72"></div>
        </>
    );
}
