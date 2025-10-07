import styled from 'styled-components';

// Modern Glassmorphism Base Styles
export const Page = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a3a 25%, #2d1b69 50%, #1e293b 75%, #0f172a 100%);
  color: #e5e7eb;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: fixed;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(139,92,246,0.15) 0%, transparent 50%),
                radial-gradient(circle at 20% 80%, rgba(236,72,153,0.1) 0%, transparent 50%);
    animation: float 20s ease-in-out infinite;
    pointer-events: none;
    z-index: 0;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
`;

export const TopBar = styled.header`
  position: relative;
  z-index: 50;
  padding: 1rem;
  
  .header-card {
    background: rgba(17, 24, 39, 0.4);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    padding: 1rem 1.5rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(17, 24, 39, 0.6);
      border-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

export const Brand = styled.div`
  font-weight: 800;
  letter-spacing: 0.5px;
  font-size: 1.25rem;
  background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .brand-icon {
    width: 2rem;
    height: 2rem;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
`;

export const Button = styled.button`
  padding: 0.75rem 1.25rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: #e5e7eb;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
    
    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(0px);
  }

  &.primary {
    background: linear-gradient(135deg, rgba(59,130,246,0.3), rgba(139,92,246,0.3));
    border-color: rgba(59,130,246,0.5);
  }

  &.control {
    width: 3rem;
    height: 3rem;
    border-radius: 0.75rem;
    padding: 0;
    background: rgba(17, 24, 39, 0.8);
    border-color: rgba(55, 65, 81, 0.6);
  }
`;

export const Layout = styled.div`
  display: flex;
  height: calc(100vh - 100px);
  gap: 1rem;
  padding: 0 1rem 1rem;
  position: relative;
  z-index: 10;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    min-height: calc(100vh - 100px);
  }
`;

export const GlassPanel = styled.aside`
  width: 340px;
  background: rgba(17, 24, 39, 0.4);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1), transparent);
    pointer-events: none;
  }

  &:hover {
    background: rgba(17, 24, 39, 0.5);
    border-color: rgba(255, 255, 255, 0.15);
  }

  @media (max-width: 1024px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  border-radius: 0.75rem;
  padding: 0.875rem 1rem 0.875rem 3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(17, 24, 39, 0.6);
  backdrop-filter: blur(10px);
  color: #e5e7eb;
  outline: none;
  transition: all 0.3s ease;
  position: relative;

  &::placeholder {
    color: rgba(156, 163, 175, 0.8);
  }

  &:focus {
    border-color: rgba(59, 130, 246, 0.5);
    background: rgba(17, 24, 39, 0.8);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;

  .search-icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(156, 163, 175, 0.8);
    pointer-events: none;
    z-index: 2;
  }
`;

export const StatRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

export const StatCard = styled.div`
  background: rgba(17, 24, 39, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1rem 0.75rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(139, 92, 246, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    background: rgba(17, 24, 39, 0.8);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);

    &::before {
      opacity: 1;
    }
  }

  strong {
    font-size: 1.5rem;
    color: #22d3ee;
    display: block;
    font-weight: 700;
    position: relative;
    z-index: 2;
  }

  span {
    font-size: 0.75rem;
    opacity: 0.8;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #d1d5db;
    position: relative;
    z-index: 2;
  }
`;

export const SectionTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(156, 163, 175, 0.9);
  margin: 1.5rem 0 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 3px;
    height: 16px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border-radius: 2px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 0.25rem;

  /* Custom Scrollbar */
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(17, 24, 39, 0.3);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(59, 130, 246, 0.5);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(59, 130, 246, 0.7);
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(17, 24, 39, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    background: rgba(17, 24, 39, 0.8);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);

    &::before {
      opacity: 1;
    }

    .clinic-name {
      color: #60a5fa;
    }

    .clinic-icon {
      color: #3b82f6;
    }
  }

  .clinic-logo {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid rgba(255, 255, 255, 0.3);
    flex-shrink: 0;
    position: relative;
    z-index: 2;
  }

  .clinic-info {
    flex: 1;
    min-width: 0;
    position: relative;
    z-index: 2;
  }

  .clinic-name {
    font-weight: 600;
    color: #e5e7eb;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 0.3s ease;
  }

  .clinic-doctor {
    color: rgba(156, 163, 175, 0.8);
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }

  .clinic-icon {
    color: rgba(156, 163, 175, 0.6);
    transition: color 0.3s ease;
    position: relative;
    z-index: 2;
  }

  .main-badge {
    position: absolute;
    top: -2px;
    right: -2px;
    width: 1rem;
    height: 1rem;
    background: #10b981;
    border: 2px solid white;
    border-radius: 50%;
    z-index: 3;
  }
`;

export const MapShell = styled.div`
  flex: 1;
  position: relative;
  background: rgba(17, 24, 39, 0.4);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

  .map-container {
    width: 100%;
    height: 100%;
    border-radius: 1.5rem;
  }

  .map-placeholder {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    color: rgba(156, 163, 175, 0.8);

    .placeholder-icon {
      width: 4rem;
      height: 4rem;
      margin-bottom: 1rem;
      opacity: 0.5;
      color: #3b82f6;
    }

    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #e5e7eb;
      margin-bottom: 0.5rem;
    }

    p {
      max-width: 400px;
      line-height: 1.6;
    }
  }
`;

export const ControlsContainer = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 20;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const MapTypeContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  z-index: 20;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const MapTypeChip = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: ${props => 
    props.active 
      ? 'linear-gradient(135deg, rgba(59,130,246,0.6), rgba(139,92,246,0.6))'
      : 'rgba(17, 24, 39, 0.8)'
  };
  backdrop-filter: blur(10px);
  border: 1px solid ${props => 
    props.active 
      ? 'rgba(59, 130, 246, 0.5)' 
      : 'rgba(255, 255, 255, 0.2)'
  };
  border-radius: 0.75rem;
  color: #e5e7eb;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 0.875rem;

  &:hover {
    transform: translateY(-2px);
    background: ${props => 
      props.active 
        ? 'linear-gradient(135deg, rgba(59,130,246,0.8), rgba(139,92,246,0.8))'
        : 'rgba(17, 24, 39, 0.9)'
    };
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }

  .chip-icon {
    opacity: 0.8;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 2rem 1rem;
  color: rgba(156, 163, 175, 0.8);

  .empty-icon {
    width: 3rem;
    height: 3rem;
    margin: 0 auto 1rem;
    opacity: 0.5;
    color: #6b7280;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #d1d5db;
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 1.6;
  }
`;

// Field components for forms
export const Field = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    font-size: 0.875rem;
    font-weight: 600;
    color: #d1d5db;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  input, textarea {
    width: 100%;
    padding: 0.875rem 1rem;
    background: rgba(17, 24, 39, 0.6);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0.75rem;
    color: #e5e7eb;
    transition: all 0.3s ease;

    &::placeholder {
      color: rgba(156, 163, 175, 0.8);
    }

    &:focus {
      outline: none;
      border-color: rgba(59, 130, 246, 0.5);
      background: rgba(17, 24, 39, 0.8);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }
`;

export const ChipRow = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

export const Chip = styled.span`
  padding: 0.5rem 0.75rem;
  background: rgba(59, 130, 246, 0.2);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 0.5rem;
  font-size: 0.75rem;
  color: #93c5fd;
  font-weight: 500;
`;