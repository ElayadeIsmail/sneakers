import React from "react";
import "./showcase-product.scss";
import Product from "../product/Product";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../spinner/Spinner";

const ShowcaseProducts = ({ products: { products, loading } }) => {
  return (
    <div className='showcase_products'>
      <div className='container'>
        <h2 class='section-title'>Latest products</h2>

        {products.length === 0 && loading === true ? (
          <Spinner />
        ) : (
          <div className='products'>
            {products
              .filter((product, index) => index < 3)
              .map((product) => (
                <Product key={product._id} product={product} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

ShowcaseProducts.propTypes = {
  products: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(ShowcaseProducts);
