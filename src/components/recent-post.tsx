import Button from "./ui/button";
import Image from "next/image";
// import { blogs } from "../data/blog-data";
import BlogCard from "./blog-card";
import Typography from "./typography/typography";
import Link from "next/link";
// import {
//   recentPostPageButtonText,
//   recentPostPageTitle,
// } from "@/data/pages-data";
import {
  PAGE_QUERY_RESULT,
  RECENT_POST_QUERY_RESULT,
} from "../../sanity.types";
import { client } from "@/sanity/lib/client";
import { RECENT_POST_QUERY } from "@/sanity/queries/recent-post-query";
import { urlFor } from "@/sanity/lib/image";
import { formatDate } from "@/utils/format-date";

async function RecentBlog({
  section,
}: {
  section: Extract<
    NonNullable<NonNullable<PAGE_QUERY_RESULT>["sections"]>[number],
    { _type: "recentPostsSection" }
  >;
}) {
  const recentBlogs = (
    await client.fetch<RECENT_POST_QUERY_RESULT>(RECENT_POST_QUERY)
  )
    .filter((blog) => !blog.isFeatured && blog.slug != section.blog?.slug)
    .slice(0, section.postCount);

  // console.log("no of posts",recentBlogs.length)
  // const featuredPost = blogs.find((blog) => blog.isFeatured);

  return (
    <div className="max-w-360 lg:mt-20.25 px-5 md:px-18.75 lg:px-26 mx-auto">
      <div className="flex justify-between items-center">
        <Typography variant="h3" className="font-bold">
          {section.label || "Our Recent Post"}
        </Typography>
        <Button
          variant="purple"
          className="h-9.5 w-26.25 lg:h-13.25 lg:w-36.75"
        >
          <Typography variant="button" color="white">
            {section.ctaButton?.label}
          </Typography>
        </Button>
      </div>
      <div className="mt-16 lg:mt-22.5 hidden md:flex md:flex-row flex-col gap-14">
        <div className="basis-550">
          <Image
            alt={section.featuredImage?.alt || "Recent Post"}
            src={
              section.featuredImage ? urlFor(section.featuredImage).url() : ""
            }
            height={456}
            width={712}
          />
        </div>
        <div>
          <div className="flex gap-3">
            <Typography variant="overline" className="font-bold">
              {section.blog?.category}
            </Typography>
            <Typography variant="overline" className="text-text-muted">
              {formatDate(section.blog?.createdAt)}
            </Typography>
          </div>
          <div className="mt-4">
            <Typography variant="h4" className="font-bold">
              {section.blog?.title}
            </Typography>
          </div>
          <div className="mt-3">
            <Typography variant="body-sm" className="line-clamp-5">
              {section.blog?.excerpt}
            </Typography>
          </div>
          <div className="mt-6 lg:mt-9.5">
            <Link href={`/blog/${section.blog?.slug?.current}`}>
              <Button variant="purpleOutline" className="w-31.25 h-10">
                <Typography variant="button" color="primary">
                  {section.ctaButton?.label}
                </Typography>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Post Cards */}

      <div className="mt-15.75 grid place-items-center md:grid-cols-3 tablet-sm:grid-cols-2 grid-cols-1 gap-4 gap-y-10">
        {recentBlogs.map((post, index) => (
          <BlogCard blog={post} key={index} />
        ))}
      </div>
    </div>
  );
}

export default RecentBlog;
