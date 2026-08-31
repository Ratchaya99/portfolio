"use client";

import { useEffect, useState } from "react";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  const text = "Ratchaya.";

  useEffect(() => {
    const leaveTimer = setTimeout(() => {
      setIsLeaving(true);
    }, 1200);

    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1750);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#f8f8f6] ${
        isLeaving ? "pointer-events-none animate-loader-exit" : ""
      }`}
    >
      <div
        className={`text-7xl font-bold tracking-tight sm:text-8xl ${
          isLeaving ? "animate-loader-text" : ""
        }`}
      >
        {text.split("").map((char, index) => (
          <span
            key={`${char}-${index}`}
            className="loader-char inline-block"
            style={{
              animationDelay: `${index * 70}ms`,
            }}
          >
            {char === "." ? <span className="text-primary">{char}</span> : char}
          </span>
        ))}
      </div>
    </div>
  );
}
