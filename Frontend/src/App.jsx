 import React from 'react'
import Nevbar from './components/Nevbar'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Login from './components/Login'
import {useSelector} from 'react-redux'
import Signup from './components/Signup'
import Cart from './pages/Cart'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Order from './pages/Order'
import Verify from './pages/Verify'
 
 
 export default function App() {
   const {islogin,issignup} = useSelector((store)=>store.isLogin);
  //  console.log(islogin)
   return (
   <> 
    <ToastContainer/>
      {!issignup?<Signup/> :""}
      
      {!islogin?<Login/>:""}
     <div className='overflow-x-hidden overflow-y-hidden scroll-smooth'>
       <Nevbar/>
       <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/cart' element={<Cart/>} /> 
        <Route path='/cart/order' element={<Order/>}/>
        <Route path='/verify' element={<Verify/>}/>
        

       </Routes>
      <Footer/>
     </div>
     </>
   )
 }
 