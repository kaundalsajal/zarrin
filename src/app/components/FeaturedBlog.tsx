import Image from "next/image";
import React from "react";
import { featuredBlog } from "../data/home-page";
import Button from "./ui/Button";
import Typography from "./typography/Typography";
function FeaturedBlog() {
  return (
    <div className="container max-w-308 relative mt-32.75 pb-32">
      <Image
        alt="Featured Blog Image"
        src={featuredBlog.image}
        className="w-full h-auto"
        height={576}
        width={1232}
      />

      <div className="container md:absolute md:bottom-0 md:right-0 md:w-[70%] lg:w-[65%] h-[50%] rounded-2xl p-8 pr-26 bg-white">
        <div className="flex gap-3">
          <Typography variant="overline" className="font-bold">
            {featuredBlog.category}
          </Typography>
          <Typography variant="overline" className="text-text-muted">
            {featuredBlog.date}
          </Typography>
        </div>
        <div className="mt-4">
          <Typography variant="h4" className="font-bold leading-11.25">
            {featuredBlog.title}
          </Typography>
        </div>
        <div className="mt-3.5">
          <Typography variant="body-sm">{featuredBlog.description}</Typography>
        </div>
        <div className="mt-12">
          <Button variant="purpleOutline" className="h-10 w-31.25">
            <Typography variant="button" color="primary">
              {featuredBlog.buttonText}
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedBlog;
