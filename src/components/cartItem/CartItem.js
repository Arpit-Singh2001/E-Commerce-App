import React from "react";
import dummyCartImg from "../../assets/naruto.jpeg";
import { AiOutlineClose } from "react-icons/ai";
import "./CartItem.scss";
function CartItem() {
  return (
    <div className="CartItem">
      <div className="item-img">
        <img src={dummyCartImg} alt="img" />
      </div>

      <div className="item-info-wrapper">
        <div className="item-info">
          <p className="title">naruto</p>
          <p className="price">₹ 99</p>

          <div className="quantity-selector">
            <span className="btn decrement">-</span>
            <span className="quantity">0</span>
            <span className="btn increment">+</span>
          </div>

          <p className="total-price">Subtotal: ₹ 999</p>
        </div>
        <div className="item-remove">
          <AiOutlineClose />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
