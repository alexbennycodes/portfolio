import React from 'react';

const CornerBorders: React.FC = () => {
  return (
    <>
      <div className="absolute z-20 top-0 left-0 w-2 h-2 border-l border-t border-white/20 group-hover:border-primary group-hover:w-4 group-hover:h-4 transition-all duration-300" />
      <div className="absolute z-20 top-0 right-0 w-2 h-2 border-r border-t border-white/20 group-hover:border-primary group-hover:w-4 group-hover:h-4 transition-all duration-300" />
      <div className="absolute z-20 bottom-0 left-0 w-2 h-2 border-l border-b border-white/20 group-hover:border-primary group-hover:w-4 group-hover:h-4 transition-all duration-300" />
      <div className="absolute z-20 bottom-0 right-0 w-2 h-2 border-r border-b border-white/20 group-hover:border-primary group-hover:w-4 group-hover:h-4 transition-all duration-300" />
    </>
  );
};

export default CornerBorders;