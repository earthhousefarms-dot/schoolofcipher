'use client';

import { useState } from 'react';

interface CipherDemoProps {
  message?: string;
  shift?: number;
}

export default function CipherDemo({ message = "HELLO WORLD", shift = 3 }: CipherDemoProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const caesarEncrypt = (text: string, shift: number) => {
    return text.split('').map(char => {
      if (char === ' ') return ' ';
      const code = char.charCodeAt(0) - 65;
      const shifted = (code + shift) % 26;
      return String.fromCharCode(shifted + 65);
    }).join('');
  };

  const messageChars = message.split('');
  const encryptedMessage = caesarEncrypt(message, shift);
  const encryptedChars = encryptedMessage.split('');

  const startAnimation = () => {
    setIsAnimating(true);
    setCurrentStep(0);
    
    const timer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= messageChars.length - 1) {
          clearInterval(timer);
          setTimeout(() => setIsAnimating(false), 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 800);
  };

  const getCharacterTransform = (char: string, shift: number) => {
    if (char === ' ') return { original: ' ', encrypted: ' ', shift: 0 };
    const code = char.charCodeAt(0) - 65;
    const shifted = (code + shift) % 26;
    const encryptedChar = String.fromCharCode(shifted + 65);
    return {
      original: char,
      encrypted: encryptedChar,
      shift: shift
    };
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Step-by-Step Encryption</h3>
        <p className="text-gray-600">Watch how each letter transforms with Caesar Cipher (shift {shift})</p>
      </div>

      {/* Message Display */}
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="text-center mb-4">
          <span className="text-sm text-gray-600 font-medium">ORIGINAL MESSAGE</span>
        </div>
        <div className="flex justify-center space-x-2 mb-8">
          {messageChars.map((char, index) => (
            <div
              key={`orig-${index}`}
              className={`w-12 h-12 flex items-center justify-center rounded-lg border-2 font-mono text-xl font-bold transition-all duration-300 ${
                char === ' ' 
                  ? 'bg-transparent border-transparent'
                  : index <= currentStep && isAnimating
                  ? 'bg-blue-100 border-blue-300 text-blue-800 scale-110'
                  : 'bg-white border-gray-300 text-gray-800'
              }`}
            >
              {char === ' ' ? '' : char}
            </div>
          ))}
        </div>

        {/* Transformation Arrow */}
        <div className="flex justify-center mb-8">
          <div className="text-4xl text-gray-400 animate-bounce">↓</div>
        </div>

        {/* Step-by-step transformations */}
        {isAnimating && (
          <div className="mb-8">
            <div className="text-center mb-4">
              <span className="text-sm text-gray-600 font-medium">TRANSFORMATION STEPS</span>
            </div>
            <div className="space-y-4">
              {messageChars.slice(0, currentStep + 1).map((char, index) => {
                if (char === ' ') return null;
                const transform = getCharacterTransform(char, shift);
                const originalPos = char.charCodeAt(0) - 65;
                
                return (
                  <div key={`transform-${index}`} className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                    <div className="flex items-center justify-center space-x-4 text-sm">
                      <span className="font-mono font-bold text-lg text-blue-600">{char}</span>
                      <span className="text-gray-600">({originalPos})</span>
                      <span className="text-gray-400">+{shift}</span>
                      <span className="text-gray-600">=</span>
                      <span className="text-gray-600">({(originalPos + shift) % 26})</span>
                      <span className="text-gray-400">→</span>
                      <span className="font-mono font-bold text-lg text-red-600">{transform.encrypted}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="text-center mb-4">
          <span className="text-sm text-gray-600 font-medium">ENCRYPTED MESSAGE</span>
        </div>
        <div className="flex justify-center space-x-2">
          {encryptedChars.map((char, index) => (
            <div
              key={`enc-${index}`}
              className={`w-12 h-12 flex items-center justify-center rounded-lg border-2 font-mono text-xl font-bold transition-all duration-500 ${
                char === ' ' 
                  ? 'bg-transparent border-transparent'
                  : index <= currentStep && isAnimating
                  ? 'bg-red-100 border-red-300 text-red-800 scale-110'
                  : !isAnimating
                  ? 'bg-red-50 border-red-200 text-red-700'
                  : 'bg-white border-gray-300 text-gray-400'
              }`}
            >
              {char === ' ' ? '' : (index <= currentStep || !isAnimating ? char : '?')}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="text-center">
        <button
          onClick={startAnimation}
          disabled={isAnimating}
          className={`px-6 py-3 rounded-lg font-semibold transition ${
            isAnimating
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isAnimating ? '🔄 Encrypting...' : '▶️ Start Encryption'}
        </button>
      </div>
    </div>
  );
}