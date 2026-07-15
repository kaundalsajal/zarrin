import Image from "next/image";
import { blogs } from "../data/blog-data";
import Button from "./ui/butto";
import Typography from "./typography/typograph";
import Link from "next/link";
function FeaturedBlog() {
  const featuredBlog = blogs.find((blog) => blog.isFeatured);
  return (
    <div className="container flex justify-center max-w-360 my-10.5 md:my-23.5 lg:my-32.75 px-6 md:px-18.5 lg:px-26 ">
      <div className=" max-w-360 flex flex-col p-4.5 md:p-0 md:border-0 border border-gray-300 rounded-[11px] md:rounded-0 md:relative md:pb-32">
        <Image
          alt="Featured Blog Image"
          src={featuredBlog?.featuredImage || ""}
          height={576}
          width={1232}
        />
        <div className="md:absolute md:bottom-0 md:right-0 w-full md:w-[80%]  md:rounded-2xl p-4 md:p-8 bg-white ">
          <div className="flex gap-3">
            <Typography variant="overline" className="font-bold">
              {featuredBlog?.category}
            </Typography>
            <Typography variant="overline" className="text-text-muted">
              {featuredBlog?.date}
            </Typography>
          </div>
          <div className="mt-4 lg:mt-6.25">
            <Typography
              variant="h4"
              className="font-bold leading-8 lg:leading-11.25"
            >
              {featuredBlog?.title}
            </Typography>
          </div>
          <div className="mt-3.5">
            <Typography variant="body-sm" className="line-clamp-3">
              {featuredBlog?.content?.[0].text}
            </Typography>
          </div>
          <div className="mt-5 lg:mt-12">
            <Link href={`/blog/${featuredBlog?.slug}`}>
              <Button variant="purpleOutline" className="h-10 w-31.25">
                <Typography variant="button" color="primary">
                  {featuredBlog?.buttonText}
                </Typography>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedBlog;
