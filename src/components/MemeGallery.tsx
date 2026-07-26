import React, { useState } from 'react';
import { Download, Maximize2, Share2, Sparkles, X, Check, Copy } from 'lucide-react';
import { MEME_CARDS } from '../data/images';
import { playCoinSound, playPumpSound } from '../utils/audio';

export const MemeGallery: React.FC = () => {
  const [selectedMeme, setSelectedMeme] = useState<typeof MEME_CARDS[0] | null>(null);
  const [copiedQuoteId, setCopiedQuoteId] = useState<string | null>(null);

  const handleCopyQuote = (quote: string, id: string) => {
    navigator.clipboard.writeText(quote);
    setCopiedQuoteId(id);
    playCoinSound();
    setTimeout(() => setCopiedQuoteId(null), 2000);
  };

  const handleDownload = (imgUrl: string, title: string) => {
    playCoinSound();
    const link = document.createElement('a');
    link.href = imgUrl;
    link.download = `RobinDegen_${title.replace(/\s+/g, '_')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="memes" className="py-20 bg-[#080d08] relative overflow-hidden border-t border-[#00c805]/20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#122413] border border-[#00c805]/30 text-[#00c805] text-xs font-mono font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>COMMUNITY MEME PACK</span>
          </div>

          <h2 className="font-bangers text-5xl sm:text-6xl text-white tracking-wide uppercase">
            RobinDegen <span className="text-[#00c805] text-glow">Motion Art</span>
          </h2>

          <p className="text-gray-300 font-outfit text-lg">
            Download high-res artwork to spread the $RobinDegen movement across Telegram, X, and Reddit.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MEME_CARDS.map((card) => (
            <div
              key={card.id}
              className="rounded-3xl bg-[#0f170f] border border-[#00c805]/30 p-4 hover:border-[#00c805] shadow-[0_0_25px_rgba(0,200,5,0.1)] hover:shadow-[0_0_35px_rgba(0,200,5,0.25)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-square bg-[#080d08] mb-4">
                <img
                  src={card.image}
                  alt={card.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#00c805]/40 text-[#00c805] font-mono text-xs font-bold">
                  {card.badge}
                </div>

                {/* Lightbox Trigger Icon */}
                <button
                  onClick={() => {
                    setSelectedMeme(card);
                    playPumpSound();
                  }}
                  className="absolute top-3 right-3 p-2.5 rounded-xl bg-black/80 text-white hover:text-[#00c805] hover:scale-110 transition-all cursor-pointer"
                  title="Expand Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Title & Actions */}
              <div className="space-y-3 p-1">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bangers text-2xl text-white tracking-wide leading-tight">
                      {card.title}
                    </h3>
                    <p className="font-marker text-yellow-400 text-sm mt-0.5">
                      "{card.slogan}"
                    </p>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                  <button
                    onClick={() => handleDownload(card.image, card.title)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#142615] border border-[#00c805]/40 text-white font-mono text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-[#00c805] hover:text-black transition-all cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download HD</span>
                  </button>

                  <button
                    onClick={() => handleCopyQuote(card.slogan, card.id)}
                    className="py-2.5 px-3 rounded-xl bg-[#121f12] border border-white/10 text-gray-300 hover:text-[#00c805] hover:border-[#00c805]/40 font-mono text-xs flex items-center gap-1 transition-all cursor-pointer"
                    title="Copy Meme Quote"
                  >
                    {copiedQuoteId === card.id ? <Check className="w-3.5 h-3.5 text-[#00c805]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedQuoteId === card.id ? "Copied!" : "Quote"}</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedMeme && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
          <div className="relative max-w-3xl w-full bg-[#080d08] border border-[#00c805]/50 rounded-3xl p-4 sm:p-6 shadow-2xl">
            
            <button
              onClick={() => setSelectedMeme(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-[#142214] text-gray-300 hover:text-white hover:bg-red-900/40 transition-all cursor-pointer z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="rounded-2xl overflow-hidden aspect-square max-h-[60vh] mx-auto mb-4 border border-white/10">
              <img
                src={selectedMeme.image}
                alt={selectedMeme.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain bg-black"
              />
            </div>

            <div className="text-center space-y-2">
              <h3 className="font-bangers text-3xl text-white">
                {selectedMeme.title}
              </h3>
              <p className="font-marker text-yellow-400 text-lg">
                "{selectedMeme.slogan}"
              </p>
              
              <div className="flex justify-center gap-3 pt-3">
                <button
                  onClick={() => handleDownload(selectedMeme.image, selectedMeme.title)}
                  className="px-6 py-2.5 rounded-xl bg-[#00c805] text-black font-extrabold text-sm flex items-center gap-2 hover:bg-[#20e025] transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Artwork</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
