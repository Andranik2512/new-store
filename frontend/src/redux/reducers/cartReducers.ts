import { CartAction, CartActionTypes, CartState } from "../types/cart";

const CART_INITIAL_STATE: CartState = {
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action:CartAction) => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      const item = action.payload;

      const existItem:any = state.cartItems.find((x:any) =>x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x:any) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x:any) => x.product !== action.payload),
      };
    default:
      return state;
  }
};