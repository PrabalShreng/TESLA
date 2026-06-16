"use client";
import { useState, useRef, useEffect } from "react";

const navItems = [
  {
    label: "Vehicles",
    dropdown: [
      {
        category: "Cars",
        items: [
          { name: "Model S", img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png", href: "Model-S" },
          { name: "Model 3", img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3.png", href: "Model-3" },
          { name: "Model X", img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png", href: "Model-X" },
          { name: "Model Y", img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png", href: "Model-Y" },
          { name: "Cybertruck", img: "image/truck.avif", href: "Cybertruck" },
          { name: "Roadster", img: "image/inventory.avif", href: "Roadster" },
        ],
      },
      
    ],
  },
  {
    label: "Energy",
    dropdown: [
      {
        category: "Storage",
        items: [
          { name: "Powerwall", img: "image/powerwall.avif", href: "Powerwall" },
          { name: "Megapack", img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Megapack.png", href: "Megapack" },
        ],
      },
      {
        category: "Solar",
        items: [
          { name: "Solar Panels", img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Panels.png", href: "Solar-Panels" },
          { name: "Solar Roof", img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Roof.png", href: "Solar-Roof" },
        ],
      },
    ],
  },
  {
    label: "Charging",
    dropdown: [
      {
        category: "Charging",
        items: [
          { name: "Supercharger", img: "image/Supercharging.avif", href: "Supercharger" },
          { name: "Home Charging", img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Home-Charging.png", href: "Home-Charging" },
          { name: "Adapters", img: "image/adopter.avif", href: "Charging-Adapter" },
        ],
      },
    ],
  },
  {
    label: "Discover",
    dropdown: [
      {
        category: "Discover",
        items: [
          { name: "Test Drive", img: "shop/discover.avif", href: "Test-Drive" },
          { name: "Find Us", img: "shop/discover1.avif", href: "Find-Us" },
          { name: "Events", img: "shop/discover2.avif", href: "Events" },
          { name: "Support", img: "shop/discover3.avif", href: "Support" },
        ],
      },
    ],
  },
  { label: "Shop", href: "#" },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const navRef = useRef(null);
  const closeTimer = useRef(null);

  const handleMouseEnter = (label) => {
    clearTimeout(closeTimer.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  };

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: activeMenu ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          transition: "background 0.2s ease",
          boxShadow: activeMenu ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
        }}
      >
        {/* Main bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            height: "52px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {/* Logo */}
          {/* Logo */}
<a href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
  <img
    src="/image/tesla1.jpg"
    alt="Tesla"
    style={{ height: "44px", objectFit: "contain" }}
  />
</a>

          {/* Desktop Nav Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => (
              <div
                key={item.label}
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
                style={{ position: "relative" }}
              >
                <a
                  href={item.href || "#"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "6px 16px",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#171a20",
                    textDecoration: "none",
                    borderRadius: "20px",
                    background: activeMenu === item.label ? "rgba(0,0,0,0.07)" : "transparent",
                    transition: "background 0.15s",
                    whiteSpace: "nowrap",
                    letterSpacing: "-0.01em",
                  }}
                  onMouseEnter={(e) => {
                    if (activeMenu !== item.label) {
                      e.currentTarget.style.background = "rgba(0,0,0,0.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeMenu !== item.label) {
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>

          {/* Right Icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }} className="desktop-nav">
            <button
              style={iconBtnStyle}
              title="Search"
              aria-label="Search"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <button
              style={iconBtnStyle}
              title="Account"
              aria-label="Account"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
            <a
              href="#"
              style={{
                padding: "6px 16px",
                fontSize: "13px",
                fontWeight: "500",
                color: "#fff",
                background: "#171a20",
                borderRadius: "20px",
                textDecoration: "none",
                whiteSpace: "nowrap",
                letterSpacing: "-0.01em",
                transition: "opacity 0.15s",
              }}
            >
              Get Started
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ ...iconBtnStyle, display: "none" }}
              className="mobile-menu-btn"
              aria-label="Menu"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Mega Dropdown ── */}
        {navItems.map((item) =>
          item.dropdown ? (
            <div
              key={item.label + "-dropdown"}
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
              style={{
                position: "absolute",
                top: "52px",
                left: 0,
                right: 0,
                background: "rgba(255,255,255,0.98)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                opacity: activeMenu === item.label ? 1 : 0,
                pointerEvents: activeMenu === item.label ? "all" : "none",
                transform: activeMenu === item.label ? "translateY(0)" : "translateY(-8px)",
                transition: "opacity 0.2s ease, transform 0.2s ease",
                padding: "32px 0 40px",
              }}
            >
              {/* All items in one horizontal row */}
              <div
                style={{
                  maxWidth: "1300px",
                  margin: "0 auto",
                  padding: "0 48px",
                }}
              >
                {/* Category labels row */}
                <div
                  style={{
                    display: "flex",
                    gap: "0",
                    marginBottom: "12px",
                  }}
                >
                  {item.dropdown.map((group) =>
                    group.items.map((product, i) => (
                      <div
                        key={product.name + "-label"}
                        style={{
                          flex: 1,
                          textAlign: "center",
                          fontSize: "11px",
                          fontWeight: "600",
                          color: "#6b6b6b",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          // Show category label only on first item of each group
                          visibility: i === 0 ? "visible" : "hidden",
                        }}
                      >
                        {i === 0 ? group.category : ""}
                      </div>
                    ))
                  )}
                </div>

                {/* All product cards in one row */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "8px",
                    justifyContent: "center",
                  }}
                >
                  {item.dropdown.map((group) =>
                    group.items.map((product) => (
                      <div
                        key={product.name}
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "10px",
                          padding: "14px 8px 10px",
                          borderRadius: "12px",
                          transition: "background 0.15s",
                          cursor: "pointer",
                          minWidth: 0,
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.04)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={product.img}
                          alt={product.name}
                          style={{
                            width: "100%",
                            maxWidth: "160px",
                            height: "80px",
                            objectFit: "contain",
                            display: "block",
                          }}
                          onError={(e) => {
                            e.target.style.background = "#f5f5f5";
                            e.target.style.borderRadius = "8px";
                            e.target.style.height = "80px";
                          }}
                        />
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: "500",
                            color: "#171a20",
                            letterSpacing: "-0.01em",
                            textAlign: "center",
                          }}
                        >
                          {product.name}
                        </span>
                        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
                          <a
                            href="#"
                            style={{
                              fontSize: "11px",
                              color: "#393c41",
                              textDecoration: "underline",
                              textUnderlineOffset: "2px",
                            }}
                          >
                            Learn
                          </a>
                          <a
                            href="#"
                            style={{
                              fontSize: "11px",
                              color: "#393c41",
                              textDecoration: "underline",
                              textUnderlineOffset: "2px",
                            }}
                          >
                            Order
                          </a>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          ) : null
        )}

        {/* ── Mobile Menu ── */}
        <div
          style={{
            display: mobileOpen ? "block" : "none",
            background: "#fff",
            padding: "16px 0",
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          }}
          className="mobile-menu"
        >
          {navItems.map((item) => (
            <div key={item.label + "-mobile"}>
              <button
                onClick={() =>
                  setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                }
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 24px",
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "#171a20",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                {item.label}
                {item.dropdown && (
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    style={{
                      transform: mobileExpanded === item.label ? "rotate(180deg)" : "none",
                      transition: "transform 0.2s",
                    }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                )}
              </button>
              {item.dropdown && mobileExpanded === item.label && (
                <div style={{ padding: "0 24px 12px", background: "#fafafa" }}>
                  {item.dropdown.flatMap((g) =>
                    g.items.map((p) => (
                      <a
                        key={p.name}
                        href={p.href}
                        style={{
                          display: "block",
                          padding: "10px 0",
                          fontSize: "14px",
                          color: "#3e3e3e",
                          textDecoration: "none",
                          borderBottom: "1px solid #f0f0f0",
                        }}
                      >
                        {p.name}
                      </a>
                    ))
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .mobile-menu { display: block; }
        }
        @media (min-width: 901px) {
          .mobile-menu { display: none !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}

const iconBtnStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  color: "#171a20",
  transition: "background 0.15s",
};
