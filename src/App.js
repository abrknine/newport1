// import React from 'react';
import React from 'react';
import './index.css';
import Home from "./routes/Home";
import About from './routes/About';
import Project from './routes/Project';
import Contact from './routes/Contact';
import Personals from './routes/Personals';
import {Route, Routes } from "react-router-dom";

function App() {
     return (
    <>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/project" element={<Project/>}/>
       <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/personals" element={<Personals/>}/>
     </Routes>

     </>
   );

}

export default App;
