"use client";

const accessories = [
  {
    name: "charging",
    price: "$475",
    img: "shop/Charging1.avif",
    tag: "Best Seller",
  },
  {
    name: "Vehicle Accessories",
    price: "Shop Collection",
    img: "shop/Vehicle-Accessories.avif",
    tag: "New",
  },
  {
    name: "Apparel",
    price: "$230",
    img: "shop/Apparel.avif",
    tag: null,
  },
  {
    name: "Lifestyle",
    price: "Included",
    img: "shop/Lifestyle.avif",
    tag: null,
  },
];

export default function AccessoriesSection() {
  return (
    <section style={{ background: "#fff", padding: "80px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <p style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.1em", color: "#888", textTransform: "uppercase", marginBottom: "8px" }}>
              Tesla Shop
            </p>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: "700", letterSpacing: "-0.03em", color: "#171a20", margin: 0 }}>
              Accessories & Gear
            </h2>
          </div>
          <a
            href="#"
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "#171a20",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            Shop All →
          </a>
        </div>

        {/* Product grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
            gap: "24px",
          }}
        >
          {accessories.map((item) => (
            <a
              key={item.name}
              href="#"
              style={{
                display: "block",
                textDecoration: "none",
                borderRadius: "16px",
                overflow: "hidden",
                background: "#f4f4f4",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  onError={(e) => {
                    e.target.parentElement.style.background = "#e0e0e0";
                    e.target.style.display = "none";
                  }}
                />
                {item.tag && (
                  <span style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    background: "#171a20",
                    color: "#fff",
                    fontSize: "11px",
                    fontWeight: "600",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}>
                    {item.tag}
                  </span>
                )}
              </div>

              {/* Info */}
              <div style={{ padding: "16px 20px 20px" }}>
                <p style={{ fontSize: "15px", fontWeight: "600", color: "#171a20", margin: "0 0 4px", letterSpacing: "-0.01em" }}>
                  {item.name}
                </p>
                <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>{item.price}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
