import React from 'react';

const PermissionModal = ({ onEnableLocation, onSearchManually }) => {
    return (
        <div className="modal">
            <h2>Location Permission Required</h2>
            <p>Location permissions are required to use this app.</p>
            <button onClick={onEnableLocation}>Enable Location</button>
            <button onClick={onSearchManually}>Search Manually</button>
        </div>
    );
};

export default PermissionModal;