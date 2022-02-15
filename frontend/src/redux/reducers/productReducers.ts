// import * as actionTypes from "../constans/productConstants";

import { ProductActionTypes, ProductAction } from "../types/product";

export const getProductsReducer = (state = { products: [] }, action:ProductAction) => { //убрать any
  switch (action.type) {
    case ProductActionTypes.GET_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case ProductActionTypes.GET_PRODUCTS_SUCCESS:
      return {
        products: action.payload,
        loading: false,
      };
    case ProductActionTypes.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { product: {} }, action:any) => { //убрать any
  switch (action.type) {
    case ProductActionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case ProductActionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case ProductActionTypes.GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ProductActionTypes.GET_PRODUCT_DETAILS_RESET:
      return {
        product: {},
      };
    default:
      return state;
  }
};