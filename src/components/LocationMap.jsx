import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const LocationMap = () => {
  // Coordenadas aproximadas del centro de Cusco
  const position = [-13.517, -71.978]; 

  return (
    <div className="w-full h-100 rounded-2xl overflow-hidden shadow-inner my-8 border-4 border-white">
      <MapContainer 
        center={position} 
        zoom={15} 
        scrollWheelZoom={false} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={defaultIcon}>
          <Popup>
            <b>ChavelitasFood</b> <br /> ¡El mejor sabor de Cusco!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;