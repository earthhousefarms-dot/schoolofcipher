'use client';

import { useState, useEffect } from 'react';

interface CipherWheelProps {
  shift: number;
  onShiftChange: (shift: number) => void;
}

export default function CipherWheel({ shift, onShiftChange }: CipherWheelProps) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    setRotation((shift * 360) / 26);
  }, [shift]);

  const getPositionStyles = (index: number, radius: number, total: number) => {
    const angle = (index * 360) / total - 90; // Start from top
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    return {
      transform: `translate(${x}px, ${y}px)`,
    };
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <h3 className="text-2xl font-bold text-gray-800">Caesar Cipher Wheel</h3>
      
      {/* Wheel Container */}
      <div className="relative w-80 h-80">
        {/* Outer Ring (Original Alphabet) */}
        <div className="absolute inset-0 rounded-full border-4 border-blue-300">
          {alphabet.map((letter, index) => (
            <div
              key={`outer-${letter}`}
              className="absolute w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full text-blue-800 font-bold text-sm"
              style={{
                ...getPositionStyles(index, 130, 26),
                left: '50%',
                top: '50%',
                marginLeft: '-16px',
                marginTop: '-16px',
              }}
            >
              {letter}
            </div>
          ))}
        </div>

        {/* Inner Ring (Shifted Alphabet) */}
        <div 
          className="absolute inset-8 rounded-full border-4 border-red-300 transition-transform duration-500 ease-in-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {alphabet.map((letter, index) => (
            <div
              key={`inner-${letter}`}
              className="absolute w-8 h-8 flex items-center justify-center bg-red-100 rounded-full text-red-800 font-bold text-sm"
              style={{
                ...getPositionStyles(index, 98, 26),
                left: '50%',
                top: '50%',
                marginLeft: '-16px',
                marginTop: '-16px',
              }}
            >
              {letter}
            </div>
          ))}
        </div>

        {/* Center Controls */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white rounded-full p-4 shadow-lg border-2 border-gray-300">
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-2">Shift</div>
              <div className="text-2xl font-bold text-gray-800">{shift}</div>
              <div className="flex space-x-2 mt-2">
                <button
                  onClick={() => onShiftChange(Math.max(1, shift - 1))}
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
                >
                  −
                </button>
                <button
                  onClick={() => onShiftChange(Math.min(25, shift + 1))}
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow Indicator */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-yellow-500"></div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex space-x-6 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-blue-100 border border-blue-300 rounded"></div>
          <span>Original Letter</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-red-100 border border-red-300 rounded"></div>
          <span>Encrypted Letter</span>
        </div>
      </div>
    </div>
  );
}