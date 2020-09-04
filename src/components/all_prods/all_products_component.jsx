//render each product, maybe also house the infinite scroll logic in here

import React from 'react';
import { Product } from '../product_card/product_component';
import './all_products_styles.scss';

export const ProductsList = props => {
    return (
        <div className="all-products-container">
            {props.products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
};