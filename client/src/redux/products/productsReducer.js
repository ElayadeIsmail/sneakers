import {
  GET_PRODUCTS,
  GET_PRODUCT,
  CLEAR_PRODUCT,
  PRODUCT_ERROR,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SHORT_PRODUCT,
  UPDATE_TOTAL,
} from "./types";

import { addItem, shortProduct, removeItem } from "./utils";

const initialState = {
  products: [],
  product: null,
  loading: true,
  loadingProduct: true,
  cartItems: JSON.parse(localStorage.getItem("cartItems"))
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  total: 0,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: payload,
        loadingProduct: false,
      };
    case CLEAR_PRODUCT:
      return {
        ...state,
        product: null,
        loadingProduct: true,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        cartItems: addItem(state.cartItems, payload),
        loading: false,
      };
    case SHORT_PRODUCT:
      return {
        ...state,
        cartItems: shortProduct(state.cartItems, payload),
        loading: false,
      };
    case UPDATE_TOTAL:
      return {
        ...state,
        total: state.cartItems.reduce(
          (acc, item) => acc + item.quantity * parseFloat(item.price),
          0
        ),
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, payload),
        loading: false,
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        loadingProduct: false,
      };

    default:
      return state;
  }
}
