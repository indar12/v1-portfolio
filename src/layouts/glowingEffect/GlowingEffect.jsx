import React, { useEffect, useState } from "react";
import "./GlowingEffect.css";

const GlowingEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="glowing-container">
      {/* This element is the glowing effect */}
      <div
        className="glowing-background"
        style={{
          background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />
      {/* Content inside the container */}
      <div className="content">
        <h1>Welcome!</h1>
        <p>Move your cursor to see the glowing spotlight effect.</p>
      </div>
    </div>
  );
};

export default GlowingEffect;
