import React from "react";
import WebNavbar from "../components/WebNavbar";
import PhoneModel from "../components/PhoneModel";

export default function Home() {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                {/* Navbar for larger screens */}
                <div className="hidden md:block">
                    <WebNavbar />
                </div>

                {/* Responsive layout for phone model and heading */}
                <div className="flex-grow flex flex-col md:flex-row">
                    {/* Phone Model */}
                    <div className="w-full md:w-1/2 flex items-center justify-center">
                        <PhoneModel />
                    </div>

                    {/* Heading */}
                    <div className="w-full md:w-1/2 flex items-center justify-center text-center p-4 md:p-0">
                        <h1 className="text-4xl md:text-6xl font-bold text-primary">
                            Comet Live
                        </h1>
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <div className="mt-10 mx-6 md:mx-16">
                <p className="text-lg md:text-3xl">
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

                {/* Extra space at the bottom */}
                <div className="h-36 md:h-72"></div>
            </div>
        </>
    );
}
