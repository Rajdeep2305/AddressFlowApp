import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapView = ({ center, onMarkerDragEnd }) => {
    return (
        <LoadScript googleMapsApiKey="GOOGLE_MAP_API">
            <GoogleMap
                mapContainerStyle={{ height: "400px", width: "800px" }}
                center={center}
                zoom={15}
            >
                <Marker
                    position={center}
                    draggable={true}
                    onDragEnd={onMarkerDragEnd}
                />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapView;
