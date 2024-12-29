import React, { useState } from 'react';

const SearchModal = ({ onSearch, onClose }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
        onClose();
    };

    return (
        <div className="modal">
            <h2>Search for an Address</h2>
            <input
                type="text"
                placeholder="Enter address"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default SearchModal;