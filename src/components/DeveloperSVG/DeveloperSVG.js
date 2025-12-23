import React from 'react'

function DeveloperSVG() {
  return (
    <svg 
      viewBox="0 0 500 500" 
      xmlns="http://www.w3.org/2000/svg"
      className="developer-svg"
      aria-label="Developer illustration"
    >
      {/* Background Circle */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 0.2 }} />
          <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 0.2 }} />
        </linearGradient>
        
        <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
        </linearGradient>

        <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#f97316', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Background */}
      <circle cx="250" cy="250" r="240" fill="url(#bgGradient)" />

      {/* Laptop Base */}
      <rect x="100" y="280" width="300" height="20" rx="10" fill="#1e1e2e" />
      
      {/* Laptop Screen */}
      <rect x="120" y="140" width="260" height="140" rx="8" fill="#0a0a0f" stroke="#667eea" strokeWidth="3" />
      
      {/* Screen Content - Code Lines */}
      <rect x="140" y="160" width="100" height="8" rx="4" fill="url(#codeGradient)">
        <animate attributeName="width" values="100;120;100" dur="3s" repeatCount="indefinite" />
      </rect>
      
      <rect x="140" y="180" width="180" height="8" rx="4" fill="#10b981">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
      </rect>
      
      <rect x="140" y="200" width="140" height="8" rx="4" fill="#8b5cf6" />
      
      <rect x="140" y="220" width="200" height="8" rx="4" fill="url(#screenGradient)">
        <animate attributeName="width" values="200;220;200" dur="4s" repeatCount="indefinite" />
      </rect>
      
      <rect x="140" y="240" width="160" height="8" rx="4" fill="#ec4899" />

      {/* Cursor/Caret */}
      <rect x="250" y="240" width="3" height="10" fill="#f59e0b">
        <animate attributeName="opacity" values="1;0;1" dur="0.8s" repeatCount="indefinite" />
      </rect>

      {/* Floating Code Symbols */}
      <text x="80" y="120" fontSize="30" fill="#667eea" opacity="0.6">{'<>'}</text>
      <text x="390" y="130" fontSize="28" fill="#f59e0b" opacity="0.5">{ '{}' }</text>
      <text x="70" y="320" fontSize="32" fill="#8b5cf6" opacity="0.4">{ '[ ]' }</text>
      <text x="400" y="300" fontSize="26" fill="#10b981" opacity="0.5">{ '( )' }</text>

      {/* Decorative Elements */}
      <circle cx="420" cy="200" r="8" fill="#667eea" opacity="0.6">
        <animate attributeName="cy" values="200;210;200" dur="3s" repeatCount="indefinite" />
      </circle>
      
      <circle cx="80" cy="250" r="6" fill="#f59e0b" opacity="0.5">
        <animate attributeName="cy" values="250;240;250" dur="2.5s" repeatCount="indefinite" />
      </circle>

      <circle cx="430" cy="350" r="10" fill="#8b5cf6" opacity="0.4">
        <animate attributeName="cy" values="350;360;350" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Coffee Cup */}
      <g transform="translate(350, 180)">
        <rect x="0" y="10" width="30" height="35" rx="3" fill="#1e1e2e" stroke="#667eea" strokeWidth="2" />
        <ellipse cx="15" cy="10" rx="15" ry="5" fill="#0a0a0f" stroke="#667eea" strokeWidth="2" />
        {/* Coffee */}
        <rect x="3" y="15" width="24" height="25" rx="2" fill="#8b4513" opacity="0.8" />
        {/* Steam */}
        <path d="M 10 0 Q 8 -5 10 -10" stroke="#667eea" strokeWidth="1.5" fill="none" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M 20 -2 Q 18 -7 20 -12" stroke="#667eea" strokeWidth="1.5" fill="none" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2.2s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Terminal Window Indicator */}
      <g transform="translate(140, 155)">
        <circle cx="0" cy="0" r="4" fill="#ef4444" />
        <circle cx="12" cy="0" r="4" fill="#f59e0b" />
        <circle cx="24" cy="0" r="4" fill="#10b981" />
      </g>
    </svg>
  )
}

export default DeveloperSVG

