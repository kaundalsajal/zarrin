import Button from "./ui/Button";
import BlogCard from "./BlogCard";
import Typography from "./typography/Typography";
import { blogs } from "@/data/blog-data";

function PopularPost({
  blogCount,
  currentPost,
}: {
  blogCount: number;
  currentPost?: string;
}) {
  let popularPost = blogs.filter((blog) => blog.isPopular).slice(0, blogCount);

  if (currentPost) {
    popularPost = blogs
      .filter((blog) => blog.isPopular && blog.slug !== currentPost)
      .slice(0, blogCount);
  }

  return (
    <div className="container max-w-360 mt-24.5 px-5 md:px-18.75 lg:px-26">
      <div className="continer flex justify-between">
        <Typography variant="h3" className="font-bold">
          Popular Post
        </Typography>
        <Button
          variant="purple"
          className="h-9.5 w-26.25 lg:h-13.25 lg:w-36.75"
        >
          <Typography variant="button" color="white">
            View All
          </Typography>
        </Button>
      </div>
      <div className="mt-15.25 grid place-items-center  md:grid-cols-3 grid-cols-1 md:gap-4 gap-y-11 ">
        {popularPost?.map((post, index) => (
          <BlogCard post={post} key={index} />
        ))}
      </div>
    </div>
  );
}

export default PopularPost;
