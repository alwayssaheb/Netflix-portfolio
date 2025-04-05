import React from 'react';
import './WorkExperience.css';

const WorkExperience: React.FC = () => {
  return (
    <div className="work-experience">
      <h1 className="heading">Work Experience</h1>

      <div className="experience-card">
        <h2 className="company-name">Solvative (Full-Stack Developer)</h2>
        <p className="duration">Aug 2024 – Present | Ahmedabad, India</p>
        <ul className="description">
          <li>Converted to full-time developer after a successful internship.</li>
          <li>Contributed to 8 different projects, gaining comprehensive full-stack experience.</li>
          <li>Built a real-time stock management system and a client-based chat application.</li>
          <li>Worked on Shopify Remix app development and explored Headless CMS architectures like Payload CMS and Saleor.</li>
          <li>Tech stack: Node.js, Next.js, Headless CMS, and modern deployment workflows.</li>
        </ul>
      </div>

      <div className="experience-card">
        <h2 className="company-name">Mantra Softtech</h2>
        <p className="duration">Feb 2024 – Aug 2024 | Ahmedabad, India</p>
        <ul className="description">
          <li>Designed and implemented a MySQL database schema for a payroll user management system.</li>
          <li>Led the migration of the payroll database to Azure, cutting hosting costs by 20%.</li>
          <li>Optimized SQL query performance by 30% for accurate payroll calculations.</li>
          <li>Reduced user registration time by 30% in the MinOp attendance system through code debugging and feature integration.</li>
        </ul>
      </div>

      <div className="experience-card">
        <h2 className="company-name">Syntax Studio</h2>
        <p className="duration">May 2023 – July 2023 | Vadodara, India</p>
        <ul className="description">
          <li>Developed a full-stack library management website using the MERN stack (MongoDB, Express, React, Node.js).</li>
          <li>Implemented backend CRUD operations, routing, MongoDB integration, and enforced CORS policies.</li>
          <li>Utilized React and React Router for dynamic and responsive client-side routing.</li>
          <li>Key features: Adding and searching books, photo uploads for listings, book rentals, and sale/purchase options.</li>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
