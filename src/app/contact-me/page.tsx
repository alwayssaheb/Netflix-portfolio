import React from 'react';
import styles from './Contact.module.css';
import Head from 'next/head';

const Contact = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Me | Saheb Singh</title>
      </Head>
      <div className={styles.card}>
        <h1 className={styles.title}>Contact Me</h1>
        <ul className={styles.list}>
          <li><strong>Phone:</strong> <a href="tel:+919925817007">9925817007</a></li>
          <li><strong>Email:</strong> <a href="mailto:saheb.nagi29@gmail.com">saheb.nagi29@gmail.com</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/saheb-singh-b3a026195/" target="_blank" rel="noopener noreferrer">linkedin.com/in/saheb-singh</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/alwayssaheb" target="_blank" rel="noopener noreferrer">github.com/alwayssaheb</a></li>
          <li><strong>LeetCode:</strong> <a href="https://leetcode.com/u/saheb29/" target="_blank" rel="noopener noreferrer">leetcode.com/u/saheb29</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;