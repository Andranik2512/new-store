import * as actionTypes from "../constans/productConstants";
import axios from "axios";

export const getProducts = () => async (dispatch:any) => {
  try {
    dispatch({ 
      type: actionTypes.GET_PRODUCTS_REQUEST, 
      payload: {
        request: {
          url: "/admin/get_all_products"
        }
      } 
    });
     console.log('test');
    const { data } = await axios.get("");
    console.log(data);
    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error:any) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductDetails = (id:any) => async (dispatch:any) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
   
    const { data } = await axios.get(`/admin/get_one_prod/${id}`);
    
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error:any) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeProductDetails = () => (dispatch:any) => {
  dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });
};