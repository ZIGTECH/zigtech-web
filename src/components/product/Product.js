import React from "react";
import { images } from "../../images";
import "./product.scss";

function Product() {
  return (
    <div>
      <div className="product">
        <h1 style={{ margin: "10rem 0" }}>Recent Products</h1>
        <div className="product-container">
          <div class="card"></div>
          <div class="card"></div>
          <div class="card"></div>
        </div>
      </div>
    </div>
  );
}

export default Product;
