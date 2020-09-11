import React, { useState } from "react";
import "./checkout-item.scss";
import { connect } from "react-redux";
import {
  addProduct,
  removeProduct,
  shortProduct,
} from "../../redux/products/actions";

const CheckoutItem = ({ product, addProduct, removeProduct, shortProduct }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const [total, setTotal] = useState(
    product.quantity * parseFloat(product.price).toFixed(2)
  );
  return (
    <div className='checkout-item'>
      <div className='product-info'>
        <img src={product.image} alt='shoe' />
        <div className='info'>
          <span>{product.name}</span>
          <h5>${product.price}</h5>
        </div>
      </div>
      <div className='product-quantity'>
        <span
          onClick={() => {
            shortProduct(product._id);
            setQuantity(product.quantity);
            setTotal(product.quantity * parseFloat(product.price).toFixed(2));
          }}
          className='pointer'
        >
          &#10094;
        </span>
        <span>{quantity}</span>
        <span
          onClick={() => {
            addProduct(product);
            setQuantity(product.quantity);
            setTotal(product.quantity * parseFloat(product.price).toFixed(2));
          }}
          className='pointer'
        >
          &#10095;
        </span>
      </div>
      <div className='product-total'>${total}</div>
      <div className='product-remove'>
        <span onClick={() => removeProduct(product._id)} className='pointer'>
          &#10006;
        </span>
      </div>
    </div>
  );
};

export default connect(null, { addProduct, removeProduct, shortProduct })(
  CheckoutItem
);
