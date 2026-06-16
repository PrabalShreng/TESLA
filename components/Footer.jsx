"use client";

export default function Footer() {
  const sections = [
    {
      title: "Tesla",
      links: ["About", "Careers", "Press", "Investor Relations", "Contact"],
    },
    {
      title: "Vehicles",
      links: ["Model S", "Model 3", "Model X", "Model Y", "Cybertruck", "Roadster", "Semi"],
    },
    {
      title: "Energy",
      links: ["Powerwall", "Solar Panels", "Solar Roof", "Megapack", "Autobidder"],
    },
    {
      title: "Charging",
      links: ["Supercharger", "Home Charging", "Destination Charging", "Adapters"],
    },
    {
      title: "Support",
      links: ["Find Us", "Schedule Service", "Owner's Manual", "Roadside Assistance", "Fleet"],
    },
  ];

  return (
    <footer style={{ background: "#171a20", color: "#fff", padding: "64px 24px 32px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Logo + tagline */}
        <div style={{ marginBottom: "56px", display: "flex", alignItems: "center", gap: "16px" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
  <img
    src="/image/tesla1.jpg"
    alt="Tesla"
    style={{ height: "44px", objectFit: "contain" }}
  />
</a>
          <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.04em" }}>
            Accelerating the world's transition to sustainable energy.
          </span>
        </div>

        {/* Link columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "40px",
            marginBottom: "56px",
          }}
        >
          {sections.map((s) => (
            <div key={s.title}>
              <p style={{
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "16px",
              }}>
                {s.title}
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {s.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.75)",
                        textDecoration: "none",
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "28px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>

            {/* Legal links */}
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {["Privacy & Legal", "Privacy Settings", "Supplier Code of Conduct", "Your Privacy Choices"].map((l) => (
                <a
                  key={l}
                  href="#"
                  style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.15s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                >
                  {l}
                </a>
              ))}
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "16px" }}>
              {/* X/Twitter */}
              <a href="#" aria-label="X" style={socialStyle}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube" style={socialStyle}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" style={socialStyle}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", marginTop: "20px" }}>
            Tesla © 2026 — Inspired by Tesla, Inc. All rights reserved.
          </p>
          <br />
          <h4>PRABAL SHRENG CHANGBANG LIMBU</h4>
        </div>
      </div>
    </footer>
  );
}

const socialStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  background: "rgba(255,255,255,0.08)",
  color: "rgba(255,255,255,0.6)",
  textDecoration: "none",
  transition: "background 0.15s, color 0.15s",
};
