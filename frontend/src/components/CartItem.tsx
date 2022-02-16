import "./CartItem.css";
import React, { FC } from 'react';
import { ProductProps } from '../components/Product'
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import axios from "axios";
import  {addToCart} from '../redux/actions/cartActions'


interface CartProductprops{
  item:ProductProps, 
  removeHandler: (product: string)=>void, 
}
// export const addToCart = (id: any) => async (dispatch: any, getState: any) => {
//   const { data } = await axios.get(`/home/get_one/${id}`);

const CartItem: FC<CartProductprops> = ({item, removeHandler}) => {
  // console.log(item);
  console.log(typeof item.product === 'string');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToCart(item.product));
  }, [])
  
  return (
    <div  className="cartitem">
      <div className="cartitem__image">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`/product/${item.product}`} className="cartItem__name">
        <p>{item.name}</p>
      </Link>
      <p className="cartitem__price">${item.price}</p>
      <button
        className="cartItem__deleteBtn"
        onClick={() => typeof item.product === 'string' ? removeHandler(item.product || '') : undefined}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;