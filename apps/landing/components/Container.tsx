export const Container = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex justify-center w-screen h-screen items-center pt-14">
      {children}
    </div>
  );
};
