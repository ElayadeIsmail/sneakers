import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./checkout-page.scss";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import { connect } from "react-redux";
import Spinner from "../../components/spinner/Spinner";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const CheckoutPage = ({ products: { loading, cartItems, total } }) => {
  const [alert, setAlert] = useState("");
  const [alertType, setAlertType] = useState("");
  const makePayment = async (token) => {
    const body = {
      token,
      total,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      await axios.post("/payment", body, headers);
      setAlert("Succesful Payment");
      setAlertType("success");
      setTimeout(() => {
        setAlert("");
        setAlertType("");
      }, 3000);
    } catch (error) {
      console.log(error);
      setAlert(
        "There was an issue with your payment! Please make sure you use the provided credit card."
      );
      setAlertType("danger");
      setTimeout(() => {
        setAlert("");
        setAlertType("");
      }, 3000);
    }
  };
  return (
    <div className='checkout-page'>
      <div className='header'></div>
      {alert && <div className={`alert ${alertType}`}>{alert}</div>}
      <div className='container'>
        <div className='checkout-page-content'>
          <h1 className='section-title'>Shopping Cart</h1>
          {loading === false && cartItems.length === 0 ? (
            <h1 style={{ color: "#111111" }} className='section-title'>
              Your Cart Is Empty
            </h1>
          ) : loading === true && cartItems.length === 0 ? (
            <Spinner />
          ) : (
            <div className='checkout-page-content-items'>
              <div className='items-header'>
                <span className='product title'>Product</span>
                <span className='quantity title'>Quantity</span>
                <span className='total title'>Total</span>
                <span className='remove title'></span>
              </div>
              {cartItems.map((product) => (
                <CheckoutItem product={product} key={product._id} />
              ))}

              <div className='links'>
                <Link className='btn back' to='/shop'>
                  Continue shopping
                </Link>
                <StripeCheckout
                  stripeKey={process.env.REACT_APP_STRIPE_PUB_KEY}
                  token={makePayment}
                  name='Sneakers'
                  amount={total * 100}
                  shippingAddress
                  alipay
                  image={require("../../images/sneakers.png")}
                  description={`Your total is $${total}`}
                >
                  <button className='btn check'>checkout</button>
                </StripeCheckout>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(CheckoutPage);
