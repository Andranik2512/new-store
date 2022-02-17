export interface CartState {
    cartItems: [];
  }
  
export enum CartActionTypes{
    ADD_TO_CART = "ADD-TO_CART",
    REMOVE_FROM_CART = "REMOVE_FROM_CART",
    CART_RESET = "CART_RESET",// Не используется
  }
  
type CartAddActionPayload = {
  product: number
  name: string
  imageUrl: string
  price: number
  countInStock: number
}

  interface CartAddAction{
    type: CartActionTypes.ADD_TO_CART;
    payload: CartAddActionPayload;
  }
  interface CartRemoveAction{
    type: CartActionTypes.REMOVE_FROM_CART;
    payload: CartAddActionPayload[];
  }
  interface CartResetAction{
    type: CartActionTypes.CART_RESET;// Не используется
    payload?: CartAddActionPayload[];
  }
  
  export type CartAction =  CartAddAction | CartRemoveAction | CartResetAction;