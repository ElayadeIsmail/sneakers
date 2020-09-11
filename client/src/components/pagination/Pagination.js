import React from "react";
import "./pagination.scss";

const Pagination = ({
  totalProducts,
  productsPerPage,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className='product_pagination'>
      {pageNumbers.map((number) => (
        <a
          className={currentPage === number ? "current" : ""}
          onClick={() => paginate(number)}
          key={number}
          href='#!'
        >
          {number}
        </a>
      ))}
    </div>
  );
};

export default Pagination;
