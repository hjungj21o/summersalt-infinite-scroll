//render one product, show title and image
import React from 'react';
import './product_styles.scss';

export const Product = props => (
    <div className="product-container">
        <img className="product-img" src={props.product.images[0].src} alt={props.product.title} />
        <p className="product-title"> { props.product.title } </p>
    </div>
);