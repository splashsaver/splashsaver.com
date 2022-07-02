import * as React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={`flex bg-brand font-semibold text-sm items-center justify-center duration-300 hover:translate-y-1 cursor-pointer text-white rounded p-1 h-8 px-3 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
