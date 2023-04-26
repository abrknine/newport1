import React from "react";
import "./Footer1.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitterSquare,
  
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <h4>
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              Delhi NCR India
            </h4>
            {/* <p>India </p> */}
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              9667024700
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              abhishekbahukhandi2020@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>

          <p>
            I am abhishek bhaukhandi a front-end developer(aspiring fullstack),I
            love to code the design using my react and css skills
          </p>
          <div className="social">
            <a href="https://github.com/abrknine">
              {" "}
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />{" "}
            </a>
            <a href="https://twitter.com/AbhishekBahukh8">
              <FaTwitterSquare
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/abhishek-bahukhandi-78b30b213/">
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.instagram.com/abhishek_67kindda/">
              <FaInstagram
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
