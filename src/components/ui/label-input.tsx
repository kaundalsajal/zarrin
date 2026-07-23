import React from "react";

interface LabelInputProps {
  label?: string;
  inputType?: "input" | "textarea";
  type?: React.HTMLInputTypeAttribute;
  name: string;
  id?: string;
  placeholder?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  rows?: number;
}

function LabelInput({
  label,
  inputType = "input",
  type = "text",
  name,
  id,
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  className = "",
  rows = 5,
}: LabelInputProps) {
  const inputId = id ?? name;

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={inputId}
          className="font-heading text-[16px] leading-7 text-[#4C4C4C]"
        >
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      {inputType === "textarea" ? (
        <textarea
          id={inputId}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          rows={rows}
          className={`w-full rounded-lg border border-[#C4C4C4] px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:bg-gray-100 ${className}`}
        />
      ) : (
        <input
          id={inputId}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={`w-full rounded-lg border border-[#C4C4C4] px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:bg-gray-100 ${className}`}
        />
      )}
    </div>
  );
}

export default LabelInput;
