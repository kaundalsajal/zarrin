import Typography from "@/components/typography/typography";
import { client } from "@/sanity/lib/client";
import { PAGE_QUERY } from "@/sanity/queries/page-query";
import React from "react";
import { PAGE_QUERY_RESULT } from "../../../../sanity.types";
import Hero from "@/components/hero";
import FeaturedBlog from "@/components/featured-blog";
import RecentBlog from "@/components/recent-post";
import PopularPost from "@/components/popular-post";
import GenericSection from "@/components/generic-section";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

async function Page({ params }: Props) {
  const { slug } = await params;
  const page: PAGE_QUERY_RESULT = await client.fetch(PAGE_QUERY, { slug });
  console.log(page);
  return (
    <div className="w-full">
      {page?.titleIsVisible && (
        <div className="max-w-360 px-5 md:px-18.75 lg:px-26 mx-auto mt-15 md:mt-18 flex flex-col justify-center items-center">
          {page?.subTitle && (
            <Typography
              variant="body-sm"
              color="secondary"
              className="font-heading font-bold"
            >
              {page.subTitle}
            </Typography>
          )}
          {page?.title && (
            <Typography
              variant="h3"
              className="font-bold font-heading max-w-182 text-center mt-4.5 lg:mt-6.25"
            >
              {page.title}
            </Typography>
          )}
          {page?.description && (
            <Typography
              variant="body-sm"
              color="secondary"
              className="max-w-252.5 font-heading text-center mt-6 md:mt-4 lg:mt-6"
            >
              {page.description}
            </Typography>
          )}
        </div>
      )}
      {page?.sections?.map((section, index) => {
        if (section._type === "heroSection") {
          return <Hero section={section} key={index} />;
        } else if (section._type === "featuredPostSection") {
          return <FeaturedBlog section={section} key={index} />;
        } else if (section._type === "recentPostsSection") {
          return <RecentBlog section={section} key={index} />;
        } else if (section._type === "popularPostsSection") {
          // return <PopularPost section={section} blogCount={4} key={index} />;
        } else if (section._type === "genericSection") {
          return <GenericSection key={index} section={section} />;
        } else {
          return <>{console.error("Unknown section type")}</>;
        }
      })}
    </div>
  );
}

export default Page;
