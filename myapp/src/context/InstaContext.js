import React from "react";
import { useState,useContext,useEffect } from "react";


export default function allPosts(){
    return(
        fetch("../../db/db.json")
        .then(res => {
            res.json()
            console.log(res)
        }).catch(err=>{
            alert(err.message)
        }
    ))
}