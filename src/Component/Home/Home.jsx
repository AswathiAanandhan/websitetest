import React from 'react'
import "./home.css"
import layer from "../../Assets/layer.png"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import image from "../../Assets/Frame 15.png"
import userImg from "../../Assets/Frame 17.png"
import shareImg from "../../Assets/Frame 16.png"
import workImg from "../../Assets/work 1.png"
import watchdemo from "../../Assets/play-circle.5 1.png"
import one from "../../Assets/Group.png"
import two from "../../Assets/Group 2.png"
import three from "../../Assets/Group (1).png"
import four from "../../Assets/Group 3.png"
import five from "../../Assets/Group 9235.png"
import { motion } from "framer-motion";
import { Serviced } from './Serviced';
import { TopDestination } from './TopDestination';
import { TravalPoint } from './TravalPoint';
import { KeyFeatures } from './KeyFeatures';

export const Home = () => {
  return (
    <div className='home-main-conatiner'>
       <div className='flex my-4 home-first'>
          <div className='home-first-left'>
              <button className='explore-btn'>Explore the world <img className="work-img" src={workImg} alt="" /></button>
              <h1  className='travel-h1'>Travel <span className='text-custom-pink'>top destination</span> of the world</h1>
              <p className='content'>We always make our customer happy by providing as many choices as possible </p>
               <div className='btn-container'>
                <button className="bg-custom-blue text-white px-4 py-2 rounded sign-up-btn" >Get Started</button>
                <button className="bg-white text-black px-2 py-2 rounded sign-up-btn"> <img className="work-img"  src={watchdemo} alt="" />Watch Demo</button>
               </div>
          </div>
          <div className='home-first-right'>
            <div className='layer-image'>
               <LazyLoadImage
                alt={layer.alt}
                height={layer.height}
                src={layer} 
                width={layer.width} />
            </div>
            <div className='image-group'>
            <LazyLoadImage
                alt={image.alt}
                height={image.height}
                src={image} 
                width="65% "/>
            </div>
            {/* <div className='image-share'>
            <LazyLoadImage
                alt={userImg.alt}
                height={userImg.height}
                src={userImg} 
                width="55% "/>
            </div>
            <div className='image-share share'>
            <LazyLoadImage
                alt={shareImg.alt}
                height={shareImg.height}
                src={shareImg} 
                width="55% "/>
            </div> */}
           
          </div>
       </div>
       <div className='home-second'>
          <motion.div 
            className='home-second-img'
            whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
            >
              <LazyLoadImage
                alt={one.alt}
                height={one.height}
                src={one} 
                width="100%" />
          </motion.div>
              
          <motion.div 
          className='home-second-img'
          whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
          >
               <LazyLoadImage
                alt={two.alt}
                height={two.height}
                src={two} 
                width="100%"
                />
            </motion.div>
             <motion.div 
             className='home-second-img'
             whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
             >
               <LazyLoadImage
                alt={three.alt}
                height={three.height}
                src={three} 
                width="100%"/>
             </motion.div>
              <motion.div 
              className='home-second-img'
              whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
              >
                <LazyLoadImage
                alt={four.alt}
                height={four.height}
                src={four} 
                width="100%" />

              </motion.div>
                <motion.div 
                className='home-second-img'
                whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
                >
                <LazyLoadImage
                alt={five.alt}
                height={five.height}
                src={five} 
                width="100%" />
                </motion.div>
               
              
       </div>

       <Serviced/>
       {/* <TopDestination/>
       <TravalPoint/>
       <KeyFeatures/> */}
    </div>
  )
}
