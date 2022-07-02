export const Container = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string | undefined;
}) => {
  return (
    <div className={`flex flex-col h-screen items-center w-full ${className}`}>
      {children}
    </div>
  );
};
