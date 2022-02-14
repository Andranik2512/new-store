import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

interface Productprops{
  imageUrl:string, 
  description:string, 
  price:number, 
  name:string, 
  productId:number;
}

{/* <Link to={`/product/${productId}`}
</Link> */}
const Product: FC<Productprops> = ({imageUrl, description, price, name, productId}) => {
  return (
    
    <Link to={`/product/${productId}`} className="product">
      <div>
        
      </div>
    <img src={imageUrl} alt={name}/>

    <div className="product__info">
      <p className="info__name">{name}</p>

      <p className="info__description">{description.substring(0, 100)}...</p>

      <p className="info__price">$ {price}</p>

      <Link to={"/cart"} className="info__button">
      Add to cart
      </Link>
    </div>
  </Link>
  )
};

export default Product;