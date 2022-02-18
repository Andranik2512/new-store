import React, { FC } from 'react';
import { Link } from "react-router-dom";
import '../Navbar.css';

const Zappos: FC = () => {
  return (
      <div className='navbar__logo'>
        <Link className='zappos' to="/" >
          <h2 className='cart__link'>
            Zappos
          </h2>
        </Link>
      </div>
  )
  }
export default Zappos;

