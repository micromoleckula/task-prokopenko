import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useMemo } from "react";
import satellite from "../assets/satellite.png";

export function MapView({ latitude, longitude }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const lat = Number(latitude);
  const lng = Number(longitude);

  const isValidCoords = !isNaN(lat) && !isNaN(lng);

  const center = { lat, lng };
  const containerStyle = { width: "750px", height: "600px" };
  const options = useMemo(
    () => ({ mapId: undefined, disableDefaultUI: false, clickableIcons: true }),
    []
  );

  if (!isLoaded) return <div>Loading map…</div>;
  if (!isValidCoords) return <div>Coordinates not defined</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={4}
      options={options}
    >
      <Marker
        position={center}
        icon={{
          url: satellite,
          scaledSize: new window.google.maps.Size(40, 40),
        }}
      />
    </GoogleMap>
  );
}
