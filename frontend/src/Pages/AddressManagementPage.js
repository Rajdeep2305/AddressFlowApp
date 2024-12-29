import React, { useEffect, useState } from 'react';
import AddressList from '../Components/AddressList';
import axios from 'axios';

const AddressManagementPage = () => {
    const [addresses, setAddresses] = useState([]);

    useEffect(() => {
        const fetchAddresses = async () => {
            const response = await axios.get('/api/addresses');
            setAddresses(response.data);
        };
        fetchAddresses();
    }, []);

    const handleDelete = async (id) => {
        await axios.delete(`/api/addresses/${id}`);
        setAddresses(addresses.filter(address => address._id !== id));
    };

    return (
        <div>
            <h1>Manage Addresses</h1>
            <AddressList addresses={addresses} on Delete={handleDelete} />
        </div>
    );
};

export default AddressManagementPage;