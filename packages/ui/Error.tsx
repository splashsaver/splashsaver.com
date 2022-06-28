interface ErrorProps {
  className?: string | undefined;
  message: string;
}

export const Error = ({ message, className }: ErrorProps) => {
  return <p className={`text-red-500 text-xs ${className}`}>{message}</p>;
};
