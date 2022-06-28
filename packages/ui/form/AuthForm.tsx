interface AuthFormProps {
  children?: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
}

export const AuthForm = ({ children, onSubmit }: AuthFormProps) => {
  return (
    <form
      className="flex flex-col justify-center border-l pl-6 border-stone-800 ml-auto mr-12 w-96"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};
