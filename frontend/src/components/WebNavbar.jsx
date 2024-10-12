import React from "react";
import { useNavigate } from "react-router-dom";

export default function WebNavbar() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="bg-primary mx-10 rounded-b-3xl">
                <div className="flex justify-around py-3 text-2xl text-white font-bold">
                    <h1 onClick={navigate("/about")}>About.</h1>
                    <h1>Download.</h1>
                    <h1>Contact.</h1>
                </div>
            </div>
        </div>
    );
}
