import React from "react";
import dummyImg from "../../assets/naruto.jpeg";
import "./Product.scss";
import { useNavigate } from "react-router-dom";
function Product() {
  const navigate = useNavigate();
  return (
    <div className="Product" onClick={() => navigate("/products/dfj")}>
      <div className="product-container">
        <div className="product-img">
          <div className="img-container">
            <img src={dummyImg} alt="kdfl" id="img" />
          </div>
        </div>
        <div className="product-info">
          <p className="title">
            Lorem ipsum dolor sit amet consectetur adipisicin
          </p>
          <p className="price">₹ 666</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
