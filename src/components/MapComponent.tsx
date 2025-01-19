import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";

interface MapComponentProps {
  latitude: number;
  longitude: number;
  name: string;
}

const MapComponent: React.FC<MapComponentProps> = ({
  latitude,
  longitude,
  name,
}) => {
  const center: LatLngExpression = [latitude, longitude];

  return (
    <div
      style={{ height: "400px", width: "100%" }}
      className="rounded-lg shadow-lg"
    >
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={center}>
          <Popup>{name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
