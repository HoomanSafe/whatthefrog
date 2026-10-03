import React, { useState } from 'react';
import { Copy, Check, Rocket, ArrowRight, ExternalLink, ShieldAlert, Sparkles, Send, Twitter } from 'lucide-react';
import { ROBIN_DEGEN_IMAGES } from '../data/images';
import { playBowShootSound, playRocketLaunchSound, playCoinSound } from '../utils/audio';

interface HeroProps {
  contractAddress: string;
  onCopyCA: () => void;
  copied: boolean;
  onTriggerConfetti: () => void;
}

export const Hero: React.FC<HeroProps> = ({ contractAddress, onCopyCA, copied, onTriggerConfetti }) => {
  const [isShooting, setIsShooting] = useState(false);

  const handleBowClick = () => {
    setIsShooting(true);
    playBowShootSound();
    onTriggerConfetti();
    setTimeout(() => setIsShooting(false), 1200);
  };

  const handleBuyClick = () => {
    playRocketLaunchSound();
    onTriggerConfetti();
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center py-12 lg:py-20 overflow-hidden bg-chart-grid">
      
      {/* Background Neon Spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00c805]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#eab308]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & CTA Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#122413] border border-[#00c805]/40 text-[#00c805] text-xs sm:text-sm font-extrabold tracking-wide shadow-[0_0_20px_rgba(0,200,5,0.2)] animate-pulse">
              <span className="text-lg">🍃</span>
              <span>BUILT ON ROBINHOOD CHAIN</span>
              <span className="w-2 h-2 rounded-full bg-[#00c805] animate-ping" />
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="font-bangers text-6xl sm:text-7xl lg:text-8xl tracking-wider text-white leading-none uppercase">
                Welcome To <br className="hidden sm:inline" />
                <span className="text-[#00c805] text-glow inline-block hover:scale-105 transition-transform duration-300">
                  WhatTheFrog
                </span>
              </h1>
              <p className="font-marker text-yellow-400 text-xl sm:text-2xl mt-3 text-glow-yellow">
                $WTF — Where Memes Meet Moon Missions. 🚀🏹💚
              </p>
            </div>

            {/* Narrative Subtitle */}
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-outfit">
              Stealing from the rich, sending it to the moon. Built for a new generation of degens on <strong className="text-white">Robinhood Chain</strong>. No suits. No bankers. No permission. Just pure memes, momentum, and conviction.
            </p>

            {/* Contract Address Card */}
            <div className="p-4 rounded-2xl bg-[#0f170f]/90 border border-[#00c805]/30 backdrop-blur-md shadow-[0_0_25px_rgba(0,200,5,0.15)] max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-2">
                <span className="flex items-center gap-1.5 text-[#00c805] font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  CONTRACT ADDRESS (ROBINHOOD CHAIN)
                </span>
                <span className="bg-yellow-500/20 text-yellow-400 text-[10px] px-2 py-0.5 rounded border border-yellow-500/30 font-sans font-bold">
                  TO BE ADDED LATER
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="w-full bg-[#080d08] border border-gray-800 rounded-xl px-3.5 py-2.5 font-mono text-xs sm:text-sm text-gray-300 truncate select-all">
                  {contractAddress}
                </div>
                <button
                  onClick={onCopyCA}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#00c805] text-black font-extrabold text-sm tracking-wider flex items-center justify-center gap-2 hover:bg-[#20e025] shadow-[0_0_15px_rgba(0,200,5,0.4)] transition-all cursor-pointer shrink-0 active:scale-95"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? "COPIED!" : "COPY CA"}</span>
                </button>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              
              {/* Buy Button */}
              <a
                href="#how-to-buy"
                onClick={handleBuyClick}
                className="px-8 py-4 rounded-2xl bg-[#00c805] text-black font-black text-lg tracking-wider flex items-center gap-3 shadow-[0_0_30px_rgba(0,200,5,0.5)] hover:bg-[#20e025] hover:scale-105 hover:shadow-[0_0_45px_rgba(0,200,5,0.8)] transition-all cursor-pointer active:scale-95"
              >
                <Rocket className="w-6 h-6 animate-bounce" />
                <span>BUY $WTF</span>
              </a>

              {/* Telegram Link Placeholder */}
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playCoinSound()}
                className="px-6 py-4 rounded-2xl bg-[#142214] border border-[#00c805]/40 text-white font-extrabold text-base tracking-wide flex items-center gap-2.5 hover:border-[#00c805] hover:bg-[#00c805]/20 hover:text-[#00c805] transition-all cursor-pointer active:scale-95"
              >
                <Send className="w-5 h-5 text-[#00c805]" />
                <span>Join Telegram</span>
              </a>

              {/* X / Twitter Link Placeholder */}
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playCoinSound()}
                className="px-6 py-4 rounded-2xl bg-[#142214] border border-[#00c805]/40 text-white font-extrabold text-base tracking-wide flex items-center gap-2.5 hover:border-[#00c805] hover:bg-[#00c805]/20 hover:text-[#00c805] transition-all cursor-pointer active:scale-95"
              >
                <Twitter className="w-5 h-5 text-[#00c805]" />
                <span>Follow X</span>
              </a>

            </div>

            {/* Degen Conviction Pill Quote */}
            <div className="pt-2 text-xs font-mono text-gray-400 flex items-center justify-center lg:justify-start gap-2">
              <ShieldAlert className="w-4 h-4 text-yellow-400 shrink-0" />
              <span>HIGH RISK. HIGH REWARD. ZERO REGRETS.</span>
            </div>

          </div>

          {/* Right Hero Motion Image Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group w-full max-w-md">
              
              {/* Outer Glowing Neon Frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#00c805] via-yellow-400 to-[#00c805] opacity-75 blur-xl group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />

              {/* Main Artwork Container */}
              <div className="relative rounded-3xl bg-[#080d08] p-3 border border-[#00c805]/40 shadow-2xl overflow-hidden">
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-[#0b140b]">
                  
                  <img
                    src={ROBIN_DEGEN_IMAGES.hero}
                    alt="RobinDegen Moon Mission"
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover rounded-2xl transition-transform duration-700 ${isShooting ? 'scale-110 rotate-1' : 'group-hover:scale-105'}`}
                  />

                  {/* Motion Arrow Shooting Overlay Animation */}
                  {isShooting && (
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00c805]/30 to-transparent flex items-center justify-center pointer-events-none">
                      <div className="text-6xl animate-bounce">🏹 🚀</div>
                    </div>
                  )}

                  {/* Floating Robinhood Chain Badge */}
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-[#00c805]/50 px-3 py-1.5 rounded-xl flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00c805] animate-ping" />
                    <span className="font-mono text-xs font-bold text-[#00c805]">ROBINHOOD CHAIN</span>
                  </div>

                  {/* Interactive Bow Shoot Button */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/85 backdrop-blur-md border border-white/10 p-3 rounded-xl">
                    <div>
                      <p className="text-xs font-mono text-gray-300">Target: The Moon 🌕</p>
                      <p className="text-[11px] font-bold text-[#00c805]">Click to Fire Green Candle Arrow!</p>
                    </div>
                    <button
                      onClick={handleBowClick}
                      className="px-3.5 py-2 rounded-lg bg-[#00c805] text-black font-black text-xs hover:bg-[#20e025] transition-all cursor-pointer active:scale-90 flex items-center gap-1.5"
                    >
                      <span>FIRE</span>
                      <span className="text-sm">🏹</span>
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Ticker Banner */}
      <div className="mt-12 py-3 bg-[#00c805] text-black font-bangers text-2xl tracking-widest overflow-hidden border-y-2 border-black rotate-[-1deg] shadow-[0_0_20px_rgba(0,200,5,0.5)]">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          <span>🚀 $WTF</span>
          <span>•</span>
          <span>BUILT ON ROBINHOOD CHAIN 🍃</span>
          <span>•</span>
          <span>NO ROADMAP. NO PROMISES. JUST VIBES.</span>
          <span>•</span>
          <span>SEND IT TO THE MOON! 🏹</span>
          <span>•</span>
          <span>HIGH RISK. HIGH REWARD. ZERO REGRETS.</span>
          <span>•</span>
          <span>STEALING FROM THE RICH, SENDING IT TO THE MOON!</span>
          <span>•</span>
          <span>🚀 $WTF</span>
          <span>•</span>
          <span>BUILT ON ROBINHOOD CHAIN 🍃</span>
          <span>•</span>
          <span>NO ROADMAP. NO PROMISES. JUST VIBES.</span>
          <span>•</span>
          <span>SEND IT TO THE MOON! 🏹</span>
        </div>
      </div>

    </section>
  );
};
