import React from "react";
import "./features.scss";
import { FaMoneyBillAlt, FaPaperPlane, FaClock } from "react-icons/fa";

const Features = () => {
  return (
    <div className='s1'>
      <div className='container'>
        <div className='features'>
          <div className='feature'>
            <FaPaperPlane className='icon' />
            <h3>Free Shipping Worldwide</h3>
            <span>On order over 150$ - 7weeks</span>
          </div>
          <div className='feature'>
            <FaMoneyBillAlt className='icon' />
            <h3>Money Back Gaurantee</h3>
            <span>Send within 30 days</span>
          </div>
          <div className='feature'>
            <FaClock className='icon' />
            <h3>24/7 Customer Servers</h3>
            <span>Call us at Xxx-XX</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
