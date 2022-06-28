interface TextProps {
  children?: React.ReactNode;
  className?: string | undefined;
}

export const Text = ({ children, className }: TextProps) => {
  return <p className={`text-gray-400 text-sm ${className}`}>{children}</p>;
};
