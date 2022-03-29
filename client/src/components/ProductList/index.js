import { React } from "react";
import { useQuery } from "@apollo/client";
import { PRODUCTS } from "../../utils/queries";

import ProductItem from "../ProductItem";
// WE NEED QUERY_PRODUCTS IN QUERIES.

function ProductList({ currentCategory }) {
  const { loading, data } = useQuery(PRODUCTS);

  const products = data?.products || [];

  function filterProducts() {
    if (!currentCategory) {
      return products;
    }

    return products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <div className="product-list">
      <h2>Our Products:</h2>
      {products.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You don't have any yachts yet!</h3>
      )}
    </div>
  );
}


export default ProductList