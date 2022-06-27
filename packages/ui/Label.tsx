interface LabelProps {
  children?: React.ReactNode;
  className?: string | undefined;
}

export const Label = ({ children, className }: LabelProps) => {
  return (
    <label className={`text-sm  mb-1 text-gray-500 ${className}`}>
      {children}
    </label>
  );
};
