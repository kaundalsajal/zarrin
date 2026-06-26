import React from 'react'
type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body-lg"
  | "body-sm"
  | "caption"
  | "button"
  | "overline";

function Typography({ variant, children, color="text-primary", className = ""}: {
  variant: TypographyVariant,
  children: React.ReactNode,
  color?: "primary" | "text-primary" | "text-secondary" | "text-muted" | "white" ,
  className?: string
}) {

  const styles = {
    h1: "font-heading text-[64px]",
    h2: "font-heading text-[52px]",
    h3: "font-heading text-[48px]",
    h4: "font-heading text-[32px]",
    h5: "font-heading text-[26px]",
    h6: "font-heading text-[24px]",

    "body-lg": "font-body text-[18px] leading-6",
    "body-sm": "font-body text-[16px] leading-6",

    caption: "font-body text-[14px]",
    button: "font-body text-[16px] font-medium font-weight-bold",
    overline: "font-body text-[12px]",
  };
  return (
    <span className={` ${styles[variant]} text-${color} ${className}`}>
      {children}
    </span>
  )
}

export default Typography
