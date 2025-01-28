'use client'

import React, {useEffect, useRef} from 'react';
import {slides} from '@/shared/data-slider';

export function touchSlide(index: number, setIndex) {
  const startX = useRef(0);
  const endX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
      startX.current = e.touches[0].clientX;
      console.log(startX)
  };

  const handleTouchMove = (e: React.TouchEvent) => {
      endX.current = e.touches[0].clientX;

      console.log(endX)
  };

  const handleTouchEnd = () => {
      const distance = startX.current - endX.current;
      console.log(distance)
      if (distance > 50) {
          // Swipe left
          setIndex((prevIndex) => Math.min(prevIndex + 1, slides.length - 1));
      } else if (distance < -50) {
          // Swipe right
          setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      }
  };

  useEffect(() => {
      setIndex(index);
  }, [index]);

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  }

}
