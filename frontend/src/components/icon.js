import React from 'react';
import { Link } from 'react-router-dom';
import setCurrentProduct from '../actions/setCurrentProduct'; //import the action for setting the current product
import { useDispatch } from 'react-redux';
import {addToCart} from '../actions/cartActions'; //import the action for incrementing the cart counter
import {addToWishlist} from '../actions/wishlistActions';



const Icon = ( {product}) => {
  const  dispatch = useDispatch();

    const handleProductClick = () => {
        dispatch(setCurrentProduct(product));
    }

    const handleShopingBagClick = () => {
        dispatch(addToCart(product));
        alert('Product added to cart!')
    };

    const handleHeartClick = () => {
    dispatch(addToWishlist(product));}


    return (
        <div>
            <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                            <li className="icon">
                            <Link to={{pathname:'/details/'}} onClick={handleProductClick}>
                            <span className="fas fa-expand-arrows-alt"></span>
                            </Link>
                            </li>
                            
                            
                        <li className="icon mx-3" onClick={handleHeartClick}>
                            <span className="fas fa-heart"></span>
                            </li> 
                            
                        <li className="icon" onClick={handleShopingBagClick}>
                            <span className="far fa-shopping-bag"></span>
                            </li>
                    </ul>
        </div>
    );
}

export default Icon;