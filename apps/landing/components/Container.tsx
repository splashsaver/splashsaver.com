export const Container = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string | undefined;
}) => {
  return (
    <div className={`flex flex-col h-screen p-14 w-[85%] ${className}`}>
      {children}
    </div>
  );
};
