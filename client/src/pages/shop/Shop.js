import React, { Fragment, useState } from "react";
import "./shop.scss";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Product from "../../components/product/Product";
import Spinner from "../../components/spinner/Spinner";
import Pagination from "../../components/pagination/Pagination";

const Shop = ({ products: { products, loading } }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };
  return (
    <div className='shop-page'>
      <div className='header'></div>
      <div className='container'>
        <div className='shop-page-content'>
          <h1 className='section-title'>Products</h1>
          {products.length === 0 && loading === true ? (
            <Spinner />
          ) : (
            <Fragment>
              <div className='shop-products'>
                {currentProducts.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
              </div>
              <Pagination
                paginate={paginate}
                productsPerPage={productsPerPage}
                totalProducts={products.length}
                currentPage={currentPage}
              />
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

Shop.propTypes = {
  products: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(Shop);
