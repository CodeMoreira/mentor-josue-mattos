import { config } from "../config.ts";

export default function OfferSection() {
  return (
    <section class="offer-section">
      <h1>O que você vai receber por apenas {config.price}</h1>
      <div class="offer-details">
        <div class="offer-item">
          <h2>eBook Principal: Do Zero às Primeiras Operações em 3 Dias</h2>
          <ul>
            <li>Método direto e acessível, mesmo pra quem nunca operou.</li>
            <li>
              Conteúdo que vai te levar do ponto zero até a prática real em 3
              dias.
            </li>
          </ul>
        </div>

        <div class="offer-item">
          <h2>Vídeos de Apoio</h2>
          <ul>
            <li>Para acompanhar o eBook e acelerar seu aprendizado.</li>
            <li>Explicações visuais com linguagem simples e sem enrolações.</li>
          </ul>
        </div>

        <h1>Dois Bônus Exclusivos</h1>
        <div class="offer-item">
          <h2>eBook: Day Trade e Teoria de Dow</h2>
          <p>Desvende os Segredos do Trading de Alta Performance</p>
        </div>
        <div class="offer-item">
          <h2>eBook: A Atitude Vencedora do Trader de Sucesso</h2>
          <p>
            Gerenciamento de Risco + Mentalidade Profissional para não quebrar
            na Bolsa
          </p>
        </div>
      </div>
    </section>
  );
}
