import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 40 40" 
        className="mr-2"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Blue background square with rounded corners */}
        <rect width="40" height="40" rx="6" fill="#0055a4" />
        
        {/* Stylized P for Parking */}
        <path 
          d="M10 8h12c3.3 0 6 2.7 6 6s-2.7 6-6 6h-6v12h-6V8z" 
          fill="white" 
        />
        
        {/* Inner part of P */}
        <path 
          d="M16 14h6c1.1 0 2 0.9 2 2s-0.9 2-2 2h-6v-4z" 
          fill="#0055a4" 
        />
      </svg>
      
      <span className="text-color_blue1 font-bold text-2xl">PARKTEK</span>
    </div>
  );
};

export default Logo;