import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
    return (
            <MapContainer style={mapStyles} center={position} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                </Marker>
            </MapContainer>
    )
}


const position = [-25.2744, 133.7751]

const mapStyles = {
    height: "76vh",
    width: "100%",
    top: "15.5vh"
}

export default Map
