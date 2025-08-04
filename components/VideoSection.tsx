import { config, getYouTubeEmbedUrl } from "../config.ts";

export default function VideoSection({
  onCTAClick
}: {
  onCTAClick: () => void;
}) {
  return (
    <section class="video-section">
      <div class="video-container">
        <iframe
          width="100%"
          height="auto"
          src={getYouTubeEmbedUrl(config.youtubeVideoId)}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <button class="cta-button" type="button" onClick={onCTAClick}>
        Começar agora
      </button>
      <div class="more-info">
        <img src="/arrowDown.png" alt="arrow" width={24} />
        <p class="saiba-mais">Saiba mais</p>
      </div>
    </section>
  );
}
