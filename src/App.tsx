import React from 'react';
import { Download, MessageCircle } from 'lucide-react';
import { FloatingHeads } from './components/FloatingHeads';
import { WaveEffect } from './components/WaveEffect';

function App() {
  return (
    <div className="min-h-screen bg-[#0D0A12] text-white relative overflow-hidden">
      <FloatingHeads />
      
      {/* Header */}
      <header className="p-4 sm:p-6">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-300">
              Breached
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <a 
              href="https://discord.gg/shrimps" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#5865F2] hover:bg-[#4752C4] px-4 sm:px-6 py-2 rounded-full font-semibold transition-all hover:scale-105 flex items-center gap-2 text-sm sm:text-base"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              Discord
            </a>
            <button className="bg-purple-600 hover:bg-purple-700 px-4 sm:px-6 py-2 rounded-full font-semibold flex items-center gap-2 transition-all hover:scale-105 text-sm sm:text-base">
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              Download
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 mt-8 sm:mt-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
          {/* Left side - Image */}
          <div className="lg:w-1/2">
            <img 
              src="https://files.catbox.moe/v655ob.png" 
              alt="Purple Gorilla"
              className="w-full max-w-[400px] sm:max-w-[600px] mx-auto transform hover:scale-105 transition-transform duration-500 gorilla-glow"
            />
          </div>

          {/* Right side - Text */}
          <div className="lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              Why pay for a menu when ours is free?
            </h1>
            <p className="text-lg sm:text-xl text-gray-400">
              One menu, endless possibilities. Everything you need: powerful, undetected, and built to last.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 px-6 sm:px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all hover:scale-105 mx-auto lg:mx-0">
              <Download className="w-5 h-5" />
              Download v1.0.0
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-8 py-16 sm:py-24">
          <div className="feature-box bg-[#1A1625] p-6 sm:p-8 rounded-lg space-y-2 hover:bg-[#1E1A2C] transition-colors" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl sm:text-2xl font-bold">Optimization</h3>
            <p className="text-sm sm:text-base text-gray-400">This menu isn't made by literal children. No frame drops, no bs.</p>
          </div>
          
          <div className="feature-box bg-[#1A1625] p-6 sm:p-8 rounded-lg space-y-2 hover:bg-[#1E1A2C] transition-colors" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl sm:text-2xl font-bold">Dependable Features</h3>
            <p className="text-sm sm:text-base text-gray-400">No updates ever needed. Our mod updates itself automatically whenever a new update is detected.</p>
          </div>

          <div className="feature-box bg-[#1A1625] p-6 sm:p-8 rounded-lg space-y-2 hover:bg-[#1E1A2C] transition-colors" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl sm:text-2xl font-bold">Stealth & Evasion</h3>
            <p className="text-sm sm:text-base text-gray-400">Getting banned is a thing of the past, with our menu every feature is fully undetected.</p>
          </div>

          <div className="feature-box bg-[#1A1625] p-6 sm:p-8 rounded-lg space-y-2 hover:bg-[#1E1A2C] transition-colors" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl sm:text-2xl font-bold">Over Powered</h3>
            <p className="text-sm sm:text-base text-gray-400">Bend everything to your will with the most game breaking, undetected features.</p>
          </div>
        </div>

        {/* Exclusive Features Section */}
        <div className="py-16 sm:py-24 mb-24 sm:mb-32">
          <h2 className="text-4xl sm:text-6xl font-bold text-center mb-3 sm:mb-4 glow-text">Exclusive Features</h2>
          <p className="text-lg sm:text-xl text-gray-400 text-center mb-12 sm:mb-16">Unique to the Breached users.</p>
          
          {/* Configuration Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
            <div className="lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left">
              <h2 className="text-3xl sm:text-5xl font-bold glow-text">Configuration</h2>
              <p className="text-lg sm:text-xl text-gray-400">
                Browse trusted configs made by the community to match your playstyle
              </p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">✓</span>
                  <span className="text-gray-300 text-sm sm:text-base">Find the best configs based on reviews.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">✓</span>
                  <span className="text-gray-300 text-sm sm:text-base">Upload your own configs to the community.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">✓</span>
                  <span className="text-gray-300 text-sm sm:text-base">Privately share a config with close friends.</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://files.catbox.moe/ehhk84.png" 
                alt="CCMV2 Monkey"
                className="w-full max-w-[400px] sm:max-w-[600px] mx-auto transform hover:scale-105 transition-transform duration-500 gorilla-glow"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 relative">
        <WaveEffect />
        <div className="container mx-auto px-4 text-center text-gray-400 relative z-10">
          <p className="text-sm sm:text-base">© 2025 Breached. Not affiliated with Gorilla Tag.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;