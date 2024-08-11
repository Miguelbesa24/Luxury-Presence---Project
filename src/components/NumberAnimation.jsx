// NumberAnimation.js
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const NumberAnimation = ({ number }) => {
  const [displayNumber, setDisplayNumber] = useState(1);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1,    // Trigger when 10% of the element is in view
  });

  useEffect(() => {
    if (inView) {
      let start = 1;
      const end = number;
      const duration = 1000; // Duration in milliseconds
      const incrementTime = 50; // Increment time in milliseconds
      const totalSteps = duration / incrementTime;
      const increment = (end - start) / totalSteps;

      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayNumber(end);
          clearInterval(interval);
        } else {
          setDisplayNumber(Math.floor(start));
        }
      }, incrementTime);
    }
  }, [inView, number]);

  return (
    <div ref={ref} className="font-serif text-4xl md:text-6xl py-2">
      {displayNumber}
    </div>
  );
};

export default NumberAnimation;
