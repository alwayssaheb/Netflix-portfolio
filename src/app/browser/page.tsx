// app/(no-navbar)/browser/page.tsx
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Profilecard from "@/app/components/Profilecard";
import "./browser.css";

interface Profile {
  name: string;
  image: string;
  backgroundGif: string;
}

const Browser = () => {
  const router = useRouter();
  const profiles: Profile[] = [
    {
      name: "recruiter",
      image: "/blue.png",
      backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif",
    },
    {
      name: "developer",
      image: "/grey.png",
      backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif",
    },
    {
      name: "stalker",
      image: "/red.png",
      backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc28yMjMyZmJ6eWtxbmNwdDV6cXk4dWZmcjFhZms2cXBjN2h5ZDJjeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QjZXUBUr89CkiWLPjL/giphy.gif",
    },
    {
      name: "adventurer",
      image: "/yellow.png",
      backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmxib24ycWo2cjlmazh0NGV5NTZ2Mzd2YWY0M2tvam9oYXBwYW1ocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ERKMnDK6tkzJe8YVa3/giphy-downsized-large.gif",
    },
  ];
  
  const handleProfileClick = (profile: Profile) => {
    // Store profile data in session storage as backup
    sessionStorage.setItem("profileData", JSON.stringify({
      name: profile.name,
      image: profile.image,
      backgroundGif: profile.backgroundGif
    }));
    
    // Navigate with query params
    router.push(`/profile/${profile.name}?image=${encodeURIComponent(profile.image)}&backgroundGif=${encodeURIComponent(profile.backgroundGif)}`);
  };
  
  return (
    <div className="browse-container">
      <p className="who-is-watching">Who's Watching?</p>
      <div className="profile">
        {profiles.map((profile, index) => (
          <Profilecard
            key={index}
            name={profile.name}
            image={profile.image}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browser;