
import React, { useState, useEffect } from 'react';
import ProductItem from './productitem'; 

function ProductSection() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://localhost:3000/api/users")
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="product-container">
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductSection;