import Image from "next/image";
import Button from "./ui/button";
import Typography from "./typography/typography";
import { blogs } from "@/data/blog-data";
import Link from "next/link";
import { PAGE_QUERY_RESULT } from "../../sanity.types";
import { urlFor } from "@/sanity/lib/image";

type HeroSectionProps = Extract<
  NonNullable<NonNullable<PAGE_QUERY_RESULT>["sections"]>[number],
  { _type: "heroSection" }
>;

function Hero({ section }: { section: HeroSectionProps }) {

  return (
    <section
      id={section.id}
      className="w-full relative flex flex-col items-center bg-primary overflow-hidden"
    >
      <div className="hidden md:block absolute -top-20 -left-50">
        <Image
          alt="Waves Design"
          src="/hero/wave-design.png"
          width={685}
          height={378}
          loading="eager"
        />
      </div>
      <div className="py-10.25 md:py-22 lg:py-30.5 px-6 md:px-18.5 lg:px-26 flex justify-center md:flex-row flex-col gap-11.5">
        <div className="max-w-145 animate-slide-in-left">
          <div>
            <Typography variant="body-sm" color="white">
              {section.label}
            </Typography>
          </div>
          <div>
            <Typography variant="h1" color="white" className="font-bold">
              {section.blog?.title}
            </Typography>
          </div>
          <div className="mt-4.75 lg:mt-7 max-w-104">
            <Typography
              variant="body-sm"
              color="white"
              className="font-heading line-clamp-4"
            >
              {section.blog?.excerpt}
            </Typography>
          </div>
          <div className="mt-6.5 md:mt-11.75 lg:mt-16">
            <Link href={`/blog/${section.blog?.slug?.current}`}>
              <Button
                variant="white"
                className="w-30.5 h-9.5 lg:w-42.5 lg:h-13.25"
              >
                <Typography variant="button" className="font-weight-bold">
                  {section.ctaButton?.label}
                </Typography>
              </Button>
            </Link>
          </div>
        </div>
        <div className="container max-w-152">
          <Image
            alt={section.featuredImage?.alt || "Hero Image"}
            src={
              section.featuredImage ? urlFor(section.featuredImage).url() : ""
            }
            height={576}
            width={608}
            className="animate-image"
          />
        </div>
      </div>
      <div className="hidden md:block absolute rotate-180 -bottom-22.5 -right-50">
        <Image
          alt="Waves Design"
          src="/hero/wave-design.png"
          width={685}
          height={378}
          loading="eager"
        />
      </div>
    </section>
  );
}

export default Hero;
