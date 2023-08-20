import React from "react";
import "./Cart.scss";
import { AiOutlineClose } from "react-icons/ai";
import { BsCartX } from "react-icons/bs";
import CartItem from "../cartItem/CartItem";

function Cart({ onClose }) {
  return (
    <div className="Cart" onClick={onClose}>
      <div className="overlay"></div>
      <div className="cart-content">
        <div className="header">
          <h3>Shoping Cart</h3>
          <div className="close-btn" onClick={onClose}>
            <AiOutlineClose /> Close
          </div>
        </div>
        <div className="cart-items">
          <CartItem />
          <CartItem />
        </div>
        <div className="checkout-info">
          <div className="total-amount">
            <h3 className="total-message">Total</h3>
            <h3 className="total-value">₹ 9999</h3>
          </div>
          <div className="checkout btn-primary">CheckOut Now </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
