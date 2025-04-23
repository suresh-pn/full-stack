// filepath: c:\Users\suresh\Desktop\Ecommerse\frontend\src\components\productitem.js
import React from 'react';
import Icon from './icon';

const ProductItem = ({ product }) => {
    return (
        <div className="product-item">
            <div className="product">
                <img src={product.image} alt={product.title} />
                <Icon key={product.id} product={product} />
            </div>
            <div className="tag bg-red">sale</div>
            <div className="title pt-4 pb-1">{product.title}</div>
            <div className="d-flex align-content-center justify-content-center">
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
            </div>
            <div className="price">${product.price}</div>
        </div>
    );
};

export default ProductItem;