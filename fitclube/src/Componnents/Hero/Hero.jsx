import React from 'react';
import './Hero.css';
import { Header } from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';
import { motion } from 'framer-motion';
import CountUp from 'react-countup'

export const Hero = () => {
  const transition = { type: 'spring', duration: 3 };
  const mobile = window.innerWidth<=768 ? true:false;

  return (
    <div className='Hero' id='Hero'>
      <div className="blur h-blur"></div>
      <div className="left-h">
        <Header />
        <div className="best-ad">
          <motion.div
            initial={{ left: mobile? "165px": "238px" }}
            whileInView={{ left: '8px' }}  
            transition={{...transition , type: 'tween'}}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className='text-stroke'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body 
              and live up your life to fullest
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div 
        initial={{right: '-1rem'}}
        whileInView={{right: '4rem'}}
        transition={transition}
        className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span><span>116 bpm</span>
        </motion.div>
        <img src={hero_image} className='hero_image' alt="" />
        <motion.img 
        initial={{right: '11rem'}}
        whileInView={{right: '22rem'}}
        transition={transition}
        src={hero_image_back} className='hero_image_back' alt="" />
        <motion.div 
        initial={{right: '37rem'}}
        whileInView={{right: '28rem'}}
        transition={transition}
        className="calories">
          <img src={calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
