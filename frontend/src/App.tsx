import React, { FC } from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

import Backdrop from './components/Backdrop/Backdrop';
import SideDrawer from './components/SideDrawer/SideDrawer';

import Navbar from './components/Navbar/Navbar';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';
import Pagination from './pagination/Pagination';


export const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAIL = "GET_PRODUCT_FAIL";


const App: FC = () => {

const [sideToggle, setSideToggle] = useState<boolean>(false)

useEffect(() => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDRlMmVmYTJkMDJiZTljOTgzODRiZCIsIm5hbWUiOiJBZG1pbiIsImlhdCI6MTY0NDY0ODY3NiwiZXhwIjoxNjQ0NzM1MDc2fQ.zqbRKQwvMPr0OyNRN64AWfSP4GWF3jBJuNsCDA0jqvA';
  if(!localStorage.getItem('auth_token')) {
    localStorage.setItem('auth_token', token)
  }
  
}, [])

const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(false);
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage, setPostsPerPage] = useState(10);

useEffect(() => {
  const fetchPosts = async () => {
    setLoading(true);
    const res = await axios.get('http://localhost:5001/home')
    setPosts(res.data);
    setLoading(false);
    
  }
  fetchPosts();
}, [])
console.log(posts);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber:any) => setCurrentPage(pageNumber)




  return (
    <Router>
       <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
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
