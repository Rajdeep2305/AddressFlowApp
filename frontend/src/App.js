import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AddressManagementPage from './Pages/AddressManagementPage';
import Navbar from './Components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/manage-addresses" element={<AddressManagementPage />} />
            </Routes>
        </Router>
    );
};

export default App;