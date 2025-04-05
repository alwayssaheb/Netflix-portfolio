"use client"
import React, { useEffect, useState } from 'react'
import "./styles/ntile.css";
import { useRouter } from "next/navigation";


const netflixtile = () => {
    const [isClicked, setIsClicked] = useState(false);
    const router = useRouter();
    const handleclick = ()=>{
    const audio = new Audio("/sound.mp3");
    audio.play().catch(error => console.error("Audio play error:", error));
    setIsClicked(true); // Starts animation after clicking
    }
    useEffect(()=>{
        if (isClicked) {
            const timer = setTimeout(() => {
                router.push("/browser");
            }, 4000);
            return () => clearTimeout(timer);
          }
    },[isClicked]);
  return (
    <div className="netflix-container" onClick={handleclick}>
      <img src="/netflix.png" alt="My Image" width={300} height={200} className={`netflix-logo ${isClicked ?'animate' :''} `} />
    </div>
  )
}

export default netflixtile
