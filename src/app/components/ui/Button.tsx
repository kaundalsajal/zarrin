import React from 'react'

type Variant = "purple" | "white" | "purpleOutline" | "whiteOutline"

interface ButtonProps extends React.ComponentProps<"button"> {
  variant: Variant;
}

function Button({ variant, className = "", children, ...props }: ButtonProps) {
  const baseStyle = "rounded-[8px] "
  const variants = {
    purple: "bg-primary text-white",
    white: "bg-white text-text-primary",
    purpleOutline: "border text-primary",
    whiteOutline: "border text-white"
  }
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
