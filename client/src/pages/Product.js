import React from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { PRODUCTS } from '../utils/queries';

// Displays all the info about a single product

// Can take one of the following as a parameter:
// - Product's ID

const ProductPage = () => {
    const { id: productParam } = useParams();

    // Run a query for the product card
    const { loading, data } = useQuery(PRODUCTS, {
        variables: { id: productParam }
    });

    // Keep this so the app wont crash if data hasnt been received yet
    if(!data) {
    return (
        <div>Loading...</div>
    );
    }

    return (
        <>
        <h1>{data.products[0].name}</h1>
        <div className="">
            <img alt={data.products[0].name} src={`${data.products[0].image}`} />
                <div className="info">
                    <div className="stock">
                        <h4>Quantity</h4>
                        <span>{data.products[0].quantity} in stock.</span>
                    </div>
                    <div className="price">
                        <h4>Price</h4>
                        <span className="price">${data.products[0].price}</span>
                    </div>
                    <div className="description">
                        <h4>Price</h4>
                        <p>{data.products[0].description}</p>
                    </div>
            </div>
            <button>Add to cart!</button>
        </div>
        </>
    );
}

export default ProductPage;