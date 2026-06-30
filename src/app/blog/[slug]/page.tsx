import { blogs} from "@/data/blog-data";
import Typography from "@/components/typography/Typography";
import BlogParagraph from "@/components/BlogParagraph";
import BlogQuote from "@/components/BlogQuote";
import Image from "next/image";
import PopularPost from "@/components/PopularPost";

async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blogPost = blogs.find((blog) => blog.slug === slug);

  return (
    <div className="container max-w-360 mx-auto flex flex-col items-center">
      <div className="mt-15 md:mt-18 mx-auto px-5 md:px-18.75 lg:px-26">
        <div className="mt-10 flex gap-3">
          <Typography variant="overline" className="font-bold">
            {blogPost?.category || "Blog Category"}
          </Typography>
          <Typography variant="overline" color="muted" className="font-medium">
            {blogPost?.date || "Blog Date"}
          </Typography>
        </div>
        <div className="mt-4">
          <Typography variant="h3" className="font-bold line-clamp-2">
            {blogPost?.title || "Blog Title"}
          </Typography>
        </div>
      </div>

      <div className="mx-6 md:mx-auto ">
        <Image
          alt="Featured Image"
          src={blogPost?.heroImage || ""}
          height={608}
          width={1232}
          className="rounded-2xl mt-8.25 md:mt-0[46px] lg:mt-14"
        />
      </div>
      <div className="px-5 md:px-18.75 lg:px-26 mx-auto">
        {blogPost?.content?.map((content, index) => {
          if (content.type === "paragraph") {
            return <BlogParagraph content={content} key={index} />;
          } else if (content.type === "quote") {
            return <BlogQuote content={content} key={index} />;
          } else if (content.type === "image") {
            return (
              <Image
                key={index}
                alt="Blog Image"
                src={content.src || ""}
                height={312}
                width={816}
                className="rounded-2xl mx-auto my-8 md:my-0 md:mt-5 lg:mt-10"
              />
            );
          }
        })}
      </div>
      <PopularPost blogCount={3}/>
    </div>
  );
}

export default Page;
