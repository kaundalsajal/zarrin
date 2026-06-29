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
    h1: "font-heading text-[36px] md:text-[46px] lg:text-[64px]",
    h2: "font-heading text-[52px]",
    h3: "font-heading text-[34px] md:text-[37px] lg:text-[48px]",
    h4: "font-heading text-[24px] lg:text-[32px]",
    h5: "font-heading text-[26px]",
    h6: "font-heading text-[17px] lg:text-[24px]",

    "body-lg": "font-body text-[13px] lg:text-[18px] leading-6",
    "body-sm": "font-body text-[11px] lg:text-[16px] leading-6",

    caption: "font-body text-[14px]",
    button: "font-body text-[10px] md:text-[12px] lg:text-[16px] font-medium font-weight-bold",
    overline: "font-body text-[8px] lg:text-[12px]",
  };
  return (
    <span className={` ${styles[variant]} text-${color} ${className}`}>
      {children}
    </span>
  )
}

export default Typography
