import React from "react";
import clsx from "clsx";

type Variant = "purple" | "white" | "purpleOutline" | "whiteOutline";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant: Variant;
}

function Button({ variant, className = "", children, ...props }: ButtonProps) {
  const baseStyle =
    "rounded-[8px] flex justify-center items-center cursor-pointer transition-all duration-400";
  const variants = {
    purple:
      "bg-primary text-white hover:bg-white hover:border hover:text-primary",
    white:
      "bg-white text-[#373737] hover:bg-primary hover:border hover:text-white",
    purpleOutline: "border text-primary hover:bg-primary hover:text-white",
    whiteOutline:
      "border text-white hover:bg-white hover:border-0 hover:text-[#373737]",
  };
  return (
    <button
      className={clsx(baseStyle, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
