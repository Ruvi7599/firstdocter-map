import { memo } from 'react'
import { useClinicStore } from '../store/clinics'
import { 
  GlassPanel, 
  SearchInput, 
  SearchContainer,
  StatRow, 
  StatCard, 
  SectionTitle,
  List, 
  ListItem,
  EmptyState
} from '../styles'

// Icons as SVG components
const SearchIcon = () => (
  <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <path d="M21 21l-4.35-4.35"/>
  </svg>
);

const MapPinIcon = ({ className = "" }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const SearchResultIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <path d="M21 21l-4.35-4.35"/>
  </svg>
);

const LayersIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2,17 12,22 22,17"/>
    <polyline points="2,12 12,17 22,12"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18M3 12h18M3 18h18"/>
  </svg>
);

const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const BuildingIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
    <path d="M6 12h4"/>
    <path d="M6 18h4"/>
    <path d="M10 4h4"/>
    <path d="M10 8h4"/>
  </svg>
);

function Sidebar(){
  const search = useClinicStore(s => s.search)
  const setSearch = useClinicStore(s => s.setSearch)
  const filteredClinics = useClinicStore(s => s.filteredClinics)
  const clinics = useClinicStore(s => s.clinics)
  const setCenter = useClinicStore(s => s.setCenter)
  const setSelected = useClinicStore(s => s.setSelected)
  const setZoom = useClinicStore(s => s.setZoom)

  const items = filteredClinics()
  const total = clinics.length
  const visible = items.length
  const mainOffices = clinics.filter(c => c.isMainCompany).length

  const focus = (c) => {
    setCenter({ lat: c.lat, lng: c.lng })
    setZoom(c.isMainCompany ? 16 : 15)
    setSelected(c.id)
  }

  return (
    <GlassPanel>
      {/* Header */}
      <div style={{
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.75rem', 
        marginBottom: '1.5rem'
      }}>
        <MenuIcon />
        <h2 style={{
          margin: 0, 
          fontSize: '1.25rem', 
          fontWeight: '700',
          background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Clinic Explorer
        </h2>
      </div>

      {/* Search Section */}
      
      <SearchContainer>
        <SearchIcon />
        <SearchInput
          placeholder="Search doctors or clinics..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
      </SearchContainer>

      {/* Statistics Section */}
      <SectionTitle>
        Statistics
      </SectionTitle>
      <StatRow>
        <StatCard>
          <strong>{total}</strong>
          <span>Total</span>
        </StatCard>
        <StatCard>
          <strong>{visible}</strong>
          <span>Visible</span>
        </StatCard>
        <StatCard>
          <strong>{mainOffices}</strong>
          <span>Main</span>
        </StatCard>
      </StatRow>

      {/* Results Section */}
      <SectionTitle>
        Results ({visible})
      </SectionTitle>
      <List>
        {items.map(c => (
          <ListItem key={c.id} onClick={()=>focus(c)}>
            <div style={{ position: 'relative' }}>
              <img 
                src={c.logoUrl} 
                alt={c.name} 
                className="clinic-logo"
              />
              {c.isMainCompany && <div className="main-badge" />}
            </div>
            <div className="clinic-info">
              <div className="clinic-name">{c.name}</div>
              <div className="clinic-doctor">{c.doctorName}</div>
            </div>
            <MapPinIcon className="clinic-icon" />
          </ListItem>
        ))}
        {!items.length && (
          <EmptyState>
            <SearchResultIcon className="empty-icon" />
            <h3>No clinics found</h3>
            <p>Try adjusting your search terms</p>
          </EmptyState>
        )}
      </List>
    </GlassPanel>
  )
}

export default memo(Sidebar)