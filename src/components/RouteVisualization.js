import React from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import { useSelector } from 'react-redux';

function RouteVisualization() {
  const route = useSelector((state) => state.route);

  return (
    <MapContainer center={[0, 0]} zoom={5} style={{ height: '400px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {route && (
        <>
          <Polyline positions={route.polyline} />
          {route.tollMarkers.map((marker, index) => (
            <Marker key={index} position={marker.position}>
              <Popup>{marker.tollDetails}</Popup>
            </Marker>
          ))}
        </>
      )}
    </MapContainer>
  );
}

export default RouteVisualization;
