import React from "react";

function ProductItem(item) {
  const { image, name, _id, price, quantity } = item;

  return (
    <div className="card px-1 py-1">
      <img alt={name} src={`/images/${image}`} />
      <p>{name}</p>
      <div>
        <div>{quantity} in stock.</div>
        <span>${price}</span>
      </div>
      <button>Add to cart!</button>
    </div>
  );
}

export default ProductItem;
