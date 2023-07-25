import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`p-2 border border-primary rounded-lg bg-primary text-white hover:scale-110 transition-all ease-in-out ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
