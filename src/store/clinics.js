import { create } from 'zustand'
import logo from '../assets/logo.svg' // one logo for all markers & popup images

export const useClinicStore = create((set, get) => ({
  // Map state
  center: { lat: 6.894155275018665, lng: 79.86140552496181  },
  zoom: 14,
  darkMode: false,
  mapType: 'roadmap', // 'roadmap' | 'satellite' | 'terrain' | 'hybrid'
  setMapType: (mt) => set({ mapType: mt }),

  // Selection
  selectedId: null,
  setSelected: (id) => set({ selectedId: id }),

  // Search/filter
  search: '',
  setSearch: (q) => set({ search: q }),

  // Data
  clinics: [
    { id:'hq', name:'First Docter (Pvt) Ltd.', doctorName:'-', phone:'0112595939', lat:6.894155275018665, lng:79.86140552496181,
      description:'Headquarters and primary service center.', imageUrl:logo, logoUrl:logo, isMainCompany:true },
    { id:'c1', name:'Medical Centre Bokundara - Teledoc Srilanka', doctorName:'Dr. Leel Gamarathne', phone:'0766120039', lat:6.819822955465856, lng:79.91685547746698, //6.819822955465856, 79.91685547746698
      description:'Family health & pediatrics.', imageUrl:logo, logoUrl:logo, isMainCompany:false },
    { id:'c2', name:'Mount Lavinia Clinic', doctorName:'Dr. Perera', phone:'071-2223344', lat:6.84, lng:79.8647,
      description:'General practice & lab services.', imageUrl:logo, logoUrl:logo, isMainCompany:false },
    { id:'c3', name:'Nugegoda Clinic', doctorName:'Dr. Fernando', phone:'072-9876543', lat:6.8698, lng:79.8997,
      description:'Dermatology & diagnostics.', imageUrl:logo, logoUrl:logo, isMainCompany:false },
    { id:'c4', name:'Wellawatte Clinic', doctorName:'Dr. Jayasuriya', phone:'075-4455667', lat:6.874, lng:79.8607,
      description:'Physician & pharmacy.', imageUrl:logo, logoUrl:logo, isMainCompany:false },
  ],

  // Derived helpers
  filteredClinics: () => {
    const q = (get().search || '').trim().toLowerCase()
    const list = get().clinics
    if (!q) return list
    return list.filter(c =>
      c.name.toLowerCase().includes(q) ||
      (c.doctorName || '').toLowerCase().includes(q)
    )
  },

  // View helpers
  setCenter: (latLng) => set({ center: latLng }),
  setZoom: (z) => set({ zoom: z }),
  toggleDark: () => set({ darkMode: !get().darkMode }),
}))
