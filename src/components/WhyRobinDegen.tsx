import React from 'react';
import { Users, Rocket, Gem, Target, TrendingUp, Sparkles } from 'lucide-react';
import { playPumpSound, playCoinSound } from '../utils/audio';

export const WhyRobinDegen: React.FC = () => {
  const pillars = [
    {
      icon: "🏹",
      title: "Community-First Meme Culture",
      desc: "No corporate handlers. Driven purely by community memes, social momentum, and unhinged degen energy.",
      color: "border-[#00c805]/40 hover:border-[#00c805]",
      glow: "hover:shadow-[0_0_25px_rgba(0,200,5,0.3)]",
    },
    {
      icon: "🚀",
      title: "Built on Robinhood Chain",
      desc: "Deploying directly on Robinhood Chain to power seamless swap experiences, ultra-fast block times, and microscopic gas fees.",
      color: "border-yellow-500/40 hover:border-yellow-400",
      glow: "hover:shadow-[0_0_25px_rgba(234,179,8,0.3)]",
    },
    {
      icon: "💎",
      title: "Diamond Hands Encouraged",
      desc: "Built for conviction traders who hold through the volatility and chase legendary green rockets into outer space.",
      color: "border-cyan-500/40 hover:border-cyan-400",
      glow: "hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]",
    },
    {
      icon: "🐸",
      title: "Powered by Memes, Fueled by Degens",
      desc: "The official mascot for everyone taking control of their financial destiny on Robinhood Chain.",
      color: "border-emerald-500/40 hover:border-emerald-400",
      glow: "hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]",
    },
    {
      icon: "📈",
      title: "Every Candle Tells a Story",
      desc: "From the first swap on Robinhood DEX to global moonshot history, we ride every wave together.",
      color: "border-green-400/40 hover:border-green-300",
      glow: "hover:shadow-[0_0_25px_rgba(74,222,128,0.3)]",
    },
  ];

  return (
    <section id="why" className="py-20 bg-[#0b0f0b] relative overflow-hidden bg-grid-pattern">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#122413] border border-[#00c805]/30 text-[#00c805] text-xs font-mono font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>THE OUTLAW ADVANTAGE</span>
          </div>

          <h2 className="font-bangers text-5xl sm:text-6xl text-white tracking-wide uppercase">
            Why <span className="text-[#00c805] text-glow">WhatTheFrog</span>?
          </h2>

          <p className="text-gray-300 font-outfit text-lg">
            Not financial advice. Just financial freedom. Here is why the Robinhood Chain community is uniting under the $WTF banner.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              onClick={() => {
                playPumpSound();
              }}
              className={`p-6 rounded-3xl bg-[#0f170f]/90 border ${item.color} ${item.glow} transition-all duration-300 cursor-pointer group hover:-translate-y-1`}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#080d08] border border-white/10 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                {item.icon}
              </div>

              <h3 className="font-bangers text-2xl text-white tracking-wide mb-2 group-hover:text-[#00c805] transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-300 font-outfit text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

          {/* Special Banner Card */}
          <div 
            onClick={() => playCoinSound()}
            className="p-6 rounded-3xl bg-gradient-to-br from-[#00c805]/20 via-[#0b240c] to-[#080d08] border border-[#00c805] shadow-[0_0_30px_rgba(0,200,5,0.2)] flex flex-col justify-between cursor-pointer hover:scale-[1.02] transition-transform"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#00c805] font-extrabold uppercase">ROBINHOOD CHAIN</span>
                <span className="text-2xl">🏹</span>
              </div>
              <h3 className="font-marker text-2xl text-yellow-400 mb-2">
                "SEND IT TO THE MOON! 🚀"
              </h3>
              <p className="text-gray-200 text-sm font-outfit">
                Whether you’re sniping launches or holding for the 100x run, WhatTheFrog is your banner.
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-[#00c805]/30 flex items-center justify-between text-xs font-mono font-bold text-[#00c805]">
              <span>NO ROADMAP • NO PROMISES</span>
              <span>JUST VIBES 💚</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
