import React from "react";

const Card = ({ width, height, shadowSize = "lg", className, children }) => {
  return (
    <div
      className={`w-${width} h-${height} rounded-md overflow-hidden shadow-${shadowSize} bg-slate-700 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
