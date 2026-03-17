import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 32 }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_8px_rgba(0,102,255,0.5)]"
      >
        {/* The 'O' - Outer circle with a gap at the top */}
        <path 
          d="M14 8.5C10.3333 10.5 8 14.5 8 19C8 25.6274 13.3726 31 20 31C26.6274 31 32 25.6274 32 19C32 14.5 29.6667 10.5 26 8.5" 
          stroke="white" 
          strokeWidth="4" 
          strokeLinecap="round" 
        />
        {/* The 'I' - Vertical line in the center gap */}
        <path 
          d="M20 5V19" 
          stroke="#0066ff" 
          strokeWidth="4" 
          strokeLinecap="round" 
        />
      </svg>
      <span className="font-bold tracking-tighter text-white" style={{ fontSize: size * 0.7 }}>
        Otevřená<span className="text-brand-neon">Informatika</span>
      </span>
    </div>
  );
};

export default Logo;
