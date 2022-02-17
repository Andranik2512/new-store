import React, { FC } from 'react';
import './Backdrop.css'

export type TBackdropPropos = {
  show: boolean | any,
  click: ()=>void
}

const Backdrop: FC<TBackdropPropos> = ({show, click}) => {
  return (
    show && <div className='backdrop' onClick={click}></div>
  )
};

export default Backdrop;

