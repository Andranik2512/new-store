import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './SideDrawer.css'

export type TSideDrawerPropos = {
  show: boolean 
  click: ()=>void
}



const SideDrawer: FC<TSideDrawerPropos> = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }
  return (
    <div className={sideDrawerClass.join("")}>
      <ul className='sidedrawer__links' onClick={click}>
        <li>
          <Link to='/cart'>
            <i className='fas fa-shopping-cart'></i>
            <span>
              Cart {"0"}
              <span className='sidebrawer__cartbadge'>0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideDrawer;


