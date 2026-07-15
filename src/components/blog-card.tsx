import { Blog } from "../data/blog-data";
import Image from "next/image";
import Link from "next/link";
import Typography from "./typography/typograph";

function BlogCard({ post }: { post: Blog }) {
  return (
    <div className="max-w-190 md:max-w-100 relative hover:scale-103 transition-all duration-400">
      <Link href={`/blog/${post.slug}`}>
        <Image
          alt="Post Image"
          src={post.cardImage || ""}
          width={400}
          height={360}
          className="w-full h-full animate-image"
        />{" "}
        {/*TODO: remove optional chaining in src */}
        <div className="mt-10 flex gap-3">
          <Typography variant="overline" className="font-bold">
            {post?.category || "Blog Category"}
          </Typography>
          <Typography variant="overline" color="muted" className="font-medium">
            {post?.date || "Blog Date"}
          </Typography>
        </div>
        <div className="mt-4">
          <Typography variant="h6" className="font-bold line-clamp-2">
            {post?.title || "Blog Title"}
          </Typography>
        </div>
        <div className="mt-4">
          <Typography
            variant="body-sm"
            color="secondary"
            className="line-clamp-3"
          >
            {post?.content?.[0].text || "Blog Content"}
          </Typography>
        </div>
      </Link>
      <div className="mt-4.75">
        <Link href={`/blog/${post.slug}`}>
          <Typography
            variant="body-lg"
            color="primary"
            className="underline font-heading font-bold"
          >
            {post.buttonText}
          </Typography>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
