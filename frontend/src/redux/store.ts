import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { cartReducer } from "./reducers/cartReducers";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducers/productReducers";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});

const client = axios.create({ //all axios can be used, shown in axios documentation
  baseURL:'http://localhost:5001',
  responseType: 'json',
  headers: {
  //  Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDRlMmVmYTJkMDJiZTljOTgzODRiZCIsIm5hbWUiOiJBZG1pbiIsImlhdCI6MTY0NDY0ODY3NiwiZXhwIjoxNjQ0NzM1MDc2fQ.zqbRKQwvMPr0OyNRN64AWfSP4GWF3jBJuNsCDA0jqvA"
    Authorization: localStorage.getItem('auth_token') || ''
  }
});
  const middleware = [thunk,axiosMiddleware(client)];
let cartItems1 = localStorage.getItem("cart");
let cartItemsInLocalStorage:any;
if(cartItems1) {
    cartItemsInLocalStorage =  JSON.parse(cartItems1);
}else {
    cartItemsInLocalStorage = [];
}



const INITIAL_STATE:any = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;