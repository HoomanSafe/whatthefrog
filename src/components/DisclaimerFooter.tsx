import React from 'react';
import { ShieldAlert, Send, Twitter, Copy, Check, ExternalLink, ArrowUp, Heart } from 'lucide-react';
import { playCoinSound } from '../utils/audio';

interface DisclaimerFooterProps {
  contractAddress: string;
  onCopyCA: () => void;
  copied: boolean;
}

export const DisclaimerFooter: React.FC<DisclaimerFooterProps> = ({ contractAddress, onCopyCA, copied }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    playCoinSound();
  };

  return (
    <footer className="bg-[#050805] text-gray-400 pt-16 pb-12 border-t-2 border-[#00c805]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Brand & Social Links Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-800">
          
          <div className="flex items-center gap-3">
            <span className="text-3xl">🐸</span>
            <div>
              <span className="font-bangers text-3xl text-white tracking-wider">WhatTheFrog</span>
              <p className="text-xs font-mono text-[#00c805]">$WTF • Built on Robinhood Chain 🍃</p>
            </div>
          </div>

          {/* Social Placeholders & CA Copy */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#0e170e] border border-[#00c805]/30 text-white hover:text-[#00c805] hover:border-[#00c805] font-mono text-xs font-bold flex items-center gap-2 transition-all"
            >
              <Send className="w-4 h-4 text-[#00c805]" />
              <span>Telegram</span>
            </a>

            <a
              href="https://x.com/wtfonhood"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#0e170e] border border-[#00c805]/30 text-white hover:text-[#00c805] hover:border-[#00c805] font-mono text-xs font-bold flex items-center gap-2 transition-all"
            >
              <Twitter className="w-4 h-4 text-[#00c805]" />
              <span>X (Twitter)</span>
            </a>

            <button
              onClick={onCopyCA}
              className="px-4 py-2.5 rounded-xl bg-[#00c805] text-black font-extrabold font-mono text-xs flex items-center gap-2 hover:bg-[#20e025] transition-all cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "CA Copied!" : "Copy CA"}</span>
            </button>

          </div>

        </div>

        {/* Disclaimer Warning Box */}
        <div className="p-6 rounded-2xl bg-[#0b120b] border border-yellow-500/30 space-y-3 font-outfit text-xs sm:text-sm text-gray-300">
          <div className="flex items-center gap-2 text-yellow-400 font-extrabold text-sm uppercase">
            <ShieldAlert className="w-5 h-5 shrink-0" />
            <span>DISCLAIMER & RISK NOTICE</span>
          </div>
          <p className="leading-relaxed">
            <strong>Disclaimer:</strong> This meme coin is not affiliated with any official brand or corporation. It is purely a meme token and a community experiment built on Robinhood Chain. Please do your own research (DYOR) before participating. Meme coins are highly speculative and volatile assets with no intrinsic value or any expectation of financial return. This is not financial advice.
          </p>
          <p className="font-marker text-yellow-400 text-sm">
            No roadmap. No promises. Just vibes. Send it to the moon! 🚀🏹💚
          </p>
        </div>

        {/* Bottom Rights & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400 pt-4">
          <p>© {new Date().getFullYear()} WhatTheFrog ($WTF). Community Owned & Powered by Robinhood Chain.</p>
          
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#0e170e] border border-gray-800 text-gray-300 hover:text-[#00c805] hover:border-[#00c805] transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
