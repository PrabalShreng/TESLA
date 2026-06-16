"use client";

const stats = [
  { value: "0–60", unit: "mph in 1.99s", label: "Plaid Acceleration" },
  { value: "405", unit: "mi range", label: "EPA Estimated" },
  { value: "17\"", unit: "touchscreen", label: "Cinematic Display" },
  { value: "Over-the-air", unit: "updates", label: "Always Improving" },
];

export default function StatsSection() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "80px 24px",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.1em", color: "#888", textTransform: "uppercase", marginBottom: "12px" }}>
        Why Tesla
      </p>
      <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: "700", letterSpacing: "-0.03em", color: "#171a20", margin: "0 0 64px" }}>
        Built Different. By Design.
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "40px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {stats.map((s) => (
          <div key={s.label} style={{ padding: "24px 16px" }}>
            <div style={{ fontSize: "clamp(36px, 5vw, 52px)", fontWeight: "700", letterSpacing: "-0.04em", color: "#171a20", lineHeight: 1 }}>
              {s.value}
            </div>
            <div style={{ fontSize: "15px", color: "#393c41", margin: "6px 0 4px" }}>{s.unit}</div>
            <div style={{ fontSize: "12px", color: "#aaa", letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: "600" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
