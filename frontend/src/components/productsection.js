import React, {useState , useEffect} from 'react';
import ProductItem from './productitem';

function ProductSection() {

   const [products, setProducts] = useState([]);

   useEffect (()=> {
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(error => console.error('Error fetching products:',error));
},[]);

   
    return (
        <>
            {products.map(product =>(
                <ProductItem key ={product.id} product={product}/>
            ))}
        </>
    );
};


export default ProductSection;