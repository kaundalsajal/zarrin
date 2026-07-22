import React from "react";
import type { ImageSection, PAGE_QUERY_RESULT } from "../../sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type ImageSectionProps = Extract<
  NonNullable<NonNullable<PAGE_QUERY_RESULT>["sections"]>[number],
  { _type: "imageSection" }
>;

function ImageSection({ section }: { section: ImageSectionProps }) {
  return (
    <section
      id={section.id}
      className="max-w-360 px-5 md:px-18.75 lg:px-26 mx-auto pt-15 md:pt-18"
    >
      <Image
        alt={section.displayImage?.alt || "About Us Image"}
        src={section.displayImage ? urlFor(section.displayImage).url() : ""}
        height={608}
        width={1232}
        className="rounded-2xl mt-15 md:mt-21.75 lg:mt-30.75 animate-image"
      />
    </section>
  );
}

export default ImageSection;
