import React, { useState } from 'react';

interface ArtworkProps {
  type: string;
  src?: string;
  className?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/4' | '21/9';
  alt?: string;
}

const PHOTO_MAP: Record<string, string> = {
  'hero-hearth': '/images/hero_wood_hearth.jpg',
  'wagyu-ribeye': '/images/dish_wagyu_ribeye.jpg',
  'diver-scallops': '/images/dish_diver_scallops.jpg',
  'morel-tart': '/images/dish_morel_tart.jpg',
  'spanish-octopus': '/images/dish_charred_octopus.jpg',
  'applewood-duck': '/images/dish_smoked_duck.jpg',
  'charred-basque-fig': '/images/dish_charred_fig_dessert.jpg',
  'chef-hearth': '/images/chef_hearth_cooking.jpg',
  'cellar-bottles': '/images/interior_private_cellar.jpg',
  'private-cellar': '/images/interior_private_cellar.jpg',
};

export const CulinaryArtwork: React.FC<ArtworkProps> = ({
  type,
  src,
  className = '',
  aspectRatio = '4/3',
  alt = 'Ember & Oak Culinary Photography',
}) => {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const photoPath = src || PHOTO_MAP[type];

  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case '16/9': return 'aspect-[16/9]';
      case '1/1': return 'aspect-square';
      case '3/4': return 'aspect-[3/4]';
      case '21/9': return 'aspect-[21/9]';
      case '4/3':
      default: return 'aspect-[4/3]';
    }
  };

  return (
    <div 
      className={`relative overflow-hidden bg-[#181210] border border-[rgba(250,246,240,0.08)] select-none group ${getAspectRatioClass()} ${className}`}
    >
      {/* Background hearth ambient tone */}
      <div className="absolute inset-0 bg-[#140E0C] pointer-events-none" />

      {/* Real High-Fidelity Photograph */}
      {photoPath && !imgError && (
        <img
          src={photoPath}
          alt={alt}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
            imgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
          }`}
        />
      )}

      {/* Styled Fallback Vector if image error or missing */}
      {(imgError || !photoPath || !imgLoaded) && (
        <div className={`absolute inset-0 transition-opacity duration-300 ${imgLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_65%,rgba(200,100,70,0.22)_0%,rgba(34,31,30,0.8)_60%,#120D0B_100%)] pointer-events-none" />
          {renderSvgArtwork(type)}
        </div>
      )}

      {/* Warm Cinematic Film Scrim Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Subtle Vignette Rim */}
      <div 
        className="absolute inset-0 shadow-[inset_0_0_40px_rgba(18,13,11,0.7)] pointer-events-none" 
        aria-hidden="true" 
      />
      
      {/* Architectural Corner Framing Marks */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[rgba(212,163,115,0.5)] pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[rgba(212,163,115,0.5)] pointer-events-none" />
    </div>
  );
};

function renderSvgArtwork(type: string) {
  switch (type) {
    case 'hero-hearth':
      return (
        <svg viewBox="0 0 800 450" className="w-full h-full object-cover">
          <rect width="800" height="450" fill="#140E0C" />
          <path d="M 120 450 L 120 180 Q 400 90 680 180 L 680 450 Z" fill="#1C1614" stroke="rgba(250,246,240,0.06)" strokeWidth="2" />
          <g stroke="#2D2825" strokeWidth="6">
            <line x1="200" y1="360" x2="600" y2="360" />
            <line x1="180" y1="320" x2="620" y2="320" />
            <line x1="220" y1="280" x2="580" y2="280" />
          </g>
          <ellipse cx="400" cy="400" rx="260" ry="60" fill="rgba(200,100,70,0.6)" />
          <g fill="#241B18">
            <rect x="240" y="380" width="180" height="34" rx="4" transform="rotate(-6 330 397)" />
            <rect x="360" y="375" width="200" height="36" rx="4" transform="rotate(8 460 393)" />
          </g>
        </svg>
      );
    case 'wagyu-ribeye':
    default:
      return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#1A1412]">
          <div className="w-10 h-10 border border-[#D4A373]/40 flex items-center justify-center text-[#D4A373] mb-2">
            <span className="font-serif text-sm italic">E&amp;O</span>
          </div>
          <p className="font-serif text-xs tracking-wider uppercase text-[#FAF6F0]/80">Ember &amp; Oak Culinary Hearth</p>
        </div>
      );
  }
}
