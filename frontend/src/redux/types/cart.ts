export interface CartState {
    cartItems: [];
  }
  
export enum CartActionTypes{
    ADD_TO_CART = "ADD-TO_CART",
    REMOVE_FROM_CART = "REMOVE_FROM_CART",
    CART_RESET = "CART_RESET",
  }
  
  interface CartAddAction{
    type: CartActionTypes.ADD_TO_CART;
    payload: any;
  }
  interface CartRemoveAction{
    type: CartActionTypes.REMOVE_FROM_CART;
    payload: any[];
  }
  interface CartResetAction{
    type: CartActionTypes.CART_RESET;
    payload?: any[];
  }
  
  export type CartAction =  CartAddAction | CartRemoveAction | CartResetAction