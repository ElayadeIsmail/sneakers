import React, { Fragment } from "react";
import "./collection.scss";
import { Link } from "react-router-dom";

const Collection = ({ left, theme, image, id }) => {
  return (
    <div className={`collection ${theme}`}>
      {left ? (
        <Fragment>
          <img
            className='collection-img'
            src={require("../../images/left-shoe.png")}
            alt=''
          />
          <div className='content spacing'>
            <h1>-50% OFF</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              dolorem.Lorem ipsum dolor sit amet consectetur.
            </p>
            <Link to={`/product/${id}`} className='btn'>
              See Product
            </Link>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className='content spacing'>
            <h1>-50% OFF</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              dolorem.Lorem ipsum dolor sit amet consectetur.
            </p>
            <Link to={`/product/${id}`} className='btn'>
              See Product
            </Link>
          </div>

          <img className='collection-img' src={image} alt='' />
        </Fragment>
      )}
    </div>
  );
};

export default Collection;
