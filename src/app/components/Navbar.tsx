"use client"
import React from 'react'
import { useState } from 'react';
import Link from "next/link"; 
import Image from "next/image";
import "./navbar.css"


const Navbar = () => {
const [isScrolled, setIsScrolled] = useState(false);
  return (
    <div>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className='navbar-left'>
            <Link href='/' className='navbar-logo'>
            <Image src="/netflix.png" alt="My Image" width={500} height={300} />
            </Link>
            <ul className='navbar-links'>
            <Link href="/browser">Home</Link>
            <Link href="/work-experience">Professional</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact-me">Hire Me</Link>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
