import Button from "./ui/button";
import BlogCard from "./blog-card";
import Typography from "./typography/typography";
import {
  PAGE_QUERY_RESULT,
  POPULAR_POST_QUERY_RESULT,
} from "../../sanity.types";
import { client } from "@/sanity/lib/client";
import { POPULAR_POST_QUERY } from "@/sanity/queries/popular-post-query";
import Link from "next/link";

type PopularPostProps = {
  section: Extract<
    NonNullable<NonNullable<PAGE_QUERY_RESULT>["sections"]>[number],
    { _type: "popularPostsSection" }
  >;
  currentPost?: string;
};

async function PopularPost({ section, currentPost }: PopularPostProps) {
  const queryResult =
    await client.fetch<POPULAR_POST_QUERY_RESULT>(POPULAR_POST_QUERY);

  let popularPost = queryResult.slice(0, section.postCount);

  if (currentPost) {
    popularPost = queryResult
      .filter((blog) => blog.isPopular && blog.slug?.current !== currentPost)
      .slice(0, section.postCount);
  }

  return (
    <section className="max-w-360 mt-24.5 px-5 md:px-18.75 lg:px-26 mx-auto">
      <div className="continer flex justify-between">
        <Typography variant="h3" className="font-bold">
          {section.label}
        </Typography>
        <Link href={section.ctaButton?.href || "/"}>
          <Button
            variant="purple"
            className="h-9.5 w-26.25 lg:h-13.25 lg:w-36.75"
          >
            <Typography variant="button" color="white">
              {section.ctaButton?.label}
            </Typography>
          </Button>
        </Link>
      </div>
      <div className="mt-15.25 grid place-items-center  md:grid-cols-3 tablet-sm:grid-cols-2 grid-cols-1 gap-4 gap-y-10">
        {popularPost?.map((blog, index) => (
          <BlogCard blog={blog} key={index} />
        ))}
      </div>
    </section>
  );
}

export default PopularPost;
