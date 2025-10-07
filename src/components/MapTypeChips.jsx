import { memo } from 'react'
import { useClinicStore } from '../store/clinics'
import { MapTypeContainer, MapTypeChip } from '../styles'

// Map Type Icons
const MapIcon = () => (
  <svg className="chip-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
    <path d="M9 3v18M15 6v18"/>
  </svg>
);

const SatelliteIcon = () => (
  <svg className="chip-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

const MountainIcon = () => (
  <svg className="chip-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 3l4 8 5-5 5 15H2L8 3z"/>
  </svg>
);

const LayersIcon = () => (
  <svg className="chip-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
);

const types = [
  { id: 'roadmap', label: 'Streets', Icon: MapIcon },
  { id: 'satellite', label: 'Satellite', Icon: SatelliteIcon },
  { id: 'terrain', label: 'Terrain', Icon: MountainIcon },
  { id: 'hybrid', label: 'Hybrid', Icon: LayersIcon },
]

function MapTypeChips(){
  const mapType = useClinicStore(s => s.mapType)
  const setMapType = useClinicStore(s => s.setMapType)

  return (
    <MapTypeContainer>
      {types.map(t => {
        const IconComponent = t.Icon
        return (
          <MapTypeChip 
            key={t.id}
            onClick={() => setMapType(t.id)}
            active={mapType === t.id}
            aria-pressed={mapType === t.id}
            title={t.label}
          >
            <IconComponent />
            <span>{t.label}</span>
          </MapTypeChip>
        )
      })}
    </MapTypeContainer>
  )
}

export default memo(MapTypeChips)