import React from "react";
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
  | "overline"
  | "blog-paragraph";

function Typography({
  variant,
  children,
  color = "foreground",
  className = "",
}: {
  variant: TypographyVariant;
  children: React.ReactNode;
  color?: "primary" | "foreground" | "secondary" | "muted" | "white";
  className?: string;
}) {
  const styles = {
    h1: "font-heading text-[36px] md:text-[46px] lg:text-[64px]",
    h2: "font-heading text-[32px] md:text-[42px] lg:text-[52px]", // Added responsive scale for consistency
    h3: "font-heading text-[24px] md:text-[37px] lg:text-[48px]",
    h4: "font-heading text-[24px] lg:text-[32px]",
    h5: "font-heading text-[20px] lg:text-[26px]", // Added responsive scale for consistency
    h6: "font-heading text-[17px] lg:text-[24px]",

    "body-lg": "font-body text-[13px] lg:text-[18px] leading-6",
    "body-sm": "font-body text-[12px] lg:text-[16px] leading-6",

    caption: "font-body text-[14px]",
    button:
      "font-body text-[10px]  lg:text-[14px] font-medium font-weight-bold",
    overline: "font-body text-[8px] lg:text-[12px]",
    "blog-paragraph": "font-heading text-[13px] lg:text-[16px]",
  };

  if (variant === "button") {
    return (
      <span className={` ${styles[variant]} ${className}`}>{children}</span>
    );
  }
  return (
    <span className={` ${styles[variant]} text-${color} ${className}`}>
      {children}
    </span>
  );
}

export default Typography;
