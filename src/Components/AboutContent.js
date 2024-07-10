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
<p>
    As a final year student at <strong>Maharaja Agrasen Institute of Technology</strong>, I have discovered a strong passion for <strong>software development</strong>. With a focus on <strong>designing</strong> and <strong>coding</strong>, I have developed a range of skills and experience in this field. As a <strong>fullstack developer</strong> from India, I am committed to creating engaging and visually appealing websites for clients. I am skilled in tech like <strong>Html</strong>, <strong>Css</strong>, <strong>JavaScript</strong>, <strong>React js</strong>, <strong>Tailwind</strong>, <strong>Bootstrap</strong>, and <strong>Firebase</strong>. Additionally, I possess strong backend skills with <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>, and <strong>SQL</strong>. I am currently aspiring to learn cloud technologies like <strong>AWS</strong> and <strong>Kubernetes</strong>.
</p>

        <br />
        <h1>Previous internship</h1>
        <p>
    Led the development of <a href="https://safeyourweb.com/" target="_blank"><strong>safeyourweb.com</strong></a> and <a href="https://prosecdevs.com/" target="_blank"><strong>prosecdevs.com</strong></a>, implementing <strong>role-based backend access</strong> and creating admin panels using <strong>Node.js</strong> and <strong>Express.js</strong>. Crafted visually appealing UIs for both sites with <strong>React-TSX</strong>, demonstrating attention to detail and a user-centric design approach. Additionally, executed various small projects, showcasing adaptability and continuous learning in diverse technology landscapes, including converting the backend API of iBharat (an Indian search engine) from <strong>PHP</strong> to <strong>Node.js</strong> using <strong>ChatGPT</strong>.
</p>

        <Link to="/contact" className="btn">Contact</Link>
    </div>
    )
}

export default AboutContent