interface InfoPageWrapperProps {
  title: string;
  children?: React.ReactNode;
}

export const InfoPageWrapper = ({ title, children }: InfoPageWrapperProps) => {
  return (
    <div className="pt-36 flex flex-col">
      <h1 className="text-white font-bold text-3xl">{title}</h1>
      {children}
    </div>
  );
};
