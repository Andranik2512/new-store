import * as actionTypes from "../constans/productConstants";
import axios from "axios";

// export const getProducts = () => async (dispatch:any) => {
//   try {
//     dispatch({ 
//       type: actionTypes.GET_PRODUCTS_REQUEST, 
//       payload: {
//         request: {
//           url: "/home"
//         }
//       } 
//     });
//      console.log('test');
//     const { data } = await axios.get("/home");
//     console.log(data);
//     dispatch({
//       type: actionTypes.GET_PRODUCTS_SUCCESS,
//       payload: data,
//     });
//   } catch (error:any) {
//     dispatch({
//       type: actionTypes.GET_PRODUCTS_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

export const getProducts = () => async (dispatch:any) => {
  try {
    dispatch({ 
      type: actionTypes.GET_PRODUCTS_REQUEST, 
      payload: {
        request: {
          url: "/home"
        }
      } 
    });
     console.log('test');
    const { data } = await axios.get("/home");
    console.log('data', data.finnedDevices);
    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data.finnedDevices,
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
   
    const { data } = await axios.get(`/home/get_one/${id}`);
    
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