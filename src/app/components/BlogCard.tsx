import React from "react";
import { Post } from "../data/home-page";
import Image from "next/image";
import Link from "next/link";
import Typography from "./typography/Typography";

function BlogCard({ post }: { post: Post }) {
  return (
    <div className="max-w-100">
      <div>
        <Image alt="Post Image" src={post.image} width={400} height={360} />
      </div>
      <div className="mt-10 flex gap-3">
        <Typography variant="overline" className="font-bold">
          {post.category}
        </Typography>
        <Typography
          variant="overline"
          color="muted"
          className="font-medium"
        >
          {post.date}
        </Typography>
      </div>
      <div className="mt-4">
        <Typography variant="h6" className="font-bold">
          {post.title}
        </Typography>
      </div>
      <div className="mt-4">
        <Typography variant="body-sm" color="secondary">
          {post.description}
        </Typography>
      </div>
      <div className="mt-4.75">
        <Link href={`blog/${post.id}`}>
          <Typography
            variant="body-lg"
            color="primary"
            className="underline font-heading font-bold"
          >
            Read More...
          </Typography>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
