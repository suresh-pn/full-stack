import React from 'react';
import { useSelector } from 'react-redux';
import ProductDetails from '../components/ProductDetails';
import Navbar from '../components/Navbar';

const Details = () => {

    let product = useSelector((state) => {
        
        return state.CurrentProduct.product;})
    
    return ( <>
        
            <div className="container-fluid">
            <Navbar/>
            <div/>
            <div className="container">
            <ProductDetails product ={product}/>
            
                </div>
            </div>
        </>)
}

export default Details;