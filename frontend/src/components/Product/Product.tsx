import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';

import './Product.css'

export type ProductProps = {
  imageUrl:string, 
  description:string, 
  price:number, 
  name:string, 
  productId?:number;
  product?:string;
  _id?:number;
}


const Product: FC<ProductProps> = ({imageUrl, description, price, name, productId}) => {
  const dispatch = useDispatch();

  const handleClick = (e:React.MouseEvent<HTMLButtonElement> ) => {
    e.preventDefault()
    dispatch(addToCart(productId));

  }

  return (
    <Link to={`/product/${productId}`} className="product">
    <img src={imageUrl} alt={name}/>
    
    <div className="product__info">
      <p className="info__name">{name}</p>
      <p className="info__description">{description.substring(0, 100)}...</p>
      <p className="info__price">$ {price}</p>
      <button
        className="info__button"
        onClick={handleClick}
      >
        Add to cart
      </button>
    </div>
  </Link>
  )
};

export default Product;