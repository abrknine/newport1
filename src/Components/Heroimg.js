import "./Heroimg.css";
import React from 'react'
import introimg from "../assets/cod.jpg"
 import { Link } from "react-router-dom"

  const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
           <img className="into-img" src={introimg} alt="" />
        </div>
        <div className="content">
           <p>
              HI I'M A FULLSTACK DEVELOPER
           </p>
           <h1>MORE THAN MERN
            <div>
             <Link to ="/project" className="btn">Projects  </Link>
             <Link to ="/contact" className=" btn btn-light">Contact </Link>
            </div>

           </h1>
        </div>
        <div></div>

      
    </div>
  )
}

export default Heroimg
