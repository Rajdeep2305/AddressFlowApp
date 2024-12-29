import React, { useState } from 'react';
import axios from 'axios';

const AddressForm = ({ onAddressSaved, coordinates }) => {
    const [label, setLabel] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [area, setArea] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newAddress = { label, houseNumber, area, coordinates };
        await axios.post('/api/addresses', newAddress);
        onAddressSaved();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Label" value={label} onChange={(e) => setLabel(e.target.value)} required />
            <input type="text" placeholder="House/Flat/Block No." value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)} required />
            <input type="text" placeholder="Apartment/Road/Area" value={area} onChange={(e) => setArea(e.target.value)} required />
            <button type="submit">Save Address</button>
        </form>
    );
};

export default AddressForm;