import React from "react";
import "./info.scss";

const Info = () => {
  return (
    <div className='info'>
      <section className='s2'>
        <div className='container'>
          <div className='sections'>
            <div className='section pr spacing wild'>
              <h2>SNEAKERS</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt, quidem. Molestias, amet
              </p>
              <img src={require("../../images/payment.png")} alt='payment' />
            </div>
            <div className='section spacing small'>
              <h3>Shopping</h3>
              <ul>
                <li>
                  <a href='#!'>Clothing Store</a>
                </li>
                <li>
                  <a href='#!'>Trending Shoes</a>
                </li>
                <li>
                  <a href='#!'>Accessories</a>
                </li>
                <li>
                  <a href='#!'>Sale</a>
                </li>
              </ul>
            </div>
            <div className='section spacing small'>
              <h3>Shopping</h3>
              <ul>
                <li>
                  <a href='#!'>Contact Us</a>
                </li>
                <li>
                  <a href='#!'>Payment Methods</a>
                </li>
                <li>
                  <a href='#!'>Delivary</a>
                </li>
                <li>
                  <a href='#!'>Return & Exchanges</a>
                </li>
              </ul>
            </div>
            <div className='section spacing wild'>
              <h3>NewLetter</h3>
              <div>
                <p>
                  Be the first to know about new arrivals, look books, sales &
                  promos!
                </p>
                <form action='#'>
                  <input type='text' placeholder='Your email' />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p>
          Copyright © All rights reserved made by <span>ELAYADE</span>
        </p>
      </footer>
    </div>
  );
};

export default Info;
