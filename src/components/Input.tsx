import { Lock } from "lucide-react";
import { InputHTMLAttributes } from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  showLeftIcon?: boolean;
}

function Input({ label, showLeftIcon, ...rest }: Readonly<IInput>) {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {label && <label htmlFor="input-with-label">{label}</label>}
        <input {...rest} type="text" id="input-with-label" />
      </div>
      {showLeftIcon && (
        <div>
          <Lock />
        </div>
      )}
    </>
  );
}
export { Input };
