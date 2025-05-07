import React from 'react';
import './coursessection.css';

const Courses = () => {
  const courses = [
    { title: 'Literature Course', instructor: 'Mr. James', price: '$35' },
    { title: 'Marketing Basics', instructor: 'Ms. Julia', price: '$45' },
    { title: 'Social Media', instructor: 'Mr. Smith', price: '$40' },
  ];

  return (
    <section className="courses">
      <h2>Featured Courses</h2>
      <div className="course-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h3>{course.title}</h3>
            <p>Instructor: {course.instructor}</p>
            <p className="price">{course.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
