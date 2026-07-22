import { client } from "@/sanity/lib/client";
import type { BlogCardSection, BLOGS_QUERY_RESULT } from "../../sanity.types";
import { BLOGS_QUERY } from "@/sanity/queries/blog-query";
import BlogCard from "./blog-card";
import Typography from "./typography/typography";


type BlogCardSectionProps = {
  // currentPage?:number,
  section:BlogCardSection
}

async function BlogCardSection({section}:BlogCardSectionProps) {
  const blogs = await client.fetch<BLOGS_QUERY_RESULT>(BLOGS_QUERY,{start:0,end:10});
  return (
    <section id={section.id} className="max-w-360 mx-auto px-5 md:px-18.75 lg:px-26">
      <div className="mt-15.75 grid  md:grid-cols-3 tablet-sm:grid-cols-2 grid-cols-1 gap-4 gap-y-10">
        {blogs.map((blog, index) => (
          <BlogCard blog={blog} key={index} />
        ))}
      </div>
      <div></div>
    </section>
  );
}

export default BlogCardSection;
