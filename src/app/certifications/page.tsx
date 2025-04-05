"use client"
import React from 'react';
import './Certifications.css';
import { useRouter } from 'next/navigation';

const Certifications: React.FC = () => {
  const router = useRouter();

  const goToProjects = () => {
    router.push('/projects');
  };

  return (
    <div className="certifications">
      <div className="content-box">
        <h1 className="title">Certifications</h1>
        <p className="message">I don't believe in certifications. I build projects.</p>
        <button className="projects-button" onClick={goToProjects}>View My Projects</button>
      </div>
    </div>
  );
};

export default Certifications;
