import Image from "next/image";
import Link from "next/link";
import Typography from "./typography/typography";
import { Blog } from "../../sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { formatDate } from "@/utils/format-date";

function BlogCard({ blog }:{blog:Blog}) {
  return (
    <div className="max-w-190 md:max-w-100 relative flex flex-col justify-between hover:scale-103 transition-all duration-400">
      <Link href={`/blog/${blog.slug?.current}`}>
        <Image
          alt="Post Image"
          src={blog.cardImage?urlFor(blog.cardImage).url() : ""}
          width={400}
          height={360}
          className="animate-image"
        />{" "}
        {/*TODO: remove optional chaining in src */}
        <div className="mt-10 flex gap-3">
          <Typography variant="overline" className="font-bold">
            {blog?.category || "Blog Category"}
          </Typography>
          <Typography variant="overline" color="muted" className="font-medium">
            {formatDate(blog?.createdAt)}
          </Typography>
        </div>
        <div className="mt-4">
          <Typography variant="h6" className="font-bold line-clamp-2">
            {blog.title}
          </Typography>
        </div>
        <div className="mt-4">
          <Typography
            variant="body-sm"
            color="secondary"
            className="line-clamp-3"
          >
            {blog.excerpt}
          </Typography>
        </div>
      </Link>
      <div className="mt-4.75">
        <Link href={`/blog/${blog.slug?.current}`}>
          <Typography
            variant="body-lg"
            color="primary"
            className="underline font-heading font-bold"
          >
            Read More
          </Typography>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
