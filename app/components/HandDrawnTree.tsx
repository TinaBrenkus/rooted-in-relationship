export default function HandDrawnTree({ className = "", size = 100 }: { className?: string; size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tree trunk - hand-drawn style */}
      <path 
        d="M98 180 C95 175, 92 165, 95 150 C98 135, 96 125, 94 110 C92 95, 95 85, 98 70 C100 55, 99 45, 97 30"
        stroke="#656d4f" 
        strokeWidth="6" 
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      
      {/* Main branch left */}
      <path 
        d="M94 85 C88 82, 80 80, 72 85 C68 88, 65 92, 68 95"
        stroke="#656d4f" 
        strokeWidth="4" 
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      
      {/* Main branch right */}
      <path 
        d="M102 75 C108 72, 118 70, 125 75 C128 78, 132 82, 128 85"
        stroke="#656d4f" 
        strokeWidth="4" 
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      
      {/* Organic foliage - main canopy */}
      <path 
        d="M65 95 C55 88, 45 80, 50 70 C58 60, 68 65, 75 58 C82 52, 92 58, 100 50 C108 58, 118 52, 125 58 C132 65, 142 60, 150 70 C155 80, 145 88, 135 95 C128 102, 118 98, 110 105 C102 98, 92 102, 85 95 C78 98, 68 102, 65 95 Z"
        fill="#9b9b84" 
        opacity="0.6"
      />
      
      {/* Secondary foliage layer */}
      <path 
        d="M70 85 C62 80, 55 75, 58 68 C64 62, 72 66, 78 62 C84 58, 92 62, 98 58 C104 62, 112 58, 118 62 C124 66, 132 62, 138 68 C141 75, 134 80, 126 85 C120 90, 112 87, 106 92 C100 87, 94 90, 88 85 C82 87, 76 90, 70 85 Z"
        fill="#b97d83" 
        opacity="0.5"
      />
      
      {/* Small detailed branches */}
      <path d="M85 75 Q78 72, 72 76" stroke="#656d4f" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M115 65 Q122 62, 128 66" stroke="#656d4f" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M90 95 Q83 92, 76 96" stroke="#656d4f" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      
      {/* Organic leaves scattered */}
      <ellipse cx="75" cy="78" rx="3" ry="5" fill="#9b9b84" opacity="0.7" transform="rotate(15 75 78)" />
      <ellipse cx="125" cy="70" rx="3" ry="5" fill="#b97d83" opacity="0.6" transform="rotate(-20 125 70)" />
      <ellipse cx="95" cy="85" rx="4" ry="6" fill="#9b9b84" opacity="0.8" transform="rotate(45 95 85)" />
      <ellipse cx="110" cy="92" rx="3" ry="5" fill="#b97d83" opacity="0.7" transform="rotate(-30 110 92)" />
      
      {/* Ground roots suggestion */}
      <path 
        d="M90 178 Q85 180, 80 182"
        stroke="#656d4f" 
        strokeWidth="2" 
        strokeLinecap="round"
        opacity="0.4"
      />
      <path 
        d="M105 178 Q110 180, 115 182"
        stroke="#656d4f" 
        strokeWidth="2" 
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}