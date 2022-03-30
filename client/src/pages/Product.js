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
        <h1>{productData.name}</h1>
        <div className="">
            <img alt={productData.name} src={`${productData.image}`} />
                <div className="info">
                    <div className="stock">
                        <h4>Quantity</h4>
                        <span>{productData.quantity} in stock.</span>
                    </div>
                    <div className="price">
                        <h4>Price</h4>
                        <span className="price">${productData.price}</span>
                    </div>
                    <div className="description">
                        <h4>Price</h4>
                        <p>{productData.description}</p>
                    </div>
            </div>
            <button>Add to cart!</button>
        </div>
        </>
    );
}

export default ProductPage;