import React from "react";
import { Link } from "react-router-dom";
// import allPosts from "../context/InstaContext.js"
import icon from "../../images/icon.png"
import camera from "../../images/camera.png"
import Posts from "./Posts.js";
import "./postview.css"

export default function PostView(){
    return<>
    <section className="header-section">
        <header >
            <img src={icon} alt="icon"/><div className="header-text">Instaclone</div>
            <Link to={"/addPost"}><img id="cam-logo" src={camera} alt="camera"/></Link>
        </header>
    </section>
    <section className="post-section">
        <div className="show-posts">
           <Posts/>
        </div>
    </section>
    </>
}