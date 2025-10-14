// src/components/CustomMarker.jsx
import { OverlayView } from '@react-google-maps/api'
import { memo } from 'react'

// Larger sizes
const sizeFor = (isMain) => (isMain ? 60 : 48)

function CustomMarker({ position, onClick, isMain }) {
  const size = sizeFor(isMain)

  return (
    <OverlayView position={position} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
      <div
        onClick={(e) => {
          // Prevent map-level click handlers from firing when a marker is clicked
          e.stopPropagation()
          if (typeof onClick === 'function') onClick()
        }}
        title="View details"
        style={{
          transform: 'translate(-50%, -100%)',
          cursor: 'pointer',
          filter: 'drop-shadow(0 6px 12px rgba(0,0,0,.4))',
          transition: 'transform .2s ease, filter .2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform =
            'translate(-50%, -105%) scale(1.15)'
          e.currentTarget.style.filter =
            'drop-shadow(0 12px 24px rgba(220,38,38,.55))'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform =
            'translate(-50%, -100%) scale(1)'
          e.currentTarget.style.filter =
            'drop-shadow(0 6px 12px rgba(0,0,0,.4))'
        }}
      >
        {/* Red map pin (SVG) */}
        <svg
          width={size}
          height={(size * 36) / 24} // keep aspect ratio (24x36)
          viewBox="0 0 24 36"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block' }}
        >
          <defs>
            <linearGradient id="pinRed" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f87171" />
              <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>
          </defs>

          {/* Pin body */}
          <path
            d="M12 0C6.477 0 2 4.477 2 10c0 7.5 10 16 10 16s10-8.5 10-16C22 4.477 17.523 0 12 0z"
            transform="translate(0 2)"
            fill="url(#pinRed)"
            stroke={isMain ? '#7f1d1d' : '#991b1b'}
            strokeWidth={isMain ? 2 : 1.2}
          />

          {/* Inner white circle */}
          <circle cx="12" cy="12" r="4" fill="#fff" />
        </svg>
      </div>
    </OverlayView>
  )
}

export default memo(CustomMarker)
