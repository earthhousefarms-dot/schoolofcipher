'use client';

import { useState } from 'react';

export default function Home() {
  const [activecipher, setActiveCipher] = useState('caesar');

  const ciphers = [
    { id: 'caesar', name: 'Caesar Cipher', description: 'The classic shift cipher used by Julius Caesar' },
    { id: 'atbash', name: 'Atbash Cipher', description: 'Hebrew cipher that reverses the alphabet' },
    { id: 'vigenere', name: 'Vigenère Cipher', description: 'Polyalphabetic substitution using a keyword' },
    { id: 'playfair', name: 'Playfair Cipher', description: 'Digraph substitution cipher' },
    { id: 'rail', name: 'Rail Fence Cipher', description: 'Transposition cipher using zigzag pattern' },
    { id: 'polybius', name: 'Polybius Square', description: 'Ancient Greek cipher using a 5x5 grid' },
    { id: 'morse', name: 'Morse Code', description: 'Dots and dashes communication system' },
    { id: 'rot13', name: 'ROT13', description: 'Caesar cipher with a shift of 13' },
    { id: 'affine', name: 'Affine Cipher', description: 'Mathematical cipher using modular arithmetic' },
    { id: 'beaufort', name: 'Beaufort Cipher', description: 'Reciprocal Vigenère cipher' },
    { id: 'substitution', name: 'Substitution Cipher', description: 'Replace each letter with another' },
    { id: 'bacon', name: 'Bacon Cipher', description: 'Binary encoding using two typefaces' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50 px-6 py-4 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-2xl">🔐</div>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              School of Cipher
            </div>
          </div>
          <div className="hidden md:flex gap-6 text-gray-300">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#ciphers" className="hover:text-cyan-400 transition">Ciphers</a>
            <a href="#learn" className="hover:text-cyan-400 transition">Learn</a>
            <a href="#tools" className="hover:text-cyan-400 transition">Tools</a>
            <a href="#blog" className="hover:text-cyan-400 transition">Blog</a>
            <a href="#competition" className="hover:text-cyan-400 transition">Competition</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Unlock the Secrets
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Master the Art of Cryptography
            </p>
            <div className="text-lg text-purple-300 italic max-w-3xl mx-auto">
              <p className="mb-2">Whispers at night, secrets we confide</p>
              <p className="mb-2">Hidden truths, silently they glide</p>
              <p className="mb-2">A hush in the moonlight, mysteries collide</p>
              <p>In the world of ciphers, knowledge is our guide</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 p-8 rounded-2xl backdrop-blur-lg border border-purple-500/20">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-2">Brain Development</h3>
              <p className="text-gray-300">Cryptography improves reasoning and logical ability</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 p-8 rounded-2xl backdrop-blur-lg border border-purple-500/20">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-white mb-2">24+ Ciphers</h3>
              <p className="text-gray-300">Learn from Caesar to modern encryption techniques</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 p-8 rounded-2xl backdrop-blur-lg border border-purple-500/20">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-white mb-2">Competitions</h3>
              <p className="text-gray-300">Test your skills in cryptography challenges</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ciphers Section */}
      <section id="ciphers" className="py-20 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
            Explore Ciphers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ciphers.map((cipher) => (
              <div
                key={cipher.id}
                onClick={() => setActiveCipher(cipher.id)}
                className={`p-6 rounded-xl cursor-pointer transition-all transform hover:scale-105 ${
                  activecipher === cipher.id
                    ? 'bg-gradient-to-br from-purple-600 to-cyan-600 shadow-xl shadow-purple-500/30'
                    : 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-purple-900/50 hover:to-cyan-900/50'
                }`}
              >
                <h3 className="text-xl font-bold text-white mb-2">{cipher.name}</h3>
                <p className="text-gray-300 text-sm">{cipher.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Cipher Tool */}
      <section id="tools" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Try It Yourself
          </h2>
          
          <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-8 rounded-2xl backdrop-blur-lg border border-purple-500/20">
            <div className="mb-6">
              <label className="block text-white mb-2">Enter your message:</label>
              <textarea
                className="w-full p-4 bg-black/50 text-white rounded-lg border border-purple-500/30 focus:border-cyan-400 focus:outline-none"
                rows={4}
                placeholder="Type your secret message here..."
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-white mb-2">Choose cipher:</label>
              <select className="w-full p-4 bg-black/50 text-white rounded-lg border border-purple-500/30 focus:border-cyan-400 focus:outline-none">
                {ciphers.map((cipher) => (
                  <option key={cipher.id} value={cipher.id}>{cipher.name}</option>
                ))}
              </select>
            </div>
            
            <div className="flex gap-4">
              <button className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold rounded-lg hover:from-purple-700 hover:to-purple-900 transition">
                Encrypt
              </button>
              <button className="flex-1 py-3 bg-gradient-to-r from-cyan-600 to-cyan-800 text-white font-bold rounded-lg hover:from-cyan-700 hover:to-cyan-900 transition">
                Decrypt
              </button>
            </div>
            
            <div className="mt-6">
              <label className="block text-white mb-2">Result:</label>
              <div className="p-4 bg-black/50 text-cyan-400 rounded-lg border border-purple-500/30 min-h-[100px] font-mono">
                Your encrypted/decrypted message will appear here...
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn Section */}
      <section id="learn" className="py-20 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
            Start Learning
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8 rounded-2xl backdrop-blur-lg border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">📚 Beginner Course</h3>
              <ul className="text-gray-300 space-y-2">
                <li>✓ Introduction to Cryptography</li>
                <li>✓ Basic Substitution Ciphers</li>
                <li>✓ Transposition Techniques</li>
                <li>✓ Frequency Analysis</li>
                <li>✓ Historical Ciphers</li>
              </ul>
              <button className="mt-6 w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-pink-700 transition">
                Start Learning
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 p-8 rounded-2xl backdrop-blur-lg border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">🚀 Advanced Course</h3>
              <ul className="text-gray-300 space-y-2">
                <li>✓ Modern Cryptography</li>
                <li>✓ Public Key Encryption</li>
                <li>✓ Hash Functions</li>
                <li>✓ Digital Signatures</li>
                <li>✓ Blockchain & Crypto</li>
              </ul>
              <button className="mt-6 w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition">
                Explore Advanced
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black/50 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-4">School of Cipher</h4>
              <p className="text-gray-400">Unlocking minds through cryptography</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Learn</h4>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-cyan-400">Tutorials</a></li>
                <li><a href="#" className="hover:text-cyan-400">Courses</a></li>
                <li><a href="#" className="hover:text-cyan-400">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Community</h4>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-cyan-400">Blog</a></li>
                <li><a href="#" className="hover:text-cyan-400">Competition</a></li>
                <li><a href="#" className="hover:text-cyan-400">Forum</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="text-2xl hover:text-cyan-400">📧</a>
                <a href="#" className="text-2xl hover:text-cyan-400">📱</a>
                <a href="#" className="text-2xl hover:text-cyan-400">🐦</a>
                <a href="#" className="text-2xl hover:text-cyan-400">📹</a>
              </div>
              <p className="text-gray-400 mt-4">info@schoolofcipher.com</p>
            </div>
          </div>
          
          <div className="text-center text-gray-500 pt-8 border-t border-purple-500/20">
            <p>&copy; 2024 School of Cipher. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}