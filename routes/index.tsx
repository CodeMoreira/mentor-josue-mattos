import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import HeroSection from "../components/HeroSection.tsx";
import VideoSection from "../components/VideoSection.tsx";
import OfferSection from "../components/OfferSection.tsx";
import AboutSection from "../components/AboutSection.tsx";
import Background from "../islands/background.tsx";

export default function Home() {
  const handleCTAClick = () => {
    // Placeholder function for CTA button - to be implemented later
    console.log("CTA button clicked");
  };

  return (
    <>
      <Head>
        <title>Daytrade na Prática</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <div class="container">
        <Background />
        <main>
          <Header onCTAClick={handleCTAClick} />
          <HeroSection />
          <VideoSection onCTAClick={handleCTAClick} />
          <OfferSection />
          <AboutSection />
        </main>
      </div>
    </>
  );
}
