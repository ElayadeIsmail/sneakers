import React from "react";
import "./ShowcaseCollecton.scss";
import Collection from "../collection/Collection";
import RedShoe from "../../images/shoe-1.png";
import blueShoe from "../../images/blue-shoe.png";
import leftShoe from "../../images/left-shoe.png";

const ShowcaseCollection = () => {
  return (
    <div className='showcase-collection'>
      <div className='container'>
        <h1 className='section-title'>Special Discount</h1>
        <div className='collection-items'>
          <Collection
            image={RedShoe}
            theme='yellow'
            id='5f569d76eaee91120e31c39e'
          />
          <Collection
            left
            image={leftShoe}
            theme='white'
            id='5f569d76eaee91120e31c3a1'
          />
          <Collection
            image={blueShoe}
            theme='blue'
            id='5f569d76eaee91120e31c397'
          />
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCollection;
