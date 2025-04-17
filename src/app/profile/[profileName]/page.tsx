"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams, useParams } from "next/navigation";
import "./profile.css";
import ProfileBanner from "@/app/components/profilepage/profileBanner";
import TopPicksRow from "@/app/components/TopPicksRow/TopPricksRow";

export default function ProfilePage() {
  const { profileName } = useParams();
  const searchParams = useSearchParams();
  const [image, setImage] = useState<string | null>(null);
  const [backgroundGif, setBackgroundGif] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasReloaded = sessionStorage.getItem("hasReloadedOnce");
  
      if (!hasReloaded) {
        sessionStorage.setItem("hasReloadedOnce", "true");
        console.log("hello")
        window.location.reload();
      }
    }
  }, []); 
  

  useEffect(() => {
    let img = searchParams.get("image");
    let gif = searchParams.get("backgroundGif");

    if (!img || !gif) {
      const storedData = sessionStorage.getItem("profileData");
      if (storedData) {
        const parsed = JSON.parse(storedData);
        img = img || parsed.image;
        gif = gif || parsed.backgroundGif;
      }
    }

    setImage(img);
    setBackgroundGif(gif);
  }, [searchParams]);

  const validProfiles = ["recruiter", "developer", "stalker", "adventurer"];
  const validProfileType = validProfiles.includes(profileName as string)
    ? (profileName as string)
    : "recruiter";

  if (!image || !backgroundGif) {
    return <div className="loading-container">Profile data not found</div>;
  }

  return (
    <div className="profile-container">
      <div
        className="profile-page"
        style={{ backgroundImage: `url(${backgroundGif})` }}
      >
        <ProfileBanner />
      </div>
      <TopPicksRow
        profile={
          validProfileType as "recruiter" | "developer" | "stalker" | "adventurer"
        }
      />
    </div>
  );
}
