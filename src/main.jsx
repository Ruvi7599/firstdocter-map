import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { LoadScript } from "@react-google-maps/api";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoadScript googleMapsApiKey={apiKey} libraries={["places"]}>
      <App />
    </LoadScript>
  </React.StrictMode>
);
