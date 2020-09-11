import axios from "axios";

import {
  GET_PRODUCTS,
  PRODUCT_ERROR,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SHORT_PRODUCT,
  UPDATE_TOTAL,
  GET_PRODUCT,
  CLEAR_PRODUCT,
} from "./types";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("/products");
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: PRODUCT_ERROR,
    });
  }
};

export const addProduct = (product) => (dispatch) => {
  dispatch({
    type: ADD_PRODUCT,
    payload: product,
  });
  dispatch({
    type: UPDATE_TOTAL,
  });
};
export const removeProduct = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_PRODUCT,
    payload: id,
  });
  dispatch({
    type: UPDATE_TOTAL,
  });
};

export const getProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/product/${id}`);
    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: PRODUCT_ERROR,
    });
  }
};

export const clearProduct = () => (dispatch) => {
  dispatch({
    type: CLEAR_PRODUCT,
  });
};

export const shortProduct = (id) => (dispatch) => {
  dispatch({
    type: SHORT_PRODUCT,
    payload: id,
  });
  dispatch({
    type: UPDATE_TOTAL,
  });
};
