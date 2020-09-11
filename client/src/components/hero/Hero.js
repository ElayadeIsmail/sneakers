import React from "react";
import "./hero.scss";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='hero-content flex spacing'>
          <h1>Sneakers</h1>
          <p>
            Amazing Sneakers <br />
            at An Amazing Price{" "}
          </p>
          <a href='#!' className='btn'>
            See What We have
          </a>
          <img
            src={require("../../images/shoe-1.png")}
            alt='shoe'
            className='hero-img'
          />
        </div>
        <div className='social-media'>
          <a href='#!'>
            <FaFacebookF />
          </a>
          <a href='#!'>
            <FaTwitter />
          </a>
          <a href='#!'>
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
