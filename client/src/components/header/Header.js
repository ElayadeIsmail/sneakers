import React, { useState, useEffect } from "react";
import "./header.scss";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Bag } from "../../assets/shop.svg";
import { connect } from "react-redux";

const Header = ({ cartItems, total }) => {
  const [items, setItems] = useState(0);
  useEffect(() => {
    const total = cartItems.reduce((acc, cart) => acc + cart.quantity, 0);
    setItems(total);
  }, [cartItems]);
  return (
    <nav>
      <div className='logo'>
        <h1>Sneakers.</h1>
      </div>
      <div className='nav-items'>
        <NavLink exact to='/' activeClassName='current'>
          Home
        </NavLink>
        <NavLink exact to='/shop' activeClassName='current'>
          Shop
        </NavLink>
        <NavLink exact to='/contact' activeClassName='current'>
          Contacts
        </NavLink>
      </div>
      <div className='nav-right'>
        <Link to='/checkout' className='shoping-bag'>
          <Bag />
          <span>{items}</span>
        </Link>
        <span className='total'>${total.toFixed(2)}</span>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.products.cartItems,
  total: state.products.total,
});

export default connect(mapStateToProps)(Header);
