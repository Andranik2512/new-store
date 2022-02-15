import axios from "axios";
import { CartActionTypes } from "../types/cart";




export const addToCart = (id: any) => async (dispatch: any, getState: any) => {
  const { data } = await axios.get(`/home/get_one/${id}`);


  dispatch({
    type: CartActionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      imageUrl: data.imageUrl,
      price: data.price,
      countInStock: data.countInStock,
    },
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id: any) => (dispatch: any, getState: any) => {
  dispatch({
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};