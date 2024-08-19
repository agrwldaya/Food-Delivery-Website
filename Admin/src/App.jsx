 import React from 'react'
import Nevbar from './components/Nevbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './Pages/Add'
import List from './Pages/List'
import Orders from './Pages/Orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
 export default function App() {
  const url = ''
   return (
     <div>
          <ToastContainer/>
          <Nevbar/>
          <hr className=' w-full bg-black ' />
          <div className='md:flex'>
          <Sidebar/>
          <Routes>
            <Route path='/add' element= {<Add/>}/> 
            <Route path='/list' element= {<List/>} /> 
            <Route path='/orders' element= {<Orders/>} /> 
          </Routes>
          </div>
          
     </div>
   )
 }

 