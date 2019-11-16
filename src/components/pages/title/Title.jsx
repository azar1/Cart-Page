import React from "react";
import "./Title.styles.scss";

export default function Title() {
  return (
    <div className="title">
      <h1>YOUR SHOPPING CART</h1>
      <p>
        if the cart is compeletly empty then we shall add back the product for
        you
      </p>
    </div>
  );
}
