import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer"
import Heroimg2 from '../Components/Heroimg2'
import AboutContent from '../Components/AboutContent'
import Carousel from '../Components/Carousel'
// import SimpleSwiper from '../Components/SimpleSwiper'

import  css from '../assets/css.png'
import  html from '../assets/html.png'
import  javascipt from '../assets/javascript.png'
import  tailwind from '../assets/tailwind.png'
// import  tailwind from '../assets/tailwind.png'
import  bootstrap from '../assets/bootstrap.png'
import  github from '../assets/github.png'
import  firebase from '../assets/firebase.png'
import  c from '../assets/c.png'
import  man from '../assets/man.png'
import  react from '../assets/react.png'

const images=[css, html,javascipt, tailwind, bootstrap, github,firebase,c, man,react];
const names=["Css", "HTML", "Javascript","Tailwind","Bootstrap","github","firebase","c","c++", "React-js"];


const About = () => {
  return (
    <div>
    <Navbar/>
    <Heroimg2 heading="ABOUT" text="Im a passionate Fullstack Developer" />
    <AboutContent />
    <Carousel images={images} names={names}/>
    {/* <SimpleSwiper/> */}
    <Footer/>
      
    </div>
  )
}

export default About
