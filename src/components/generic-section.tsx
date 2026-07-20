import React from "react";
import Typography from "./typography/typography";
import type { GenericSection } from "../../sanity.types";
import Link from "next/link";
import Button from "./ui/button";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

function GenericSection({ section }: { section: GenericSection }) {
  const layout = section.layoutType || "splitImageRight";

  const isHero = layout === "hero";
  const isTextBlock = layout === "textBlock";
  const isCentered = isHero || isTextBlock;
  const hasInlineImage =
    layout !== "textBlock" && layout !== "hero" && section.mainImage;

  // 1. Text color assignment (White for full-bleed hero, default text color for others)
  const textColorClass = isHero ? "text-white" : "text-inherit";

  // 2. Main wrapper structure classes
  const sectionClasses = isHero
    ? "relative min-h-[70vh] flex items-center justify-center overflow-hidden w-full py-20 pt-15 md:pt-18"
    : `max-w-360 px-5 md:px-18.75 lg:px-26 mx-auto mt-15 md:mt-18 relative ${
        isCentered
          ? "flex flex-col items-center text-center justify-center"
          : layout === "splitImageLeft"
            ? "flex flex-col md:flex-row-reverse items-center justify-between"
            : "flex flex-col md:flex-row items-center justify-between"
      }`;

  // 3. Inner text shell width limits
  const contentWidthClasses = isTextBlock
    ? "max-w-2xl w-full"
    : isHero
      ? "max-w-3xl w-full px-5 md:px-18.75 lg:px-26 mx-auto text-center"
      : "max-w-145 w-full";

  return (
    <section id={section.id} className={sectionClasses}>
      {/* BACKGROUND IMAGE RENDER (Only for 'hero' layout style) */}
      {isHero && section.mainImage && (
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            alt={section.mainImage?.alt || "Hero Background"}
            src={urlFor(section.mainImage).url()}
            fill
            priority
            className="object-cover object-center w-full h-full"
          />
          {/* Dark overlay mask to guarantee accessible type contrast ratios */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        </div>
      )}

      {/* TEXT CONTENT CONTAINER */}
      <div
        className={`relative z-10 ${contentWidthClasses} ${textColorClass} animate-slide-in-left flex flex-col ${isCentered ? "items-center" : ""}`}
      >
        {section.subTitle && (
          <div>
            {/* Added dynamic color class to match layout styling context */}
            <Typography variant="body-sm" className={textColorClass}>
              {section.subTitle}
            </Typography>
          </div>
        )}

        {section.title && (
          <div className={isCentered ? "mt-2" : ""}>
            <Typography variant="h1" className={`font-bold ${textColorClass}`}>
              {section.title}
            </Typography>
          </div>
        )}

        {section.body && (
          <div
            className={`mt-4.75 lg:mt-7 ${isCentered ? "max-w-2xl" : "max-w-104"}`}
          >
            <Typography
              variant="body-sm"
              className={`font-heading line-clamp-4 ${textColorClass}`}
            >
              {section.body}
            </Typography>
          </div>
        )}

        {section.ctaLink && (
          <div className="mt-6.5 md:mt-11.75 lg:mt-16">
            <Link href={section.ctaLink}>
              <Button
                variant={isHero ? "purple" : "purpleOutline"} // Adjust variant style for visual balance on dark background
                className="w-30.5 h-9.5 lg:w-42.5 lg:h-13.25"
              >
                <Typography variant="button" className="font-weight-bold">
                  {section.ctaLabel}
                </Typography>
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* INLINE IMAGE CONTAINER (Only for standard split screen layouts) */}
      {hasInlineImage && (
        <div className="container max-w-152 mt-8 md:mt-0">
          <Image
            alt={section.mainImage?.alt || "Section Image"}
            src={section.mainImage ? urlFor(section.mainImage).url() : ""}
            height={576}
            width={608}
            className="animate-image w-full h-auto object-cover rounded-2xl"
          />
        </div>
      )}
    </section>
  );
}

export default GenericSection;
