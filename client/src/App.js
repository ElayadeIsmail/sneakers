import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./styles/App.scss";
import Header from "./components/header/Header";
import { getProducts } from "./redux/products/actions";
import Info from "./components/info/Info";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/shop/Shop";
import { connect } from "react-redux";
import store from "./redux/store";
import PropTypes from "prop-types";
import CheckoutPage from "./pages/checkout-page/CheckoutPage";
import Contact from "./pages/contact/Contact";
import ProductPage from "./pages/product/ProductPage";

const App = ({ getProducts }) => {
  useEffect(() => {
    getProducts();
    store.dispatch({
      type: "UPDATE_TOTAL",
    });
  }, [getProducts]);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/product/:id' component={ProductPage} />
        <Route render={() => <Redirect to='/shop' />} />
      </Switch>
      <Info />
    </Router>
  );
};

App.propTypes = {
  getProducts: PropTypes.func.isRequired,
};

export default connect(null, { getProducts })(App);
