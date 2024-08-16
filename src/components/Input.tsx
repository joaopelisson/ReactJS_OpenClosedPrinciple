import { InputHTMLAttributes } from "react";

type TInput = InputHTMLAttributes<HTMLInputElement>;

interface IInputLabel {
  children: React.ReactNode;
  id?: string;
}

function InputLabel({ children, id }: Readonly<IInputLabel>) {
  return <label htmlFor={id}>{children}</label>;
}

function Input({ children, id, ...rest }: Readonly<TInput>) {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      {children}
      <input {...rest} type="text" id={id} />
    </div>
  );
}
export { Input, InputLabel };
