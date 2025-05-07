import React from 'react';
import './featuresection.css';

const FeaturesSection = () => {
  return (
    <section className="features">
      <h2>Why Learn With Us?</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Expert Mentors</h3>
          <p>Learn from industry professionals and experienced educators.</p>
        </div>
        <div className="feature-card">
          <h3>Flexible Learning</h3>
          <p>Study at your own pace with lifetime access to course materials.</p>
        </div>
        <div className="feature-card">
          <h3>Certification</h3>
          <p>Earn certificates that boost your resume and career.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
