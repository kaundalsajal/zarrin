import Button from "./ui/Button";
import Image from "next/image";
import { blogs } from "../data/blog-data";
import BlogCard from "./BlogCard";
import Typography from "./typography/Typography";
import Link from "next/link";
import { recentPostPageButtonText, recentPostPageTitle } from "@/data/pagesdata-data";

function RecentBlog() {

  const recentBlogs = blogs.sort((a,b)=>new Date(b.date).getTime() - new Date(a.date).getTime()).slice(1,4)
  const featuredPost = blogs.find((blog)=>blog.isFeatured)
  return (
    <div className="container max-w-360 lg:mt-20.25 px-5 md:px-18.75 lg:px-26">
      <div className="flex justify-between items-center">
        <Typography variant="h3" className="font-bold">
          {recentPostPageTitle}
        </Typography>
        <Button
          variant="purple"
          className="h-9.5 w-26.25 lg:h-13.25 lg:w-36.75"
        >
          <Typography variant="button" color="white">
            {recentPostPageButtonText}
          </Typography>
        </Button>
      </div>
      <div className="mt-16 lg:mt-22.5 hidden md:flex md:flex-row flex-col gap-14">
        <div className="basis-550">
          <Image
            alt="Recent Post"
            src={featuredPost?.heroImage || ""}
            height={456}
            width={712}
          />
        </div>
        <div>
          <div className="flex gap-3">
            <Typography variant="overline" className="font-bold">
              {featuredPost?.category}
            </Typography>
            <Typography variant="overline" className="text-text-muted">
              {featuredPost?.date}
            </Typography>
          </div>
          <div className="mt-4">
            <Typography variant="h4" className="font-bold">
              {featuredPost?.title}
            </Typography>
          </div>
          <div className="mt-3">
            <Typography variant="body-sm" className="line-clamp-5">
              {featuredPost?.content?.[0].text}
            </Typography>
          </div>
          <div className="mt-6 lg:mt-9.5">
            <Link href={`/blog/${featuredPost?.slug}`}>
            <Button variant="purpleOutline" className="w-31.25 h-10">
              <Typography variant="button" color="primary">
                {featuredPost?.buttonText}
              </Typography>
            </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Post Cards */}

      <div className="mt-15.75 grid place-items-center md:grid-cols-3 tablet-sm:grid-cols-2 grid-cols-1 gap-4 gap-y-10">
        {recentBlogs.map((post, index) => (
          <BlogCard post={post} key={index} />
        ))}
      </div>
    </div>
  );
}

export default RecentBlog;
