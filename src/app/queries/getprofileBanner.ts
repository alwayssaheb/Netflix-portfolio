export async function getProfileBanner() {
    try {
        const response = await fetch("/api/profile"); 
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Failed to fetch profile data");
        }

        return data.length > 0 ? data[0] : null; 
    } catch (error) {
        console.error("❌ Error fetching profile banner:", error);
        return null;
    }
}
