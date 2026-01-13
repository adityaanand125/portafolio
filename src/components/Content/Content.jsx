import React from "react";
import "./Content.css";
import ParticleHeaderBg from "../ParticlesBg/ParticlesHeader/ParticleHeaderBg";
import { Link } from "react-scroll";

const Content = () => {
  return (
    <div className="contenido">
      {/* Background Animation */}
      <ParticleHeaderBg />

      {/* Hero Section */}
      <section className="inicio" id="inicio">
        <div className="titulo">

          {/* Greeting */}
          <p data-aos="fade-up" data-aos-delay="600">
            Hello
          </p>

          {/* Name */}
          <h1 data-aos="fade-up" data-aos-delay="800">
            I am Aditya Anand
          </h1>

          {/* Role */}
          <p data-aos="fade-up" data-aos-delay="1000">
            MERN Stack Developer
          </p>

          {/* Social Icons */}
          <div className="redes-sociales">
            <a
              href="https://www.linkedin.com/in/adityaanand512"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/adityaanand125"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://www.instagram.com/__ad_di__/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href="https://wa.me/916203490293"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>

          {/* Social Buttons */}
          <div className="wrapper">
            <a
              className="button"
              href="https://www.linkedin.com/in/adityaanand512"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <i className="fab fa-linkedin"></i>
              </div>
              <span>LinkedIn</span>
            </a>

            <a
              className="button"
              href="https://github.com/adityaanand125"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <i className="fab fa-github"></i>
              </div>
              <span>GitHub</span>
            </a>

            <a
              className="button"
              href="https://www.instagram.com/__ad_di__/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>
              <span>Instagram</span>
            </a>

            <a
              className="button"
              href="https://wa.me/916203490293"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Scroll Down */}
          <Link to="sobre-mi" smooth={true} duration={800}>
            <div className="scroll-down"></div>
          </Link>

        </div>
      </section>
    </div>
  );
};

export default Content;
