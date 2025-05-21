import { ComponentPropsWithoutRef } from "react";

// prop types
type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">; // withref adds ref prop to list of accepted props where as without ref doesnt

function Input({ label, id, ...props }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </p>
  );
}

export default Input;
