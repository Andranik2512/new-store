import React, { FC } from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

import './App.css';


export const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAIL = "GET_PRODUCT_FAIL";


const App: FC = () => {

const [sideToggle, setSideToggle] = useState(false)

useEffect(() => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDRlMmVmYTJkMDJiZTljOTgzODRiZCIsIm5hbWUiOiJBZG1pbiIsImlhdCI6MTY0NDY0ODY3NiwiZXhwIjoxNjQ0NzM1MDc2fQ.zqbRKQwvMPr0OyNRN64AWfSP4GWF3jBJuNsCDA0jqvA';
  if(!localStorage.getItem('auth_token')) {
    localStorage.setItem('auth_token', token)
  }
  
}, [])

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen onClick={() => {}}/>} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App;;
