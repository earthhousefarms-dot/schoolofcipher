'use client';

import { useState } from 'react';
import CipherWheel from './CipherWheel';
import CipherDemo from './CipherDemo';

export default function InteractiveCipherTool() {
  const [activeTab, setActiveTab] = useState('wheel');
  const [message, setMessage] = useState('HELLO WORLD');
  const [shift, setShift] = useState(3);
  const [result, setResult] = useState('');

  const caesarEncrypt = (text: string, shift: number) => {
    return text.toUpperCase().split('').map(char => {
      if (char === ' ' || !/[A-Z]/.test(char)) return char;
      const code = char.charCodeAt(0) - 65;
      const shifted = (code + shift) % 26;
      return String.fromCharCode(shifted + 65);
    }).join('');
  };

  const caesarDecrypt = (text: string, shift: number) => {
    return caesarEncrypt(text, 26 - shift);
  };

  const handleEncrypt = () => {
    setResult(caesarEncrypt(message, shift));
  };

  const handleDecrypt = () => {
    setResult(caesarDecrypt(message, shift));
  };

  return (
    <div className="bg-gray-50 p-8 rounded-xl">
      <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Interactive Cipher Learning Lab
      </h3>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-lg p-1 shadow-md">
          <button
            onClick={() => setActiveTab('wheel')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'wheel'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            🎡 Cipher Wheel
          </button>
          <button
            onClick={() => setActiveTab('demo')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'demo'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            🎬 Step-by-Step Demo
          </button>
          <button
            onClick={() => setActiveTab('practice')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'practice'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            ✏️ Practice Tool
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'wheel' && (
        <div className="text-center">
          <CipherWheel shift={shift} onShiftChange={setShift} />
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
            <h4 className="text-lg font-bold text-gray-800 mb-4">Quick Test</h4>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-600 mb-2">Try encoding &apos;A&apos;:</div>
                <div className="text-2xl font-mono">
                  A → <span className="text-red-600 font-bold">
                    {String.fromCharCode(((0 + shift) % 26) + 65)}
                  </span>
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                Rotation: {shift} positions clockwise
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'demo' && (
        <div>
          <CipherDemo message={message} shift={shift} />
          <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-bold text-gray-800 mb-4">Customize Demo</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message to encrypt:
                </label>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value.toUpperCase().replace(/[^A-Z ]/g, ''))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono"
                  placeholder="ENTER YOUR MESSAGE"
                  maxLength={20}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Shift value: {shift}
                </label>
                <input
                  type="range"
                  min="1"
                  max="25"
                  value={shift}
                  onChange={(e) => setShift(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1</span>
                  <span>25</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'practice' && (
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">Cipher Practice Tool</h4>
          
          <div className="space-y-6">
            {/* Input Section */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Message:
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value.toUpperCase())}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-lg"
                rows={3}
                placeholder="TYPE YOUR SECRET MESSAGE HERE..."
              />
            </div>

            {/* Shift Control */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Caesar Shift: {shift}
              </label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShift(Math.max(1, shift - 1))}
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition font-bold"
                >
                  −
                </button>
                <input
                  type="range"
                  min="1"
                  max="25"
                  value={shift}
                  onChange={(e) => setShift(Number(e.target.value))}
                  className="flex-1 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <button
                  onClick={() => setShift(Math.min(25, shift + 1))}
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleEncrypt}
                className="flex-1 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition"
              >
                🔒 Encrypt Message
              </button>
              <button
                onClick={handleDecrypt}
                className="flex-1 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition"
              >
                🔓 Decrypt Message
              </button>
            </div>

            {/* Result Display */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Result:
              </label>
              <div className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg min-h-[100px] font-mono text-lg">
                {result || 'Your encrypted/decrypted message will appear here...'}
              </div>
            </div>

            {/* Educational Info */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h5 className="font-semibold text-blue-800 mb-2">💡 Did you know?</h5>
              <p className="text-blue-700 text-sm">
                The Caesar cipher was used by Julius Caesar to send secret military messages. 
                Each letter is shifted by a fixed number of positions in the alphabet. 
                With shift {shift}, &apos;A&apos; becomes &apos;{String.fromCharCode(((0 + shift) % 26) + 65)}&apos;.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}