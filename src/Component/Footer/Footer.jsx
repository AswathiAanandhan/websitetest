import React from 'react'
import "./footer.css"
import logo from "../../Assets/Frame 1.png"
import twitter from "../../Assets/Group (2).png"
import fb from "../../Assets/Group (3).png"
import photo from "../../Assets/Group 8.png"

export const Footer = () => {
  return (
    <div className='footer-container'>
       <div  className='footer-container-one'>
           <img src={logo} alt="" />
           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
           <div className='footer-icon-container'>
            <div className='footer-icon-container-single'>
               <img src={twitter} alt="" />
            </div>
            <div className='footer-icon-container-single'>
             <img src={fb} alt="" />
             </div>
             <div className='footer-icon-container-single'>
             <img src={photo} alt="" />
             </div>
           </div>
       </div>
       <div className='footer-container-two'>
          <p className='heading'>Company</p>
          <p>Abount</p>
          <p>Career</p>
          <p>Mobile</p>
       </div>
       <div className='footer-container-two'>
          <p className='heading'>Contact</p>
          <p>Why Travlog?</p>
          <p>Partner with us</p>
          <p>FAQ’s</p>
          <p>Blog</p>
       </div>
       <div className='footer-container-two'>
          <p className='heading'>Meet Us</p>
          <p>+00 92 1234 56789</p>
          <p>info@travlog.com</p>
          <p>Mobile</p>
       </div>
    </div>
  )
}
