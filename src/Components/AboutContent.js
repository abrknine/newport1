import "./AboutContent.css"
import React from 'react';
import { Link } from "react-router-dom"
import myintro from "../assets/intro.mp4"

const AboutContent = () => {
    return (
    <div className="about-sec">
        <div className="video-container">
            <video 
                src={myintro} 
                controls 
                className="centered-video"
            ></video>
        </div>
        <h1>Who Am I?</h1>
        <p>As a final year student at Maharaja Agrasen Institute of Technology, I have discovered a strong passion for software development. With a focus on designing and coding, I have developed a range of skills and experience in this field. As a fulllstack developer from India, I am committed to creating engaging and visually appealing websites for clients. I am skilled in tech like <u>Html</u>, <u>Css</u>, <u>javascript</u>, <u>React js</u>, <u>Tailwind</u>, <u>Bootstrap</u>, and <u>Firebase</u>, currently aspiring to learn machine learning and backend technologies.  </p>
        <br />
        <h1>Previous internship</h1>
        <p>During my internship at Suvidha Foundation as a front-end developer, I was responsible for designing and coding their website while also learning about <u>Git and GitHub</u>. This experience provided me with valuable technical skills and knowledge in the field of front-end development. As a highly motivated individual, I am now seeking new opportunities to further expand my skills and contribute to the growth of an organization. I am passionate about creating visually appealing and user-friendly websites, and am confident in my ability to bring value to any team.</p>
        <Link to="/contact" className="btn">Contact</Link>
    </div>
    )
}

export default AboutContent