import React from 'react';
import Navbar from '../components/Navbar';
import Carousl from '../components/Carousl';
import Ads from '../components/ads';
import ProductSection from '../components/ProductSection';
import '../App.css'

function Home() {

    let productArray = ['iphone' ,' realme' ,'oppo', 'sam']
        return (
        <div className='container-fluid'>
            <Navbar/>
            <Carousl/>
            <div className='row'>

                {productArray.map(el => <Ads name={el} />)}
        
            </div>

                <ProductSection/>
        </div>
    )
}

export default Home;