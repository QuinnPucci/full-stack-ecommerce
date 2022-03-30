import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { PRODUCT } from '../utils/queries';

// Displays all the info about a single product

// Can take one of the following as a parameter:
// - Product's ID

const ProductPage = () => {
    const { id: productParam } = useParams();

    // Run a query for the product card
    const { loading, data } = useQuery(PRODUCT, {
        variables: { id: productParam },
    });

    const productData = data?.product || {};

    // Keep this so the app wont crash if data hasnt been received yet
    if(!productData) {
        return (
            <div>Loading...</div>
        );
    }

    return (
        <>
        <div className="single_product">
            <div className="panel">
                <h1>{productData.name}</h1>
                <img alt={productData.name} src={`${productData.image}`} />
            </div>
                <div className="info">
                    <div class="specs">
                        <h2>Prices &amp; Specs</h2>
                        <div className="stock">
                            <span>Quantity</span>
                            {productData.quantity} in stock.
                        </div>
                        <div className="price">
                            <span>Price</span>
                            ${productData.price}
                        </div>
                    </div>
                    <div className="description">
                        <h2>Description</h2>
                        <p>{productData.description}</p>
                    </div>
            </div>
            <button class="add-to-cart-btn">Add to cart!</button>
        </div>
        </>
    );
}

export default ProductPage;