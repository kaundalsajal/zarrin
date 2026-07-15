import Typography from "@/components/typography/ty";
import { blogs, blogsSection } from "@/data/blog-data";
import BlogCard from "@/components/blog-card";

function Page() {
  return (
    <div className="container max-w-360 items-center mx-auto px-5 md:px-18.75 lg:px-26">
      <div className="mt-15 md:mt-18 flex flex-col justify-center items-center">
        <Typography
          variant="body-sm"
          color="secondary"
          className="font-heading font-bold"
        >
          {blogsSection.overline}
        </Typography>
        <Typography
          variant="h3"
          className="font-bold font-heading max-w-182 text-center mt-4.5 lg:mt-6.25"
        >
          {blogsSection.title}
        </Typography>
        <Typography
          variant="body-sm"
          color="secondary"
          className="max-w-252.5 font-heading text-center mt-6 md:mt-4 lg:mt-6"
        >
          {blogsSection.description}
        </Typography>
      </div>
      <div className="mt-15.75 grid place-items-center md:grid-cols-3 tablet-sm:grid-cols-2 grid-cols-1 gap-4 gap-y-10">
        {blogs.map((blog, index) => (
          <BlogCard post={blog} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Page;
