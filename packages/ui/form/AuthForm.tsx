interface AuthFormProps {
  children?: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
}

export const AuthForm = ({ children, onSubmit }: AuthFormProps) => {
  return (
    <form
      className="flex flex-col justify-center h-screen border-l pl-6 border-gray-900 ml-auto mr-12 w-96"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};
