import React from 'react';
import { Routes, Route } from "react-router-dom";
import Green from './green';
import Login from './login';
import Red from './red';

import Home from './home';
import Api from './api';
function Bodies(props) {
    return (
         <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/signup" element={<Login/>}/>
        <Route exact path="/red" element={<Red/>}/>
        <Route exact path="/green" element={<Green/>}/>
        <Route exact path="/api" element={<Api/>}/>
        
      </Routes>   
    );
}

export default Bodies;