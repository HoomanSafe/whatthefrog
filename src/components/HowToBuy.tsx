import React, { useState } from 'react';
import { Wallet, ArrowRightLeft, Rocket, CheckCircle2, Copy, Check, Target, ExternalLink } from 'lucide-react';
import { playBowShootSound, playRocketLaunchSound, playCoinSound } from '../utils/audio';

interface HowToBuyProps {
  contractAddress: string;
  onCopyCA: () => void;
  copied: boolean;
  onTriggerConfetti: () => void;
}

export const HowToBuy: React.FC<HowToBuyProps> = ({ contractAddress, onCopyCA, copied, onTriggerConfetti }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [targetHit, setTargetHit] = useState<boolean>(false);

  const steps = [
    {
      num: "01",
      title: "Create an EVM Wallet",
      icon: Wallet,
      desc: "Download MetaMask, Rabby, or Robinhood Wallet on iOS/Android or desktop extension. Save your recovery phrase securely.",
      actionText: "Supported on Robinhood Chain EVM",
    },
    {
      num: "02",
      title: "Bridge to Robinhood Chain",
      icon: ArrowRightLeft,
      desc: "Deposit ETH, USDT, or native gas tokens on Robinhood Chain using the official Robinhood Chain Bridge or DEX exchange.",
      actionText: "Fast & Microscopic Fees",
    },
    {
      num: "03",
      title: "Connect to DEX & Paste CA",
      icon: Copy,
      desc: "Connect your wallet to Robinhood Chain Swap / DEX. Paste the official $WTF contract address into the token selector.",
      actionText: "Verify CA before swapping",
    },
    {
      num: "04",
      title: "Swap for $WTF & HODL",
      icon: Rocket,
      desc: "Swap your ETH/USDT for $WTF with 0.5% slippage. Confirm the transaction, sit back, and ride green candles to the moon! 🚀",
      actionText: "0% Buy Tax • 0% Sell Tax",
    },
  ];

  const handleShootTarget = () => {
    playBowShootSound();
    setTargetHit(true);
    onTriggerConfetti();
    setTimeout(() => setTargetHit(false), 2000);
  };

  return (
    <section id="how-to-buy" className="py-20 bg-[#0b0f0b] relative overflow-hidden bg-chart-grid">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#122413] border border-[#00c805]/30 text-[#00c805] text-xs font-mono font-bold uppercase tracking-widest">
            <Rocket className="w-4 h-4" />
            <span>SWAP GUIDE</span>
          </div>

          <h2 className="font-bangers text-5xl sm:text-6xl text-white tracking-wide uppercase">
            How To Buy <span className="text-[#00c805] text-glow">$WTF</span>
          </h2>

          <p className="text-gray-300 font-outfit text-lg">
            Follow these 4 simple steps to join the Robinhood Chain degen revolution.
          </p>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isSelected = activeStep === index + 1;
            return (
              <div
                key={index}
                onClick={() => {
                  setActiveStep(index + 1);
                  playCoinSound();
                }}
                className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0f2411] border-[#00c805] shadow-[0_0_30px_rgba(0,200,5,0.3)] scale-[1.02]'
                    : 'bg-[#0e170e] border-white/10 hover:border-[#00c805]/40 hover:bg-[#121f12]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bangers text-4xl text-[#00c805] opacity-80">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#080d08] border border-white/10 flex items-center justify-center text-[#00c805]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-bangers text-2xl text-white tracking-wide mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-300 font-outfit text-sm leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-[#00c805] flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{step.actionText}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contract Address Callout & Target Mini Game */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0b1a0c] via-[#080d08] to-[#0b1a0c] border border-[#00c805]/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <span className="bg-[#00c805]/20 text-[#00c805] text-xs font-mono font-bold px-3 py-1 rounded-full border border-[#00c805]/30">
              OFFICIAL TOKEN CONTRACT ADDRESS
            </span>
            <h3 className="font-bangers text-3xl text-white tracking-wide">
              Ready to Swap on Robinhood Chain?
            </h3>
            <p className="text-gray-300 font-mono text-xs break-all bg-[#080d08] p-3 rounded-xl border border-gray-800">
              {contractAddress}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            
            {/* Copy CA Button */}
            <button
              onClick={() => {
                onCopyCA();
                playRocketLaunchSound();
              }}
              className="px-6 py-3.5 rounded-2xl bg-[#00c805] text-black font-extrabold text-sm tracking-wider flex items-center gap-2 hover:bg-[#20e025] shadow-[0_0_20px_rgba(0,200,5,0.4)] transition-all cursor-pointer active:scale-95 shrink-0"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "COPIED CONTRACT!" : "COPY CA TO SWAP"}</span>
            </button>

            {/* Target Shooter Mini Button */}
            <button
              onClick={handleShootTarget}
              className="px-6 py-3.5 rounded-2xl bg-[#142615] border border-[#00c805]/50 text-white font-extrabold text-sm tracking-wider flex items-center gap-2 hover:bg-[#00c805]/20 hover:border-[#00c805] transition-all cursor-pointer active:scale-95 shrink-0"
            >
              <Target className={`w-4 h-4 text-[#00c805] ${targetHit ? 'animate-ping' : ''}`} />
              <span>{targetHit ? "BULLSEYE! 🎯" : "SHOOT TARGET 🏹"}</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
