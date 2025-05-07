import React from 'react';
import './testimonials.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Student",
      text: "The courses here have transformed my career. The instructors are amazing!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Professional",
      text: "Flexible learning schedule and high-quality content. Highly recommended!",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Graduate",
      text: "The best investment I've made in my education. Worth every penny!",
      rating: 5
    }
  ];

  return (
    <section className="testimonials">
      <h2>What Our Students Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="rating">
              {'★'.repeat(testimonial.rating)}
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-author">
              <h4>{testimonial.name}</h4>
              <p>{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
