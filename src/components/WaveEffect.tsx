import React from 'react';

export function WaveEffect() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[100px] sm:h-[150px] overflow-hidden">
      <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
        <defs>
          <path id="gentle-wave" 
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="wave-parallax">
          <use href="#gentle-wave" x="48" y="0" className="wave1" />
          <use href="#gentle-wave" x="48" y="3" className="wave2" />
          <use href="#gentle-wave" x="48" y="5" className="wave3" />
          <use href="#gentle-wave" x="48" y="7" className="wave4" />
        </g>
      </svg>
    </div>
  );
}