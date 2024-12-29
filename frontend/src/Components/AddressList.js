import React from 'react';

const AddressList = ({ addresses, onDelete }) => {
    return (
        <div>
            <h2>Saved Addresses</h2>
            <ul>
                {addresses.map(address => (
                    <li key={address._id}>
                        {address.label}: {address.houseNumber}, {address.area}
                        <button onClick={() => onDelete(address._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddressList;
