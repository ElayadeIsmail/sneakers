import React from "react";
import "./product.scss";
import { addProduct } from "../../redux/products/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const Product = ({ product, addProduct }) => {
  const history = useHistory();
  return (
    <div className='product spacing'>
      <div
        className='product_img'
        onClick={() => history.push(`/product/${product._id}`)}
      >
        <img src={product.image} alt={product.name} />
      </div>
      <span className='name'>{product.name}</span>
      <span className='price'>${product.price}</span>
      <button onClick={() => addProduct(product)} className='btn'>
        ADD TO CARD
      </button>
    </div>
  );
};

export default connect(null, { addProduct })(Product);
