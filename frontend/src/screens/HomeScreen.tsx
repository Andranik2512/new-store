import React, { FC, useCallback, useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Product from '../components/Product/Product';

import { getProducts as listProducts } from '../redux/actions/productActions'
import './HomeScreen.css'
import { ProductProps } from '../components/Product/Product'
import axios from 'axios';




const HomeScreen: FC = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state: any) => state.getProducts);
  const { products, loading, error } = getProducts;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  useCallback(() => {
    dispatch(listProducts());
  }, [products])
  return (
    <div className="homescreen">

      <div className='ff'>
        <span>1</span>
        <span className="homescreen__title">2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>

      {/* <h2 className="homescreen__title">Latest Products</h2> */}
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          console.log(products),
          products.map((product: ProductProps) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;