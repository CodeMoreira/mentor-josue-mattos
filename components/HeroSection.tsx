import { config } from "../config.ts";

export default function HeroSection() {
  return (
    <section class="hero-section">
      <p>Seja bem-vindo</p>
      <h1>Opere na Bolsa de Valores em Apenas 3 Dias</h1>
      <div class="hero-text">
        <p>
          Descubra como <strong>sair do absoluto zero</strong> e fazer suas
          primeiras operações com <strong>segurança e clareza</strong>.
        </p>
        <p>
          Iremos te ensinar a fazer operações no mercado financeiro, nosso{" "}
          <strong>mentor {config.mentorName}</strong> irá te acompanhar durante
          todo seu trajeto garantindo o melhor aprendizado.
        </p>
        <div class="social-icons">
          <a href={config.socialLinks.instagram} aria-label="Instagram">
            <img src="/icons/instagram.png" alt="Instagram" />
          </a>
          <a href={config.socialLinks.facebook} aria-label="Facebook">
            <img src="/icons/facebook.png" alt="Facebook" />
          </a>
          <a href={config.socialLinks.youtube} aria-label="YouTube">
            <img src="/icons/youtube.png" alt="YouTube" />
          </a>
        </div>
      </div>
    </section>
  );
}
