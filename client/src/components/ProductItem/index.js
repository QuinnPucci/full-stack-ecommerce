import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { PRODUCTS } from "../../utils/queries";

// Displays a single product item
// Can take one of the following as a parameter:
// - Product's ID
// - Product's name

function ProductItem(item) {
  const { name, _id } = item;

  // Run a query for the product card
  const { loading, data } = useQuery(PRODUCTS, {
    variables: { id: _id, name: name },
  });

  // Keep this so the app wont crash if data hasnt been received yet
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${data.products[0]._id}`}>
        <img alt={data.products[0].name} src={`${data.products[0].image}`} />
        <h4>{data.products[0].name}</h4>
      </Link>
      <div className="info">
        <span className="stock">
          <span>Quantity:</span> {data.products[0].quantity} in stock.
        </span>
        <span className="price">${data.products[0].price}</span>
      </div>
      <button class="add-to-cart-btn cart-button">Add to cart!</button>
    </div>
  );
}

export default ProductItem;
