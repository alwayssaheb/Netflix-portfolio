'use client';

import React, { useEffect, useState } from 'react';
import styles from './Skills.module.css';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiRubyonrails, SiTypescript, SiPostgresql, SiMysql, SiKubernetes, SiGooglecloud, SiSpringboot, SiPhp, SiNetlify, SiHeroku, SiHtml5, SiCss3, SiRabbitmq, SiImessage } from 'react-icons/si';

// Define the Skill type
interface Skill {
  name: string;
  category: string;
  description: string;
  icon: string;
}

// Icon mapping
const iconMap: { [key: string]: React.ReactNode } = {
  SiRubyonrails: <SiRubyonrails />,
  FaNodeJs: <FaNodeJs />,
  SiSpringboot: <SiSpringboot />,
  FaJava: <FaJava />,
  SiPhp: <SiPhp />,
  FaReact: <FaReact />,
  SiTypescript: <SiTypescript />,
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiKubernetes: <SiKubernetes />,
  SiGooglecloud: <SiGooglecloud />,
  SiHeroku: <SiHeroku />,
  SiNetlify: <SiNetlify />,
  SiRabbitmq: <SiRabbitmq />,
  SiImessage: <SiImessage />,
  FaGitAlt: <FaGitAlt />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss3 />,
};

export default function Skills() {
  const [skillsData, setSkillsData] = useState<Skill[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const response = await fetch('/api/skills');
        
        if (!response.ok) {
          throw new Error('Failed to fetch skills data');
        }
        
        const data = await response.json();
        setSkillsData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching skills:', err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchSkills();
  }, []);

  if (loading) return <div style={{ textAlign: 'center', padding: '50px' }}>Loading skills...</div>;
  if (error) return <div style={{ textAlign: 'center', padding: '50px', color: '#e50914' }}>Error: {error}</div>;
  if (skillsData.length === 0) return <div style={{ textAlign: 'center', padding: '50px' }}>No skills found</div>;

  // Group skills by category
  const skillsByCategory = skillsData.reduce((acc: Record<string, Skill[]>, skill: Skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className={styles.skillsContainer}>
      <h2 className={styles.skillsTitle}>My Technical Skills</h2>
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className={styles.skillCategory}>
          <h3 
            className={styles.categoryTitle} 
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {category}
          </h3>
          <div className={styles.skillsGrid}>
            {skillsByCategory[category].map((skill: Skill, idx: number) => (
              <div key={idx} className={styles.skillCard}>
                <div className={styles.icon}>
                  {iconMap[skill.icon] || <FaReact />}
                </div>
                <h3 className={styles.skillName}>
                  {skill.name.split('').map((letter: string, i: number) => (
                    <span 
                      key={i} 
                      className={styles.letter} 
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className={styles.skillDescription}>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}