import React from "react";

interface inputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  label: string;
}
export const Input: React.FC<inputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  disabled,
  label,
}) => {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full
          rounded-md
          bg-black
          border-2
          border-neutral-600
          text-lg
          p-4
          focus:border-sky-400
          text-white
          focus:border-2
          outline-none
          transition
          disabled:bg-neutral-900
          disabled:opacity-70
          disabled:cursor-not-allowed
          "
      />
    </>
  );
};
