import React from "react";
import CartItem from "../CartItem.js";
import Auth from "../../utils/auth";

const Cart = () => {
  return (
    <div className="cart">
      <div className="close">[close]</div>
      <h2>Shopping Cart</h2>
      <div>
        <CartItem
          item={{
            name: "Luxury Motor Yacht",
            image: "motor2.jpeg",
            price: 70000000,
            purchaseQuantity: 1,
          }}
        />

        <div className="flex-row space-between">
          <strong>Total: $70000000</strong>
          {Auth.loggedIn() ? (
            <button className="cart-button">Checkout</button>
          ) : (
            <span>(log in to check out)</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
