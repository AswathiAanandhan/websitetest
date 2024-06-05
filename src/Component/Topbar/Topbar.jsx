import React, { useState } from 'react'
import "./topbar.css"
import logo from "../../Assets/Frame 1.png"
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
export const Topbar = () => {
 const [menuOpen,setMenuOpen]=useState(false)
  const menuClick=()=>{
    setMenuOpen(!menuOpen)
  }
  return (
    <div className="topbar-container">
    <div className="flex items-center space-x-2">
      <img src={logo} alt="Travlog" className="w-full h-8" />
    </div>
   
    <div className='topbar-p'>
        {/* <Link to="/" className="text-gray-700">Home</Link>
        <Link to="/discover" className="text-gray-700">Discover</Link>
        <Link to="/deals" className="text-gray-700">Special Deals</Link>
        <Link to="/contact" className="text-gray-700">Contact</Link> */}
        <p className="text-custom-gray text-xs">Home</p>
        <p className="text-custom-gray text-xs">Discover</p>
        <p className="text-custom-gray text-xs">Special Deals</p>
        <p className="text-custom-gray text-xs">Contact</p>
    </div>
    <nav className="flex items-center space-x-4 topbat-btn">
       <button className="text-gray-700 login-btn">Log In</button>
       <button className="bg-custom-blue text-white px-4 py-2 rounded sign-up-btn">Sign Up</button>
     
    </nav>
    {
        !menuOpen &&
        <div className='menu-icon' onClick={menuClick}>
        {/* <MenuIcon /> */}
        <i class="bi bi-list"></i>
      </div>
    }
   
    {
      menuOpen?
      <div className='menu-open-conatiner'>
         <div className='close-icon-div' onClick={menuClick}>
          {/* <CloseIcon style={{fontSize:"0.9rem"}}/> */}
          <i class="bi bi-x"></i>
         </div>
         <p className="text-custom-gray text-xs">Home</p>
         <p className="text-custom-gray text-xs">Discover</p>
         <p className="text-custom-gray text-xs">Special Deals</p>
         <p className="text-custom-gray text-xs">Contact</p>
         <nav className="flex items-center space-x-4 menu-btn">
         <button className="text-gray-700 login-btn">Log In</button>
         <button className="bg-custom-blue text-white px-4 py-2 rounded sign-up-btn">Sign Up</button>
     
         </nav>
      </div>
      :null
    }
  </div>
  )
}
