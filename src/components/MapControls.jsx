import { memo } from "react";

const btnStyle = {
  width: 48,
  height: 48,
  borderRadius: 12,
  border: "1px solid rgba(0,0,0,.12)",
  background: "rgba(17,24,39,.9)",
  color: "#e5e7eb",
  display: "grid",
  placeItems: "center",
  cursor: "pointer",
  boxShadow: "0 8px 24px rgba(0,0,0,.35)",
  transition: "transform .12s ease",
};

function Icon({ name, size = 22 }) {
  const common = { width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  if (name === "plus") return (
    <svg {...common} viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
  );
  if (name === "minus") return (
    <svg {...common} viewBox="0 0 24 24"><path d="M5 12h14"/></svg>
  );
  // target/locate
  return (
    <svg {...common} viewBox="0 0 24 24">
      <path d="M12 2v2M12 20v2M4 12H2M22 12h-2"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function MapControls({ onZoomIn, onZoomOut, onLocate }) {
  return (
    <div
      style={{
        position: "absolute",
        right: 12,
        top: 80,
        display: "grid",
        gap: 10,
        zIndex: 10,
      }}
    >
      <button aria-label="Zoom in" style={btnStyle} onClick={onZoomIn} onMouseDown={e=>e.currentTarget.style.transform="translateY(-1px)"} onMouseUp={e=>e.currentTarget.style.transform=""}>
        <Icon name="plus" />
      </button>
      <button aria-label="Zoom out" style={btnStyle} onClick={onZoomOut} onMouseDown={e=>e.currentTarget.style.transform="translateY(-1px)"} onMouseUp={e=>e.currentTarget.style.transform=""}>
        <Icon name="minus" />
      </button>
      <button aria-label="My location" style={btnStyle} onClick={onLocate} title="Find my location">
        <Icon name="locate" />
      </button>
    </div>
  );
}

export default memo(MapControls);
