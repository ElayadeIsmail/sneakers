import React, { useEffect } from "react";
import "./product-page.scss";
import { useParams } from "react-router-dom";
import {
  getProduct,
  clearProduct,
  addProduct,
} from "../../redux/products/actions";
import { connect } from "react-redux";
import Spinner from "../../components/spinner/Spinner";

const ProductPage = ({
  getProduct,
  clearProduct,
  products: { product, loadingProduct },
  addProduct,
}) => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    getProduct(id);
    return () => {
      clearProduct();
    };
  }, [getProduct, id, clearProduct]);
  return (
    <div className='product-page'>
      <div className='header'></div>
      {!product && loadingProduct === true ? (
        <Spinner />
      ) : !product && loadingProduct === false ? (
        <h2 className='section-title txt-center'>
          Sorry this Product Doesn't exist
        </h2>
      ) : (
        <div className='product-page-content'>
          <div className='product-page-image'>
            <img src={product.image} alt={product.name} />
          </div>
          <div className='product-page-info spacing'>
            <h1>{product.name}</h1>
            <p>
              {product.details}
              {product.details}
            </p>
            <h2>${product.price}</h2>
            <button onClick={() => addProduct(product)} className='btn bt'>
              ADD TO CART
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, {
  getProduct,
  clearProduct,
  addProduct,
})(ProductPage);
