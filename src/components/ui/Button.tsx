import React from "react";
import clsx from "clsx";
type Variant = "purple" | "white" | "purpleOutline" | "whiteOutline";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant: Variant;
}

function Button({ variant, className = "", children, ...props }: ButtonProps) {
  const baseStyle = "rounded-[8px] ";
  const variants = {
    purple: "bg-primary text-white",
    white: "bg-white text-[#373737]",
    purpleOutline: "border text-primary",
    whiteOutline: "border text-white",
  };
  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className} flex justify-center items-center cursor-pointer 
      ${clsx(
        variant === "purple"
          ? "hover:bg-white hover:border hover:text-primary"
          : variant === "white"
            ? "hover:bg-primary hover:border hover:text-white"
            : variant === "purpleOutline"
              ? "hover:bg-primary hover:text-white"
              : "hover:bg-white hover:border-0 hover:text-[#373737]",
      )}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
