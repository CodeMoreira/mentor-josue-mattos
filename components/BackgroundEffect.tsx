const lightVariants = {
  default: "/light1.png",
  secondary: "/light2.png"
};

interface BackgroundEffectProps {
  lightVariant?: keyof typeof lightVariants;
  position: [x: number, y: number];
}

export default function BackgroundEffect({
  lightVariant = "default",
  position: [x, y]
}: BackgroundEffectProps) {
  return (
    <div class="background-effect">
      <img
        class="background-effect-grid"
        src="/grid.png"
        alt="grid"
        style={{ top: `${x}px`, left: `${y}px` }}
      />
      <img
        class="background-effect-light"
        src={lightVariants[lightVariant]}
        alt="light"
        style={{ top: `${x}px`, left: `${y}px` }}
      />
    </div>
  );
}
