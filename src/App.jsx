import MapView from './components/MapView'
import Sidebar from './components/Sidebar'
import { Page, TopBar, Brand, Button, Layout } from './styles'
import { useClinicStore } from './store/clinics'

// Icons as SVG components
const MapPinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18M3 12h18M3 18h18"/>
  </svg>
);

export default function App(){
  const dark = useClinicStore(s => s.darkMode)
  const toggle = useClinicStore(s => s.toggleDark)

  return (
    <Page>
      <TopBar>
        <div className="header-card">
          <Brand>
            <div className="brand-icon">
              <MapPinIcon />
            </div>
            <span>First Docter Clinics Map</span>
          </Brand>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Button onClick={toggle} className={dark ? 'primary' : ''}>
              {dark ? <SunIcon /> : <MoonIcon />}
              <span>{dark ? 'Light Mode' : 'Dark Mode'}</span>
            </Button>
          </div>
        </div>
      </TopBar>

      <Layout>
        <Sidebar />
        <MapView />
      </Layout>
    </Page>
  )
}