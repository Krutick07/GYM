import React, { useState, useEffect, useRef } from 'react';
import './DoorAnimation.css';
import Doorleft from '../Doorleft';
import Doorright from '../../Door-right/Doorright';

const DoorAnimation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDoorAnimationComplete, setIsDoorAnimationComplete] = useState(false);
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);

  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures it runs once on mount

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const maxScroll = window.innerHeight; // Maximum scroll for doors to open fully
      const currentScroll = window.scrollY;
      const scrollPercentage = Math.min(currentScroll / maxScroll, 1); // Limit between 0 and 1
      setScrollPosition(scrollPercentage);

      if (currentScroll < lastScrollY) {
        const heroSection = document.getElementById('Hero');
        const heroRect = heroSection?.getBoundingClientRect();
        if (heroRect && heroRect.top < window.innerHeight && heroRect.bottom > 0) {
          const reverseIntensity = 1 - scrollPercentage;

          if (leftDoorRef.current && rightDoorRef.current) {
            leftDoorRef.current.style.transform = `translateX(${-100 * reverseIntensity}%)`;
            rightDoorRef.current.style.transform = `translateX(${100 * reverseIntensity}%)`;
          }
        }
      }

      if (scrollPercentage === 1) {
        setIsDoorAnimationComplete(true);
      }

      lastScrollY = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {!isDoorAnimationComplete && (
        <div className="door-wrapper">
          <div
            className="door door-left"
            ref={leftDoorRef}
            style={{
              transform: `translateX(${-100 * scrollPosition}%)`,
            }}
          >
            <div className="element-left">
              <Doorleft />
            </div>
          </div>
          <div
            className="door door-right"
            ref={rightDoorRef}
            style={{
              transform: `translateX(${100 * scrollPosition}%)`,
            }}
          >
            <div className="element-right">
              <Doorright />
            </div>
          </div>
        </div>
      )}

     
    </>
  );
};

export default DoorAnimation;
