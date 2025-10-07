import { memo } from 'react'
import { Button } from '../styles'

const directionsUrl = (lat, lng) =>
  `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`

// Icons
const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const NavigationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 11 22 2 13 21 11 13 3 11"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6L6 18M6 6l12 12"/>
  </svg>
);

function Card({ clinic, onClose }) {
  if (!clinic) return null
  
  return (
    <div style={{
      position: 'fixed',
      left: '50%',
      bottom: '1.5rem',
      transform: 'translateX(-50%)',
      width: 'calc(100% - 2rem)',
      maxWidth: '440px',
      zIndex: 40,
      animation: 'slideUp 0.3s ease-out'
    }}>
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
      `}</style>
      
      <div style={{
        background: 'rgba(17, 24, 39, 0.95)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '1.5rem',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
        position: 'relative'
      }}>
        {/* Header Image */}
        <div style={{
          height: '180px',
          backgroundImage: `url(${clinic.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(17, 24, 39, 0.9) 0%, transparent 60%)'
          }}/>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '0.75rem',
              background: 'rgba(17, 24, 39, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#e5e7eb',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(239, 68, 68, 0.8)'
              e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.5)'
              e.currentTarget.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(17, 24, 39, 0.8)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            <CloseIcon />
          </button>

          {/* Main Company Badge */}
          {clinic.isMainCompany && (
            <div style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              padding: '0.5rem 0.75rem',
              background: 'rgba(16, 185, 129, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              borderRadius: '0.5rem',
              color: '#6ee7b7',
              fontSize: '0.75rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              🏢 Main Office
            </div>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: '1.5rem' }}>
          {/* Title */}
          <h3 style={{
            margin: '0 0 1rem 0',
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#e5e7eb',
            lineHeight: '1.3'
          }}>
            {clinic.name}
          </h3>

          {/* Info Grid */}
          <div style={{
            display: 'grid',
            gap: '0.75rem',
            marginBottom: '1.25rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem',
              background: 'rgba(59, 130, 246, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              borderRadius: '0.75rem',
              color: '#93c5fd',
              fontSize: '0.95rem'
            }}>
              <UserIcon />
              <div>
                <div style={{ 
                  fontSize: '0.75rem', 
                  opacity: 0.8,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '0.125rem'
                }}>
                  Doctor
                </div>
                <div style={{ fontWeight: '600' }}>
                  {clinic.doctorName}
                </div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem',
              background: 'rgba(34, 211, 238, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(34, 211, 238, 0.2)',
              borderRadius: '0.75rem',
              color: '#67e8f9',
              fontSize: '0.95rem'
            }}>
              <PhoneIcon />
              <div>
                <div style={{ 
                  fontSize: '0.75rem', 
                  opacity: 0.8,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '0.125rem'
                }}>
                  Contact
                </div>
                <div style={{ fontWeight: '600' }}>
                  {clinic.phone}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p style={{
            margin: '0 0 1.5rem 0',
            color: 'rgba(229, 231, 235, 0.8)',
            lineHeight: '1.6',
            fontSize: '0.95rem'
          }}>
            {clinic.description}
          </p>

          {/* Get Directions Button */}
          <a 
            href={directionsUrl(clinic.lat, clinic.lng)} 
            target="_blank" 
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Button 
              className="primary"
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem'
              }}
            >
              <NavigationIcon />
              <span>Get Directions</span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default memo(Card)