import React, { FC } from 'react';
import { Link } from "react-router-dom";
import '../Navbar.css';

const CartShop: FC = () => {
  return (
    <ul className='navbar__links'>
    <li>
      <Link to="/cart" className='cart__link'>
        <i className='fas fa-shoping-cart'></i>
        <span>
          Cart
        </span>
      </Link>
    </li>
    <li>
      <Link to="/" >
        Shop
      </Link>
    </li>
  </ul>
  )
  }
export default CartShop;