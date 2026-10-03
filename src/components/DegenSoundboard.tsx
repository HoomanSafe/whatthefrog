import React, { useState } from 'react';
import { Volume2, Music, Sparkles, Flame, Rocket, Target, DollarSign } from 'lucide-react';
import { playBowShootSound, playRocketLaunchSound, playPumpSound, playCoinSound } from '../utils/audio';

export const DegenSoundboard: React.FC = () => {
  const [activeSound, setActiveSound] = useState<string | null>(null);

  const triggerSound = (name: string, fn: () => void) => {
    setActiveSound(name);
    fn();
    setTimeout(() => setActiveSound(null), 600);
  };

  const soundButtons = [
    {
      name: 'Bow Shot 🏹',
      fn: playBowShootSound,
      color: 'from-green-600 to-emerald-800',
    },
    {
      name: '100x Pump 📈',
      fn: playPumpSound,
      color: 'from-emerald-500 to-green-700',
    },
    {
      name: 'Rocket Launch 🚀',
      fn: playRocketLaunchSound,
      color: 'from-yellow-600 to-amber-800',
    },
    {
      name: 'Cha-Ching 💰',
      fn: playCoinSound,
      color: 'from-lime-600 to-green-800',
    },
  ];

  return (
    <section className="py-12 bg-[#0b0f0b] border-t border-[#00c805]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#122413] text-[#00c805] text-xs font-mono font-bold uppercase mb-4 border border-[#00c805]/30">
          <Volume2 className="w-3.5 h-3.5" />
          <span>DEGEN AUDIO SYNTHESIZER</span>
        </div>

        <h3 className="font-bangers text-3xl text-white mb-6">
          WhatTheFrog <span className="text-[#00c805]">Soundboard</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {soundButtons.map((btn) => (
            <button
              key={btn.name}
              onClick={() => triggerSound(btn.name, btn.fn)}
              className={`py-4 px-4 rounded-2xl bg-gradient-to-b ${btn.color} text-white font-bangers text-xl tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/20 relative overflow-hidden ${
                activeSound === btn.name ? 'ring-4 ring-[#00c805] scale-105' : ''
              }`}
            >
              <span>{btn.name}</span>
              {activeSound === btn.name && (
                <span className="absolute inset-0 bg-white/20 animate-ping" />
              )}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
