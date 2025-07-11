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
              like PHP, Laravel, React, Node.js, and more. Let's build something amazing together!
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </div>
          </motion.div>
          
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
            whileHover={{ 
              scale: 1.1, 
              rotateY: 10,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="image-placeholder"
              animate={{ 
                boxShadow: [
                  "0 20px 40px rgba(102, 126, 234, 0.3)",
                  "0 25px 50px rgba(118, 75, 162, 0.4)",
                  "0 20px 40px rgba(102, 126, 234, 0.3)"
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <motion.img 
                src="/myself.jpg" 
                alt="Rahang"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
