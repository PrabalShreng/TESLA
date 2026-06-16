"use client";
import { useState, useEffect } from "react";

const vehicles = [
  {
    id: "model-y",
    title: "Model Y",
    subtitle: "Starting at $42,990",
    tag: "Best Seller",
    bg: "linear-gradient(180deg, #e8edf2 0%, #c9d3dc 100%)",
    img: "image/banner1.avif",
    orderHref: "#",
    learnHref: "#",
    textDark: true,
  },
  {
    id: "model-3",
    title: "Model 3",
    subtitle: "Starting at $38,990",
    tag: "Most Affordable",
    bg: "linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)",
    img: "image/banner2.avif",
    orderHref: "#",
    learnHref: "#",
    textDark: false,
  },
  {
    id: "cybertruck",
    title: "Cybertruck",
    subtitle: "Starting at $79,990",
    tag: "All-New",
    bg: "linear-gradient(180deg, #0d0d0d 0%, #1a1a1a 100%)",
    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Cybertruck-Desktop-Global.jpg",
    orderHref: "#",
    learnHref: "#",
    textDark: false,
  },
  {
    id: "model-s",
    title: "Model S",
    subtitle: "Starting at $74,990",
    tag: "Flagship",
    bg: "linear-gradient(180deg, #f0f0f0 0%, #dde3e8 100%)",
    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-NA.jpg",
    orderHref: "#",
    learnHref: "#",
    textDark: true,
  },
  {
    id: "solar",
    title: "Solar Roof",
    subtitle: "Power Your Home",
    tag: "Clean Energy",
    bg: "linear-gradient(180deg, #0a1628 0%, #0d1f3c 100%)",
    img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Solar-Roof-Desktop-Global.jpg",
    orderHref: "#",
    learnHref: "#",
    textDark: false,
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // keyboard arrow nav
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowDown") setCurrent((c) => Math.min(c + 1, vehicles.length - 1));
      if (e.key === "ArrowUp") setCurrent((c) => Math.max(c - 1, 0));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const v = vehicles[current];
  const dark = !v.textDark;

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* Background slides */}
      {vehicles.map((vehicle, i) => (
        <div
          key={vehicle.id}
          style={{
            position: "absolute",
            inset: 0,
            background: vehicle.bg,
            opacity: i === current ? 1 : 0,
            transition: "opacity 0.7s ease",
            zIndex: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={vehicle.img}
            alt={vehicle.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center bottom",
              display: "block",
            }}
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>
      ))}

      {/* Overlay gradient at top for navbar readability */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "180px",
        background: "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, transparent 100%)",
        zIndex: 1,
        pointerEvents: "none",
      }} />

      {/* Text content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "120px",
          textAlign: "center",
        }}
      >
        {v.tag && (
          <span
            style={{
              display: "inline-block",
              padding: "4px 14px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              background: dark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.08)",
              color: dark ? "#fff" : "#171a20",
              marginBottom: "14px",
              backdropFilter: "blur(8px)",
              transition: "all 0.5s ease",
            }}
          >
            {v.tag}
          </span>
        )}
        <h1
          style={{
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: "700",
            letterSpacing: "-0.03em",
            color: dark ? "#fff" : "#171a20",
            margin: "0 0 10px",
            lineHeight: 1,
            transition: "color 0.5s ease",
          }}
        >
          {v.title}
        </h1>
        <p
          style={{
            fontSize: "clamp(14px, 2vw, 18px)",
            color: dark ? "rgba(255,255,255,0.85)" : "#393c41",
            margin: "0 0 36px",
            transition: "color 0.5s ease",
          }}
        >
          {v.subtitle}
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          <a
            href={v.orderHref}
            style={{
              padding: "14px 40px",
              borderRadius: "6px",
              fontSize: "15px",
              fontWeight: "500",
              textDecoration: "none",
              background: dark ? "rgba(255,255,255,0.9)" : "#171a20",
              color: dark ? "#171a20" : "#fff",
              backdropFilter: "blur(10px)",
              transition: "opacity 0.2s",
              letterSpacing: "-0.01em",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Order Now
          </a>
          <a
            href={v.learnHref}
            style={{
              padding: "14px 40px",
              borderRadius: "6px",
              fontSize: "15px",
              fontWeight: "500",
              textDecoration: "none",
              background: dark ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.65)",
              color: dark ? "#fff" : "#171a20",
              backdropFilter: "blur(10px)",
              transition: "opacity 0.2s",
              letterSpacing: "-0.01em",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Dot pagination — right side */}
      <div
        style={{
          position: "absolute",
          right: "28px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {vehicles.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to ${vehicles[i].title}`}
            style={{
              width: i === current ? "8px" : "6px",
              height: i === current ? "24px" : "6px",
              borderRadius: "4px",
              border: "none",
              background: i === current
                ? (dark ? "#fff" : "#171a20")
                : (dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.25)"),
              cursor: "pointer",
              padding: 0,
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* Scroll indicator arrow */}
      {current < vehicles.length - 1 && (
        <button
          onClick={() => setCurrent((c) => c + 1)}
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: dark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            animation: "bounce 2s infinite",
          }}
          aria-label="Next"
        >
          <span style={{ fontSize: "11px", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: "500" }}>
            {vehicles[current + 1]?.title}
          </span>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      )}

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </div>
  );
}
