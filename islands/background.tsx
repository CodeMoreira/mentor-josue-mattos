import BackgroundEffect from "../components/BackgroundEffect.tsx";
import { useState, useEffect } from "preact/hooks";

export default function Background() {
  const [screenSize, setScreenSize] = useState({
    width: globalThis.innerWidth,
    height: globalThis.innerHeight
  });

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: globalThis.innerWidth,
        height: globalThis.innerHeight
      });
    };
    globalThis.addEventListener("resize", handleResize);

    const handleMusemove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    globalThis.addEventListener("mousemove", handleMusemove);

    return () => {
      globalThis.removeEventListener("resize", handleResize);
      globalThis.removeEventListener("mousemove", handleMusemove);
    };
  }, []);

  const effect1 = { x: 200, y: -100 };
  const effect2 = { x: screenSize.width - 100, y: 600 };

  // This function move the effect to simulate a tilt effect
  const calcMovement = (x: number, y: number): [number, number] => {
    const newX = x + (mousePosition.x - x) * 0.1;
    const newY = y + (mousePosition.y - y) * 0.1;

    return [newX, newY];
  };

  return (
    <div class="background">
      <BackgroundEffect
        lightVariant="secondary"
        position={calcMovement(effect1.x, effect1.y)}
      />
      <BackgroundEffect position={calcMovement(effect2.x, effect2.y)} />
    </div>
  );
}
