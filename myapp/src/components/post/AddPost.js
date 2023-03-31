import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import camera from "../../images/camera.png"
import icon from "../../images/icon.png"
import "./addpost.css"

export default function AddPost(){

    const [formData, setFormData] = useState({
        image:null,
        author:"",
        location:"",
        description:""
    })

    function takeFormData(event){
        event.preventDefault();
        const data = new FormData(event.target) 
    }

    return<>
    <section className="header-section">
    <header>
            <img src={icon} alt="icon"/><div className="header-text">Instaclone</div>
            <Link to={"/addPost"}><img id="cam-logo" src={camera} alt="camera"/></Link>
        </header>
    </section>
    <section className="form-section">
        <div className="form-container">
        <form>
            <input type="file" className="block-input" id="fileName" name="file" placeholder="No File Chosen"/>
            <input type="text" className="inline-input" name="author" placeholder="Author"/>
            <input type="text" className="inline-input" name="locatin" placeholder="Location"/>
            <input type="text" className="block-input" name="descriotion" placeholder="Description"/>
            <input type="submit" className="btn" name="button" value="Post"/>
        </form>
        </div>
    </section>
    
    </>
}