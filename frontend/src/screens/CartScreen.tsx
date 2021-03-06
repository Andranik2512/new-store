import React, { FC, useCallback } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ProductProps } from '../components/Product/Product'
import {getProducts as listProducts } from './../redux/actions/productActions'

// Components
import CartItem from "../components/CartItem/CartItem";

// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

import "./CartScreen.css";


const CartScreen: FC = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state:any) => state.cart);
  const { cartItems } = cart;

  useCallback(() => {
    dispatch(listProducts());
  }, [cartItems])

  const removeFromCartHandler = (id:string) => {
    dispatch(removeFromCart(id));
  };

   const getCartCount = () => {
     return cartItems.length;
   };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price:number, item:ProductProps) => price + item.price, 0)
      .toFixed(2);
  };

  return (
    <>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item:ProductProps) => (
                <CartItem
                key={item.product}
                item={item}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>

        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </div>
          <div>
            <button>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;