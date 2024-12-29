import React, { useState } from 'react';
import MapView from '../Components/MapView';
import AddressForm from '../Components/AddressForm';
import PermissionModal from '../Components/PermissionModal';

const HomePage = () => {
    const [markerPosition, setMarkerPosition] = useState({ lat: 0, lng: 0 });
    const [showPermissionModal, setShowPermissionModal] = useState(true);

    const handleMarkerDragEnd = (event) => {
        setMarkerPosition({ lat: event.latLng.lat(), lng: event.latLng.lng() });
    };

    const handleAddressSaved = () => {
        // Logic to refresh or update the address list
    };

    const enableLocation = () => {
        // Logic to request location permissions
        setShowPermissionModal(false);
    };

    return (
        <div>
            <h1>Address Flow App</h1>
            {showPermissionModal && (
                <PermissionModal onEnableLocation={enableLocation} onSearchManually={() => {}} />
            )}
            <MapView center={markerPosition} onMarkerDragEnd={handleMarkerDragEnd} />
            <AddressForm onAddressSaved={handleAddressSaved} coordinates={markerPosition} />
        </div>
    );
};

export default HomePage;