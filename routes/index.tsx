import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import HeroSection from "../components/HeroSection.tsx";
import VideoSection from "../components/VideoSection.tsx";
import OfferSection from "../components/OfferSection.tsx";
import AboutSection from "../components/AboutSection.tsx";
import BackgroundEffect from "../components/BackgroundEffect.tsx";

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
        <BackgroundEffect lightVariant="secondary" position={[-100, 200]} />
        <BackgroundEffect position={[600, 1300]} />
        <BackgroundEffect lightVariant="secondary" position={[1300, 50]} />
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
