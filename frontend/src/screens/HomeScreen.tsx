import React, { FC, useCallback } from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch  } from 'react-redux';

import Product from '../components/Product/Product';

import {getProducts as listProducts} from '../redux/actions/productActions'
import './HomeScreen.css'
import {ProductProps} from '../components/Product/Product'

const HomeScreen: FC= () => {

  const dispatch = useDispatch();

  const getProducts = useSelector((state:any) => state.getProducts);
  const { products, loading, error } = getProducts;
  

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  useCallback(() => {
    dispatch(listProducts());
  }, [products])

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          console.log(products),
          products.map((product:ProductProps) => (
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