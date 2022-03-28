import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const position = [42.3771302, -71.1171107];

const MapChart = () => {
  return (
    <div>
      <MapContainer className='z-0' center={position} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            Harvard University
            <br />
            Global Rank: 1
            <br />
            ⭐⭐⭐⭐⭐
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapChart;
