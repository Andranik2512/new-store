import React, { FC } from 'react';
import { Link } from "react-router-dom";
import '../Navbar.css';

export type HamburgerPropos = {
    click?: () => void
  }

const Hamburger: FC<HamburgerPropos> = ({click}) => {
  return (
    <div className='hamburger__menu' onClick={click}>
    <div></div>
    <div></div>
    <div></div>
  </div>
  )
  }
export default Hamburger;
