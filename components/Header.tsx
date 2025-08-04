import { config } from "../config.ts";

export default function Header({ onCTAClick }: { onCTAClick: () => void }) {
  return (
    <header class="sticky-header">
      <h1>{config.siteName}</h1>
      <button class="cta-button" type="button" onClick={onCTAClick}>
        Começar agora
      </button>
    </header>
  );
}
