import React, { useEffect, useState } from "react";
import { getProfileBanner } from "@/app/queries/getprofileBanner";
import "./profileBanner.css"
import PlayButton from "./PlayButton";
import MoreInfoButton from "./MoreInfoButton";


interface BannerData {
    title: string;
    description: string;
    linkedin: string;
    resume: string;
}

const ProfileBanner = () => {
    const [bannerData, setBannerData] = useState<BannerData | null>(null);

    useEffect(() => {
        async function fetchData() {
            const data = await getProfileBanner(); 
            console.log("******************", data);
            setBannerData(data); 
        }
        fetchData();
    }, []);

    const handlePlayClick = () =>{
      window.open(bannerData?.resume);
    }
    const handleLinkedClick = () => {
      window.open(bannerData?.linkedin);
    }

    return (
      <div className="profile-banner">
        <div className="banner-content">
          <h1 className="banner-headline" id="headline">{bannerData?.title}</h1>
          <p className="banner-description">
          {bannerData?.description}
          </p>
          <div className="banner-buttons">
            <PlayButton onClick={handlePlayClick} label="Resume"/>
            <MoreInfoButton onClick={handleLinkedClick} label="Linkedin" />
          </div>

        </div>
      </div>
    );
};

export default ProfileBanner;
