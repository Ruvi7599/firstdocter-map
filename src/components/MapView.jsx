import { GoogleMap, OverlayView } from '@react-google-maps/api'
import { useMemo, useRef, useState, useCallback } from 'react'
import { useClinicStore } from '../store/clinics'
import CustomMarker from './CustomMarker'
import ClinicPopup from './ClinicPopup'
import MapControls from './MapControls'
import MapTypeChips from './MapTypeChips'
import { MapShell } from '../styles'
import { darkMapStyle } from '../mapStyles/dark'

export default function MapView(){
  const center = useClinicStore(s => s.center)
  const zoom = useClinicStore(s => s.zoom)
  const dark = useClinicStore(s => s.darkMode)
  const selectedId = useClinicStore(s => s.selectedId)
  const setSelected = useClinicStore(s => s.setSelected)
  const setZoom = useClinicStore(s => s.setZoom)
  const setCenter = useClinicStore(s => s.setCenter)
  const filteredClinics = useClinicStore(s => s.filteredClinics)
  const mapType = useClinicStore(s => s.mapType)

  const clinics = filteredClinics()
  const selectedClinic = useMemo(
    () => clinics.find(c => c.id === selectedId) || null,
    [selectedId, clinics]
  )

  const mapRef = useRef(null)
  const [myPos, setMyPos] = useState(null)

  const options = useMemo(() => ({
    disableDefaultUI: true,
    clickableIcons: false,
    styles: dark ? darkMapStyle : undefined,
    gestureHandling: 'greedy',
    mapTypeId: mapType,
  }), [dark, mapType])

  const onLoad = useCallback((map) => { mapRef.current = map }, [])
  const onUnmount = useCallback(() => { mapRef.current = null }, [])

  const zoomIn = () => {
    if (!mapRef.current) return
    const z = Math.min((mapRef.current.getZoom() ?? zoom) + 1, 21)
    mapRef.current.setZoom(z); setZoom(z)
  }
  const zoomOut = () => {
    if (!mapRef.current) return
    const z = Math.max((mapRef.current.getZoom() ?? zoom) - 1, 3)
    mapRef.current.setZoom(z); setZoom(z)
  }

  const locateMe = () => {
    if (!navigator.geolocation) return alert('Geolocation not supported.')
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude }
        setMyPos(coords); setCenter(coords)
        if (mapRef.current){ 
          mapRef.current.panTo(coords)
          mapRef.current.setZoom(16)
          setZoom(16)
        }
      },
      () => alert('Location permission denied or unavailable.'),
      { enableHighAccuracy:true, timeout:10000, maximumAge:10000 }
    )
  }

  return (
    <MapShell>
      <GoogleMap
        center={center}
        zoom={zoom}
        onZoomChanged={() => { 
          if (mapRef.current) setZoom(mapRef.current.getZoom()) 
        }}
        onDragEnd={() => {
          if (mapRef.current) {
            const c = mapRef.current.getCenter()
            setCenter({ lat: c.lat(), lng: c.lng() })
          }
        }}
        onLoad={onLoad}
        onUnmount={onUnmount}
        mapContainerClassName="map-container"
        options={options}
        onClick={() => setSelected(null)}
      >
        {clinics.map(c => (
          <CustomMarker
            key={c.id}
            position={{ lat: c.lat, lng: c.lng }}
            logoUrl={c.logoUrl}
            isMain={c.isMainCompany}
            onClick={() => setSelected(c.id)}
          />
        ))}

        {myPos && (
          <OverlayView 
            position={myPos} 
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div style={{ transform: 'translate(-50%, -50%)' }}>
              <div style={{
                width: 18, 
                height: 18, 
                borderRadius: '50%',
                background: '#3b82f6', 
                border: '3px solid #fff',
                boxShadow: '0 0 0 8px rgba(59,130,246,.25), 0 4px 12px rgba(0,0,0,.3)'
              }}/>
            </div>
          </OverlayView>
        )}
      </GoogleMap>

      <MapControls onZoomIn={zoomIn} onZoomOut={zoomOut} onLocate={locateMe} />
      <MapTypeChips />
      <ClinicPopup clinic={selectedClinic} onClose={() => setSelected(null)} />
    </MapShell>
  )
}