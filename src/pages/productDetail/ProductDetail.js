import React from "react";
import "./ProductDetail.scss";
import dummyImg from "../../assets/naruto.jpeg";
import { useParams } from "react-router-dom";
function ProductDetail() {
  const params = useParams();

  return (
    <div className="ProductDetail">
      <div className="container">
        <div className="product-layout">
          <div className="product-img  ">
            <img src={dummyImg} alt="product img" />
          </div>
          <div className="product-info">
            <h1 className="heading">This is the Title.walt poster</h1>
            <h3 className="price">₹ 666</h3>
            <p className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              harum hic, ipsa doloremque vel vitae doloribus magnam, velit
              possimus, sed perspiciatis commodi voluptatum!
            </p>

            <div className="cart-options">
              <div className="quantity-selector">
                <span className="btn decrement">-</span>
                <span className="quantity">0</span>
                <span className="btn increment">+</span>
              </div>
              <button className="btn-primary add-to-cart">Add to Cart</button>
            </div>

            <div className="return-policy">
              <ul>
                <li>
                  This product is made to order and is typically printed in 3-6
                  working days. Your entire order will ship out together.
                </li>
                <li>
                  Since this product is printed on demand especially for you, it
                  is not eligible for cancellations and returns. Read our Return
                  Policy.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
