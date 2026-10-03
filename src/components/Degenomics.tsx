import React, { useState } from 'react';
import { Coins, Flame, Lock, ShieldCheck, Calculator, Sparkles, Car } from 'lucide-react';
import { ROBIN_DEGEN_IMAGES } from '../data/images';
import { playCoinSound, playRocketLaunchSound } from '../utils/audio';

export const Degenomics: React.FC = () => {
  const [tokenHoldings, setTokenHoldings] = useState<number>(1000000); // 1 Million tokens default
  const [targetMarketCap, setTargetMarketCap] = useState<number>(50000000); // $50M target default

  // Total supply = 1,000,000,000
  const totalSupply = 1000000000;
  const tokenPriceAtTarget = targetMarketCap / totalSupply;
  const estimatedPortfolioValue = tokenHoldings * tokenPriceAtTarget;
  const lamboCost = 250000; // $250k green lambo
  const lambosEarned = (estimatedPortfolioValue / lamboCost).toFixed(1);

  return (
    <section id="degenomics" className="py-20 bg-[#080d08] relative overflow-hidden border-t border-[#00c805]/20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#122413] border border-[#00c805]/30 text-[#00c805] text-xs font-mono font-bold uppercase tracking-widest">
            <Coins className="w-4 h-4" />
            <span>DEGENOMICS & TOKEN SPECS</span>
          </div>

          <h2 className="font-bangers text-5xl sm:text-6xl text-white tracking-wide uppercase">
            Pure <span className="text-[#00c805] text-glow">Degenomics</span>
          </h2>

          <p className="text-gray-300 font-outfit text-lg">
            No taxes, no secret team allocations, no hidden mint functions. Pure unadulterated Robinhood Chain tokenomics.
          </p>
        </div>

        {/* Top 4 Tokenomics Specs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="p-6 rounded-3xl bg-[#0f1a0f] border border-[#00c805]/30 text-center glow-box">
            <div className="w-12 h-12 rounded-2xl bg-[#00c805]/20 text-[#00c805] flex items-center justify-center text-2xl mx-auto mb-3">
              🪙
            </div>
            <span className="text-xs font-mono text-gray-400 block uppercase">TOTAL SUPPLY</span>
            <span className="font-bangers text-3xl text-white text-glow">1,000,000,000</span>
            <span className="text-[11px] font-mono text-[#00c805] block mt-1">$WTF</span>
          </div>

          <div className="p-6 rounded-3xl bg-[#0f1a0f] border border-[#00c805]/30 text-center glow-box">
            <div className="w-12 h-12 rounded-2xl bg-[#00c805]/20 text-[#00c805] flex items-center justify-center text-2xl mx-auto mb-3">
              🔥
            </div>
            <span className="text-xs font-mono text-gray-400 block uppercase">BUY / SELL TAX</span>
            <span className="font-bangers text-3xl text-[#00c805] text-glow">0% / 0%</span>
            <span className="text-[11px] font-mono text-gray-300 block mt-1">Zero Fees. Pure Vibes.</span>
          </div>

          <div className="p-6 rounded-3xl bg-[#0f1a0f] border border-[#00c805]/30 text-center glow-box">
            <div className="w-12 h-12 rounded-2xl bg-[#00c805]/20 text-[#00c805] flex items-center justify-center text-2xl mx-auto mb-3">
              🔒
            </div>
            <span className="text-xs font-mono text-gray-400 block uppercase">LIQUIDITY</span>
            <span className="font-bangers text-3xl text-yellow-400 text-glow-yellow">100% BURNED</span>
            <span className="text-[11px] font-mono text-gray-300 block mt-1">Safu for Degens</span>
          </div>

          <div className="p-6 rounded-3xl bg-[#0f1a0f] border border-[#00c805]/30 text-center glow-box">
            <div className="w-12 h-12 rounded-2xl bg-[#00c805]/20 text-[#00c805] flex items-center justify-center text-2xl mx-auto mb-3">
              🍃
            </div>
            <span className="text-xs font-mono text-gray-400 block uppercase">NETWORK</span>
            <span className="font-bangers text-3xl text-white">ROBINHOOD CHAIN</span>
            <span className="text-[11px] font-mono text-[#00c805] block mt-1">EVM Compatible</span>
          </div>

        </div>

        {/* Interactive Moon & Lambo Calculator Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0b140b] p-6 sm:p-8 rounded-3xl border border-[#00c805]/30 shadow-2xl">
          
          {/* Left Artwork */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#00c805]/40 aspect-square group">
              <img
                src={ROBIN_DEGEN_IMAGES.lambo}
                alt="WhatTheFrog Green Lambo to the Moon"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-yellow-400/40 text-yellow-400 font-marker text-sm">
                HIGH RISK. HIGH REWARD. 🏎️
              </div>
            </div>
          </div>

          {/* Right Interactive Calculator */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center gap-2 text-[#00c805] font-mono text-sm font-extrabold">
              <Calculator className="w-5 h-5" />
              <span>DEGEN MOON PORTFOLIO CALCULATOR</span>
            </div>

            <h3 className="font-bangers text-3xl sm:text-4xl text-white">
              How Many Lambos at Moon Market Cap?
            </h3>

            {/* Input 1: Token Holdings Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-gray-400">YOUR $WTF BAG:</span>
                <span className="text-[#00c805] font-bold text-sm">
                  {tokenHoldings.toLocaleString()} $WTF
                </span>
              </div>
              <input
                type="range"
                min="100000"
                max="50000000"
                step="100000"
                value={tokenHoldings}
                onChange={(e) => {
                  setTokenHoldings(Number(e.target.value));
                  playCoinSound();
                }}
                className="w-full h-2 bg-[#142615] rounded-lg appearance-none cursor-pointer accent-[#00c805]"
              />
            </div>

            {/* Input 2: Target Market Cap Buttons */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-gray-400 block">TARGET ROBINHOOD CHAIN MARKET CAP:</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                {[
                  { label: '$10M', val: 10000000 },
                  { label: '$50M', val: 50000000 },
                  { label: '$250M', val: 250000000 },
                  { label: '$1 Billion 🌕', val: 1000000000 },
                ].map((mc) => (
                  <button
                    key={mc.val}
                    onClick={() => {
                      setTargetMarketCap(mc.val);
                      playRocketLaunchSound();
                    }}
                    className={`py-2 px-3 rounded-xl border transition-all font-bold cursor-pointer ${
                      targetMarketCap === mc.val
                        ? 'bg-[#00c805] text-black border-[#00c805] shadow-[0_0_15px_rgba(0,200,5,0.4)]'
                        : 'bg-[#121f12] text-gray-300 border-white/10 hover:border-[#00c805]/50'
                    }`}
                  >
                    {mc.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Output Calculation Result Box */}
            <div className="p-5 rounded-2xl bg-[#080d08] border border-[#00c805]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-gray-400 block">ESTIMATED PORTFOLIO VALUE:</span>
                <span className="font-bangers text-3xl sm:text-4xl text-[#00c805] text-glow">
                  ${estimatedPortfolioValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </span>
                <span className="text-[11px] font-mono text-gray-400 block">
                  Token Price: ${tokenPriceAtTarget.toFixed(6)}
                </span>
              </div>

              <div className="text-right sm:text-right bg-[#142615] p-3 rounded-xl border border-yellow-500/30 w-full sm:w-auto text-center">
                <span className="text-[10px] font-mono text-yellow-400 block uppercase font-bold flex items-center justify-center sm:justify-end gap-1">
                  <Car className="w-3.5 h-3.5" /> LAMBO INDEX
                </span>
                <span className="font-bangers text-3xl text-yellow-400 text-glow-yellow">
                  {lambosEarned} 🏎️
                </span>
                <span className="text-[10px] font-mono text-gray-300 block">Green Lambos</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
