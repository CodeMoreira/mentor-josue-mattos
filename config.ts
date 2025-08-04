// Configuration file for easy customization
export const config = {
  // YouTube video configuration
  // To change the video, replace the video ID in the URL below
  // Current video: https://www.youtube.com/watch?v=S97GyhUUmFk
  youtubeVideoId: "S97GyhUUmFk",

  // Site configuration
  siteName: "Daytrade na prática",
  mentorName: "Josué Mattos",
  price: "R$49,00",

  // Social media links (optional)
  socialLinks: {
    instagram: "https://www.instagram.com/mentorjosuemattos/",
    facebook: "https://www.facebook.com/profile.php?id=61577854605473",
    youtube: "https://www.youtube.com/@mentorjosuemattos"
  }
};

// Helper function to get YouTube embed URL
export function getYouTubeEmbedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}`;
}
