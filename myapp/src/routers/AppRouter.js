import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingComponent from '../components/LandingPage/LandingComponent'
import PostView from '../components/post/PostView'
import AddPost from '../components/post/AddPost';

export default function AppRouter(){
    return<BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingComponent />}/>
        <Route path='/new'element={<PostView/>}/>
        <Route path="/addPost" element={<AddPost/>} />
      </Routes>
    </BrowserRouter>
}