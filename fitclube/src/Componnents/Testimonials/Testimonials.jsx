import React, { useState } from 'react';
import './Testimonials.css';
import { testimonialsData } from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const transition = { type: 'spring', duration: 3 };

    const [selected, setSelected] = useState(0);
    const tlength = testimonialsData.length; // Corrected typo here

    return (
        <div className='Testimonials' id='Testimonials'>
            <div className="left-t">
                <span>Testimonials</span>
                <span className='text-stroke'>What they</span>
                <span>say about us</span>
                <motion.span
                key={selected}
                initial={{opacity:  0, x: -100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0 , x: 100}}
                transition={transition}
                >{testimonialsData[selected].review}</motion.span>
                <span>
                    <span style={{ color: 'var(--orange)' }}>{testimonialsData[selected].name}</span>
                </span>
                - {testimonialsData[selected].status}
            </div>
            <div className="right-t">
                <motion.div
                initial={{opacity:0,x: -100}}
                transition={{...transition, duration: 2}}
                whileInView={{opacity:1, x: 0}}
                ></motion.div>
                <motion.div
                initial={{opacity:0,x: 100}}
                transition={{...transition, duration: 2}}
                whileInView={{opacity:1, x: 0}}
                ></motion.div>
                <motion.img 
                key={selected}
                initial={{opacity: 0, x: 100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -100}}
                transition={transition}
                src={testimonialsData[selected].image} alt="" />

                <div className="arrows">
                    <img
                        src={leftArrow}
                        alt=""
                        onClick={() => {
                            setSelected((prev) => (prev === 0 ? tlength - 1 : prev - 1)); // Boundary checking for left arrow
                        }}
                    />
                    <img
                        src={rightArrow}
                        alt=""
                        onClick={() => {
                            setSelected((prev) => (prev === tlength - 1 ? 0 : prev + 1)); // Boundary checking for right arrow
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
