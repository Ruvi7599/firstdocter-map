import { useLoadScript } from "@react-google-maps/api";
import SearchBar from "./SearchBar";

export default function SearchWrapper() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading search…</div>;

  return <SearchBar />;
}
