"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import "./profile.css";
import ProfileBanner from "@/app/components/profilepage/profileBanner";
import TopPicksRow from "@/app/components/TopPicksRow/TopPricksRow";

interface ProfilePageClientProps {
  profile: string;
}

export default function ProfilePageClient({ profile }: ProfilePageClientProps) {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState<string | null>(null);
  const [backgroundGif, setBackgroundGif] = useState<string | null>(null);

  const imageFromUrl = searchParams.get("img");
  const backgroundFromUrl = searchParams.get("bg");

  // 🔄 Force reload ONCE on first visit
  useEffect(() => {
    const reloaded = sessionStorage.getItem("reloaded");

    if (reloaded !== "true") {
      sessionStorage.setItem("reloaded", "true");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, []);

  useEffect(() => {
    if (imageFromUrl && backgroundFromUrl) {
      setImage(imageFromUrl);
      setBackgroundGif(backgroundFromUrl);
    } else {
      const stored = sessionStorage.getItem("profileData");
      if (stored) {
        const parsed = JSON.parse(stored);
        setImage(parsed.image);
        setBackgroundGif(parsed.backgroundGif);
      }
    }
    setLoading(false);
  }, [imageFromUrl, backgroundFromUrl]);

  if (loading) {
    return <div className="loading-container">Loading profile...</div>;
  }

  if (!image || !backgroundGif) {
    return <div>Profile data not found</div>;
  }

  return (
    <>
      <div
        className="profile-page"
        style={{ backgroundImage: `url(${backgroundGif})` }}
      >
        <ProfileBanner />
      </div>
      <TopPicksRow profile={profile} />
    </>
  );
}
