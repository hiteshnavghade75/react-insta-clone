import React from "react";
import { Link } from "react-router-dom";
import landing_image from "../../images/landing_image.png"
import "./landing.css"

export default function LandingComponent() {
    return <>
        <div className="main-div">
            <div className="left-container">
                <div className="landing">
                    <img src={landing_image} alt="logo" />
                </div>
                <div className="right-container">
                    <p>10x Team 04</p>
                    <Link to={"new"}><button id="btn">Enter</button></Link>
                </div>
            </div>
        </div>
    </>
}