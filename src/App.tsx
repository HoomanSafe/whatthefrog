import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { WhyRobinDegen } from './components/WhyRobinDegen';
import { Degenomics } from './components/Degenomics';
import { HowToBuy } from './components/HowToBuy';
import { MemeGallery } from './components/MemeGallery';
import { DegenSoundboard } from './components/DegenSoundboard';
import { DisclaimerFooter } from './components/DisclaimerFooter';
import { playCoinSound, playRocketLaunchSound } from './utils/audio';
import { Check, Sparkles } from 'lucide-react';

export default function App() {
  // Placeholder contract address (user mentioned contract address will be put later)
  const [contractAddress] = useState<string>("0x03655fC74FDB6d1eb1da46e3f00b632e812E7A76");
  const [copied, setCopied] = useState<boolean>(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00c805', '#eab308', '#ffffff', '#20e025'],
    });
  };

  const handleCopyCA = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    playCoinSound();
    triggerConfetti();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#0b0f0b] text-gray-100 font-sans selection:bg-[#00c805] selection:text-black relative">
      
      {/* Top Navbar */}
      <Navbar
        contractAddress={contractAddress}
        onCopyCA={handleCopyCA}
        copied={copied}
      />

      <main>
        {/* Hero Section */}
        <Hero
          contractAddress={contractAddress}
          onCopyCA={handleCopyCA}
          copied={copied}
          onTriggerConfetti={triggerConfetti}
        />

        {/* About Section */}
        <AboutSection />

        {/* Why $RobinDegen */}
        <WhyRobinDegen />

        {/* Degenomics & Lambo Calculator */}
        <Degenomics />

        {/* How To Buy */}
        <HowToBuy
          contractAddress={contractAddress}
          onCopyCA={handleCopyCA}
          copied={copied}
          onTriggerConfetti={triggerConfetti}
        />

        {/* Meme Motion Gallery */}
        <MemeGallery />

        {/* Soundboard */}
        <DegenSoundboard />
      </main>

      {/* Footer */}
      <DisclaimerFooter
        contractAddress={contractAddress}
        onCopyCA={handleCopyCA}
        copied={copied}
      />

      {/* Toast Notification for CA Copy */}
      {copied && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#00c805] text-black font-extrabold px-5 py-3 rounded-2xl shadow-[0_0_30px_rgba(0,200,5,0.8)] flex items-center gap-2 animate-bounce">
          <Check className="w-5 h-5 stroke-[3]" />
          <span className="font-mono text-sm tracking-wide">
            CONTRACT ADDRESS COPIED TO CLIPBOARD!
          </span>
        </div>
      )}

    </div>
  );
}
