import ProfilePageClient from "./ProfilePageClient";

export default async function ProfilePage({ params }: { params: { profileName: string } }) {
  const validProfiles = ["recruiter", "developer", "stalker", "adventurer"];
  // Await the params object
  const parameters = await params;
  
  const profile = validProfiles.includes(parameters.profileName)
    ? parameters.profileName
    : "recruiter";
    
  return <ProfilePageClient profile={profile} />;
}