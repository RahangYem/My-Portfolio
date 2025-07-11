import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">RAHANG</span>
            </h1>
            <h2 className="hero-subtitle">Junior Developer</h2>
            <p className="hero-description">
              I create beautiful and functional web applications using modern technologies
              like React, Node.js, and more. Let's build something amazing together!
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </div>
          </motion.div>
          
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="image-placeholder">
              <img src="/myself.jpg" alt="Rahang" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
