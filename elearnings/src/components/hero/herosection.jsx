import React from 'react';
import './styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Unlock Your Learning Potential</h1>
        <p>Explore expert-led courses and grow your skills today.</p>
        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Browse Courses</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="/assets/hero-image.png" alt="Learning" />
      </div>
    </section>
  );
};

export default herosection;
