"use client";

const energyProducts = [
  {
    title: "Powerwall 3",
    desc: "",
    img: "image/Powerwall3.avif",
    cta: "Order Now",
    learn: "Learn More",
    dark: false,
  },
  {
    title: "Solar Panels",
    desc: "",
    img: "image/Solar-Panels.avif",
    cta: "Order Now",
    learn: "Learn More",
    dark: true,
  },
  {
    title: "Solar Roof",
    desc: "",
    img: "image/Solar-Roof.avif",
    cta: "Order Now",
    learn: "Learn More",
    dark: false,
  },
  {
    title: "Megapack",
    desc: "",
    img: "image/Megapack.avif",
    cta: "Learn More",
    learn: "See Details",
    dark: true,
  },
];

export default function EnergySection() {
  return (
    <section style={{ background: "#f4f4f4", padding: "0" }}>
      {/* Section header */}
      <div style={{ textAlign: "center", padding: "80px 24px 56px" }}>
        <p style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.1em", color: "#888", textTransform: "uppercase", marginBottom: "12px" }}>
          Clean Energy
        </p>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: "700", letterSpacing: "-0.03em", color: "#171a20", margin: 0 }}>
          Power Your World
        </h2>
        <div style={{ maxWidth: "900px", margin: "40px auto 0", borderRadius: "20px", overflow: "hidden" }}>
  <video autoPlay muted loop playsInline style={{ width: "100%", display: "block" }}>
    <source src="/video/ride.webm" type="video/webm" />
  </video>
</div>
      </div>

      {/* Grid: 2 columns on desktop, 1 on mobile */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 560px), 1fr))",
          gap: "0",
        }}
      >
        {energyProducts.map((p) => (
          <div
            key={p.title}
            style={{
              position: "relative",
              height: "clamp(420px, 56vw, 620px)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "52px",
              paddingBottom: "48px",
            }}
          >
            {/* Background image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.img}
              alt={p.title}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                zIndex: 0,
              }}
              onError={(e) => {
                e.target.parentElement.style.background = p.dark ? "#1a1a1a" : "#e5e5e5";
                e.target.style.display = "none";
              }}
            />

            {/* Top text */}
            <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
              <h3 style={{
                fontSize: "clamp(24px, 3.5vw, 40px)",
                fontWeight: "700",
                letterSpacing: "-0.03em",
                color: p.dark ? "#fff" : "#171a20",
                margin: "0 0 8px",
              }}>
                {p.title}
              </h3>
              <p style={{
                fontSize: "14px",
                color: p.dark ? "rgba(255,255,255,0.75)" : "#393c41",
                maxWidth: "340px",
                margin: "0 auto",
                lineHeight: 1.5,
              }}>
                {p.desc}
              </p>
            </div>

            {/* Bottom buttons */}
            <div style={{ position: "relative", zIndex: 1, display: "flex", gap: "12px" }}>
              <a
                href="#"
                style={{
                  padding: "12px 32px",
                  borderRadius: "6px",
                  fontSize: "14px",
                  fontWeight: "500",
                  textDecoration: "none",
                  background: p.dark ? "rgba(255,255,255,0.9)" : "#171a20",
                  color: p.dark ? "#171a20" : "#fff",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {p.cta}
              </a>
              <a
                href="#"
                style={{
                  padding: "12px 32px",
                  borderRadius: "6px",
                  fontSize: "14px",
                  fontWeight: "500",
                  textDecoration: "none",
                  background: p.dark ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.7)",
                  color: p.dark ? "#fff" : "#171a20",
                  backdropFilter: "blur(10px)",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {p.learn}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
