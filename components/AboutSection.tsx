import { config } from "../config.ts";

export default function AboutSection() {
  return (
    <section class="about-section">
      <div class="about-image">
        <img src="/retratorecortadoprincipal.png" alt={config.mentorName} />
      </div>
      <div class="about-text">
        <h1>Quem é {config.mentorName}?</h1>
        <p>Mentor de Day Trade | Ex-Mestre de Kung-Fu | Hipnólogo</p>
        <p>
          Mais de 6 anos de experiência no mercado, com um método validado e
          direto.
        </p>
        <p>
          Minha missão, te mostrar que você pode aprender, crescer e mudar —
          mesmo que esteja começando do absoluto zero.
        </p>
      </div>
    </section>
  );
}
