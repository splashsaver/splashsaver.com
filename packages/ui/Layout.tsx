import * as React from "react";

interface LayoutProps {
  className?: string | undefined;
  children?: React.ReactNode;
}

export const Layout = ({ className, children }: LayoutProps) => {
  return (
    <div className={`flex justify-center bg-black ${className}`}>
      {children}
    </div>
  );
};
