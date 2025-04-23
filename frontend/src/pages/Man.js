import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import ProductSection from '../components/productsection'; // Updated to match the file name

const Man = () => {
    return (
        <div>
            <Navbar />
            <ProductSection />
        </div>
    );
};

export default Man;