import React, { FC } from 'react';
import { Link } from "react-router-dom";
import Zappos from '../Navbar/subСmpt/Zappos'
import CartShop from './subСmpt/CartShop';
import Hamburger from './subСmpt/Hamburger';
import Input from './subСmpt/Input';


export type TNavbarPropos = {
  click: () => void
}

const Navbar: FC<TNavbarPropos> = ({ click }) => {
  return (
    <nav className='navbar'> 
      <Zappos />
       <Input />
      <CartShop />
      <Hamburger />
    </nav>
  )
}

export default Navbar;
