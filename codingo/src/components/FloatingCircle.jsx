// src/components/FloatingCircle.jsx
export default function FloatingCircle({ size = "80px", top, left, opacity = 0.05, delay = "0s", reverse = false }) {
  const animationClass = reverse
    ? "animate-floatCrazy"
    : "animate-floatDiagonal";

  return (
    <div
      className={`${animationClass} absolute rounded-full bg-white pointer-events-none`}
      style={{
        width: size,
        height: size,
        top,
        left,
        opacity,
        animationDelay: delay,
      }}
    />
  );
}
