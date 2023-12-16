import React from 'react';
import { TileLayer, Polyline, MapContainer } from 'react-leaflet';
import { useSelector } from 'react-redux';

const TollMap = () => {
  const route = useSelector((state) => state.route);

  // Helper function to convert decoded polyline to coordinates
  const convertPolylineToCoordinates = (decodedPolyline) => {
    return decodedPolyline.map((point) => {
      const [latitude, longitude] = point;
      return { lat: latitude, lng: longitude };
    });
  };

  const decodedCoordinates = route ? convertPolylineToCoordinates(route.decodedPolyline) : null;

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {decodedCoordinates && (
        <Polyline positions={decodedCoordinates} color="blue" />
      )}
    </MapContainer>
  );
};

export default TollMap;
