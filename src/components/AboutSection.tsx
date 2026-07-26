import React from 'react';
import { Shield, Coins, Users, Zap, Trophy, Flame } from 'lucide-react';
import { ROBIN_DEGEN_IMAGES } from '../data/images';
import { playPumpSound } from '../utils/audio';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#080d08] relative overflow-hidden border-t border-[#00c805]/20">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-[#00c805]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Artwork */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div 
              className="relative rounded-3xl bg-[#0f1a0f] p-3 border border-[#00c805]/30 shadow-[0_0_35px_rgba(0,200,5,0.15)] group cursor-pointer overflow-hidden"
              onClick={() => playPumpSound()}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-square bg-[#080d08]">
                <img
                  src={ROBIN_DEGEN_IMAGES.army}
                  alt="RobinDegen Army Returning Wealth to the People"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />

                {/* Banner Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-md border border-[#00c805]/40 p-4 rounded-2xl">
                  <span className="font-marker text-yellow-400 text-lg block">
                    "WE THE DEGENS"
                  </span>
                  <p className="text-xs text-gray-300 font-mono mt-0.5">
                    RETURNING WEALTH TO THE PEOPLE • BUILT ON ROBINHOOD CHAIN 🍃
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00c805]/10 border border-[#00c805]/30 text-[#00c805] text-xs font-mono font-bold uppercase tracking-wider">
              <Flame className="w-4 h-4" />
              <span>THE LEGEND OF $RobinDegen</span>
            </div>

            <h2 className="font-bangers text-5xl sm:text-6xl text-white tracking-wide uppercase leading-tight">
              The Outlaw Of <br />
              <span className="text-[#00c805] text-glow">Robinhood Chain</span>
            </h2>

            <div className="p-4 rounded-2xl bg-[#0e170e] border-l-4 border-[#00c805] text-yellow-400 font-marker text-lg sm:text-xl">
              "The market doesn’t reward caution. It rewards conviction."
            </div>

            <div className="space-y-4 text-gray-300 font-outfit text-base sm:text-lg leading-relaxed">
              <p>
                Welcome to <strong className="text-white">RobinDegen</strong>, where memes meet moon missions. We’re building the true home of the Robinhood Chain degen community. Whether you’re here for the laughs, the culture, or the next legendary run, you’ve found your tribe.
              </p>
              <p>
                RobinDegen is the meme coin for traders who buy when everyone else hesitates, HODL through the chaos, and chase the next green candle without looking back.
              </p>
              <p>
                Inspired by the legendary outlaw who took on the establishment, RobinDegen is built for a new generation of degens — those who believe crypto belongs to the community, not the gatekeepers.
              </p>
            </div>

            {/* Quick Stat Pill Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 font-mono">
              <div className="p-3 rounded-xl bg-[#0f1a0f] border border-[#00c805]/20 text-center">
                <span className="text-xs text-gray-400 block">SUITS & BANKERS</span>
                <span className="font-extrabold text-[#00c805] text-sm">NONE 🚫</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0f1a0f] border border-[#00c805]/20 text-center">
                <span className="text-xs text-gray-400 block">PERMISSION</span>
                <span className="font-extrabold text-[#00c805] text-sm">NOT REQUIRED ⚡</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0f1a0f] border border-[#00c805]/20 text-center col-span-2 sm:col-span-1">
                <span className="text-xs text-gray-400 block">VIBES</span>
                <span className="font-extrabold text-yellow-400 text-sm">100% UNCHECKED 🔥</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
