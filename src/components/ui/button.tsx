import React from "react";
import clsx from "clsx";

type Variant = "purple" | "white" | "purpleOutline" | "whiteOutline";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant: Variant;
}

function Button({ variant, className = "", children, ...props }: ButtonProps) {
  const baseStyle =
    "rounded-[8px] flex justify-center items-center cursor-pointer transition-all ease-in duration-300";
  const variants = {
    purple:
      "bg-primary text-white hover:bg-white border border-primary hover:text-primary",
    white:
      "bg-white text-[#373737] hover:bg-primary border border-white hover:text-white",
    purpleOutline: "border text-primary hover:bg-primary hover:border-primary hover:text-white",
    whiteOutline:
      "border text-white hover:bg-white hover:border-white hover:text-[#373737]",
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
