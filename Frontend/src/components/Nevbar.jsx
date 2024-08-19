import React, { useContext, useState } from 'react'
import logo from '../assets/admin_assets/logo.png'
import search from '../assets/frontend_assets/search_icon.png'
import bag from '../assets/frontend_assets/bag_icon.png'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../Store/loginSlice';
import { assets } from '../assets/frontend_assets/assets';
import { StoreContext } from '../context/StoreContext';

export default function Nevbar() {
  const [menu,setMenu] = useState("home");
  const dispatch = useDispatch()
  const nevigate = useNavigate()
  const { items } = useSelector((store) => store.CartItem); 
  // const {islogout} = useSelector((store)=>store.isLogin);
  const {token,setToken} = useContext(StoreContext)

  const logouthandle =()=>{
    localStorage.removeItem("token")
    // dispatch(loginAction.toggleLogout())
    setToken("")
    nevigate("/")
  }
  
  return (
    <div className="navbar max-w-full md:px-28 mt-3 scroll-smooth  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <a href="/"  onClick={()=>setMenu("home")} className={menu==="home"?'nev_active':""}> Home</a>
      <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?'nev_active':""}>Menu </a>
      <a href='#appDownload' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?'nev_active':""}>Mobile-app </a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?'nev_active':""}>Contact us </a>
      </ul>
    </div>
    <Link to='/' className='mx-5'> <img   src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal  gap-x-3 ">
    <a href="/" onClick={()=>setMenu("home")} className={`text-lg ${menu==="home"?'nev_active':""}`}>Home</a>
    <a href='#explore-menu' onClick={()=>setMenu("menu")} className={`text-lg ${menu==="menu"?'nev_active':""}`}>Menu </a>
    <a href='#appDownload' onClick={()=>setMenu("mobile-app")} className={` text-lg ${menu==="mobile-app"?'nev_active':""}`}>Mobile-app </a>
    <a href='#footer' onClick={()=>setMenu("contact-us")} className={`text-lg ${menu==="contact-us"?'nev_active':""}`}>Contact us </a>
    </ul>
  </div>
  <div className="navbar-end space-x-5 ">
    <Link  className='invisible md:visible'><img src={search} alt="" /></Link>
    <div className="relative inline-block">
      <Link to="/cart">
        <img src={bag} alt="Cart" className="w-8 h-8" />
        {items.length?  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
        
        </span>:""}
      </Link>
    </div>
   
{
  token.length===0?
  <Link onClick={()=>{dispatch(loginAction.toggleLogin())}} className="btn bg-slate-600 ">Login</Link>:
  <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="m-1 rounded-full">
    <img  src={assets.profile_icon} alt="" />
  </div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a> <img src={assets.bag_icon} alt="" />
         <p>Orders</p>
        </a>
    </li>
    <li onClick={logouthandle} ><a><img src={assets.logout_icon} alt="" /><p>Logout</p></a></li>
  </ul>
   </div>
}
    
  
  </div>
</div>  
  )
}
