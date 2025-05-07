import React from 'react';
import HeroSection from '../components/hero/herosection';
import FeaturesSection from '../components/featuresection/featuresection';
import CoursesSection from '../components/coursessection/coursessection';
import TestimonialsSection from '../components/testimonials/testimonials';
import CTASection from '../components/footer/footer';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <CoursesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Home;
