import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Life Toolbox',
      description: 'Life Toolbox is a professional training platform with vocational trainer for many years of experience in the field of training and development.',
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Express', 'React Native', 'Nuxt.js'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-AYrCl9fiqFcdRgXROLnfJjO8V2ktSImlQ&s',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Youadme',
      description: 'YouAdMe, a specialized business consultancy, focuses on affiliate and multichannel distribution, particularly in Southeast Asia\'s consumer sector.',
      technologies: ['Ruby on Rails', 'React Native'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF1cQTaFXoqktLpyNDWn9sA7w_iC5NDMKfRg&s',
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Naga World',
      description: 'With 1,658 luxurious rooms and suites, NagaWorld is one of the largest 5-star hotels and the only luxury premium casino in Cambodia.',
      technologies: ['WordPress', 'PHP','Laravel', 'MySQL'],
      image: 'https://cfcdn.urcomped.com/Facility/4782/ab480f6d-40a3-4b76-8a03-af7fae02ae984782-naga-world-jpg@1024px.jpg',
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'KHB Media',
      description: 'AKHB Media Plc is a Cambodia-based digital marketing solution agency that provides marketing-related services as one stop market',
      technologies: ['PHP', 'Laravel', 'MySQL', 'Vue.js'],
      image: 'https://media.licdn.com/dms/image/v2/C5103AQFWjnKapQc9gQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1580698164169?e=2147483647&v=beta&t=k1hAHC8w9x_qK_lqAaps6POY2XmLvC9jQCegeVSNCkY',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <img src={project.image} alt={project.title} />
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="btn btn-outline">GitHub</a>
                  <a href={project.demo} className="btn btn-primary">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
