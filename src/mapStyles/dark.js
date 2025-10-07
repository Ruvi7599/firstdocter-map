export const darkMapStyle = [
  // Base map colors
  { 
    "elementType": "geometry", 
    "stylers": [{ "color": "#1a1f2e" }] 
  },
  { 
    "elementType": "labels.text.fill", 
    "stylers": [{ "color": "#e5e7eb" }] 
  },
  { 
    "elementType": "labels.text.stroke", 
    "stylers": [{ "color": "#0f1419" }, { "weight": 2 }] 
  },
  
  // Hide POIs for cleaner look
  { 
    "featureType": "poi", 
    "stylers": [{ "visibility": "off" }] 
  },
  { 
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [{ "color": "#1e3a2f" }, { "visibility": "on" }]
  },
  
  // Roads
  { 
    "featureType": "road", 
    "elementType": "geometry", 
    "stylers": [{ "color": "#2d3748" }] 
  },
  { 
    "featureType": "road.highway", 
    "elementType": "geometry", 
    "stylers": [{ "color": "#374151" }] 
  },
  { 
    "featureType": "road.highway", 
    "elementType": "geometry.stroke", 
    "stylers": [{ "color": "#1f2937" }] 
  },
  { 
    "featureType": "road.arterial", 
    "elementType": "geometry", 
    "stylers": [{ "color": "#2d3748" }] 
  },
  { 
    "featureType": "road.local", 
    "elementType": "geometry", 
    "stylers": [{ "color": "#252d3d" }] 
  },
  
  // Water features
  { 
    "featureType": "water", 
    "elementType": "geometry", 
    "stylers": [{ "color": "#164e63" }] 
  },
  { 
    "featureType": "water", 
    "elementType": "labels.text.fill", 
    "stylers": [{ "color": "#67e8f9" }] 
  },
  
  // Administrative boundaries
  { 
    "featureType": "administrative", 
    "elementType": "geometry.stroke", 
    "stylers": [{ "color": "#4b5563" }] 
  },
  { 
    "featureType": "administrative.land_parcel", 
    "stylers": [{ "visibility": "off" }] 
  },
  { 
    "featureType": "administrative.neighborhood", 
    "stylers": [{ "visibility": "off" }] 
  },
  
  // Transit
  { 
    "featureType": "transit", 
    "elementType": "geometry", 
    "stylers": [{ "color": "#2d3748" }] 
  },
  { 
    "featureType": "transit.station", 
    "elementType": "labels.text.fill", 
    "stylers": [{ "color": "#93c5fd" }] 
  },
  
  // Landscape
  { 
    "featureType": "landscape", 
    "elementType": "geometry", 
    "stylers": [{ "color": "#1f2937" }] 
  },
  { 
    "featureType": "landscape.natural", 
    "elementType": "geometry", 
    "stylers": [{ "color": "#1e2838" }] 
  }
];