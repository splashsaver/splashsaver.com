interface InputProps {
  className?: string;
  placeholder?: string;
  id?: string | undefined;
  type?: React.HTMLInputTypeAttribute | undefined;
  required?: boolean | undefined;
  name?: string | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string | number | readonly string[] | undefined;
}

export const Input = ({
  className,
  placeholder,
  type,
  required,
  id,
  value,
  name,
  onChange,
}: InputProps) => {
  return (
    <input
      className={`flex items-center border border-stone-700 text-sm  outline-none text-white bg-stone-900 justify-center duration-300 rounded p-1 h-8 px-3 ${className}`}
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    />
  );
};
