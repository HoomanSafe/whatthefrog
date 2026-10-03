import React, { useState } from 'react';
import { Volume2, VolumeX, Send, Twitter, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';
import { toggleMute, getMuteState, playCoinSound } from '../utils/audio';

interface NavbarProps {
  contractAddress: string;
  onCopyCA: () => void;
  copied: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ contractAddress, onCopyCA, copied }) => {
  const [muted, setMuted] = useState(getMuteState());

  const handleAudioToggle = () => {
    const nextMuted = toggleMute();
    setMuted(nextMuted);
    if (!nextMuted) {
      playCoinSound();
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0b0f0b]/90 border-b border-[#00c805]/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00c805] to-[#0b330e] p-[0.5px] shadow-[0_0_15px_rgba(0,200,5,0.4)] group-hover:scale-105 transition-transform overflow-hidden">
    <img 
      src={require('@/assets/images/WTF1.jpeg').default} // Sesuaikan path import jika menggunakan bundler lain
      alt="WhatTheFrog Logo" 
      className="w-full h-full object-contain bg-[#000000] rounded-[10.5px]" 
    />
  </div>
  <div>
    <div className="flex items-center gap-1.5">
      <span className="font-bangers text-2xl sm:text-3xl text-white tracking-wider group-hover:text-[#00c805] transition-colors">
        WhatTheFrog
      </span>
      <span className="bg-[#00c805]/15 text-[#00c805] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#00c805]/30 flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00c805] animate-ping" />
        Robinhood Chain
      </span>
    </div>
    <p className="text-[10px] font-mono text-gray-400 -mt-1 hidden sm:block">$WTF</p>
  </div>
</a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold tracking-wide">
          <a href="#about" className="text-gray-300 hover:text-[#00c805] transition-colors hover:scale-105 transform">
            About
          </a>
          <a href="#why" className="text-gray-300 hover:text-[#00c805] transition-colors hover:scale-105 transform">
            Why $WTF
          </a>
          <a href="#degenomics" className="text-gray-300 hover:text-[#00c805] transition-colors hover:scale-105 transform">
            Degenomics
          </a>
          <a href="#how-to-buy" className="text-gray-300 hover:text-[#00c805] transition-colors hover:scale-105 transform">
            How to Buy
          </a>
          <a href="#memes" className="text-gray-300 hover:text-[#00c805] transition-colors hover:scale-105 transform">
            Memes
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Audio FX Toggle */}
          <button
            onClick={handleAudioToggle}
            title={muted ? "Unmute Degen Sound FX" : "Mute Degen Sound FX"}
            className="p-2.5 rounded-xl bg-[#121c12] border border-[#00c805]/30 text-[#00c805] hover:bg-[#00c805]/20 transition-all active:scale-95"
          >
            {muted ? <VolumeX className="w-4 h-4 text-gray-500" /> : <Volume2 className="w-4 h-4 text-[#00c805] animate-pulse" />}
          </button>

          {/* Telegram Placeholder Link */}
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            title="Telegram Community (Link to be updated)"
            className="p-2.5 rounded-xl bg-[#121c12] border border-[#00c805]/30 text-gray-200 hover:text-[#00c805] hover:border-[#00c805] hover:bg-[#00c805]/10 transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
          >
            <Send className="w-4 h-4" />
          </a>

          {/* X / Twitter Placeholder Link */}
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="X / Twitter Page (Link to be updated)"
            className="p-2.5 rounded-xl bg-[#121c12] border border-[#00c805]/30 text-gray-200 hover:text-[#00c805] hover:border-[#00c805] hover:bg-[#00c805]/10 transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
          >
            <Twitter className="w-4 h-4" />
          </a>

          {/* Copy CA Action Button */}
          <button
            onClick={onCopyCA}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#00c805] text-black font-extrabold text-xs tracking-wider shadow-[0_0_15px_rgba(0,200,5,0.4)] hover:bg-[#20e025] hover:shadow-[0_0_25px_rgba(0,200,5,0.6)] transition-all active:scale-95 cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? "COPIED CA!" : "COPY CA"}</span>
          </button>

        </div>
      </div>
    </header>
  );
};
