import { client } from "@/sanity/lib/client";
import React from "react";
import type { BLOG_QUERY_RESULT, BlogSection, PAGE_QUERY_RESULT } from "../../sanity.types";
import { BLOG_QUERY } from "@/sanity/queries/blog-query";
import Typography from "./typography/typography";
import { formatDate } from "@/utils/format-date";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText, PortableTextComponents } from "next-sanity";
import BlogParagraph from "./blog-paragraph";
import BlogQuote from "./blog-quote";
import { notFound } from "next/navigation";

interface BlogSectionProps {
  blogSlug?:string,
  section: Extract<
  NonNullable<NonNullable<PAGE_QUERY_RESULT>["sections"]>[number],
  { _type: "blogSection" }
>}

async function BlogSection({ blogSlug, section }: BlogSectionProps) {
  if(!blogSlug){
    blogSlug = section?.blog?.slug?.current || ""
  }
  const blog = await client.fetch<BLOG_QUERY_RESULT>(BLOG_QUERY, {
    slug: blogSlug,
  });
  if(!blog){
    notFound()
  }
  const components: PortableTextComponents = {
    types: {
      customImage: ({ value }) => {
        // console.log(value);
        return (
          <div className="my-8 md:my-0 md:mt-5 lg:mt-10">
            <Image
              alt={value.alt || ""}
              src={urlFor(value).url()}
              height={312}
              width={816}
              className="rounded-2xl mx-auto "
            />
          </div>
        );
      },
      quote: ({ value }) => <BlogQuote value={value} />,
    },
    block: {
      h1: ({ children }) => <Typography variant="h1">{children}</Typography>,

      h2: ({ children }) => <Typography variant="h2">{children}</Typography>,

      h3: ({ children }) => <Typography variant="h3">{children}</Typography>,

      h4: ({ children }) => <Typography variant="h4">{children}</Typography>,

      h5: ({ children }) => <Typography variant="h5">{children}</Typography>,

      h6: ({ children }) => <Typography variant="h6">{children}</Typography>,

      normal: ({ children }) => <BlogParagraph>{children}</BlogParagraph>,
    },
  };

  return (
    <section
      id={section.id}
      className="max-w-360 mx-auto flex flex-col mt-3 md:mt-18 px-5 md:px-18.75 lg:px-26"
    >
      {section.label && (
        <Typography variant="h3" className="font-bold">
          {section.label}
        </Typography>
      )}
      <div className="max-w-5xl  mt-10 flex gap-3">
        <Typography variant="overline" className="font-bold">
          {blog?.category || "Blog Category"}
        </Typography>
        <Typography variant="overline" color="muted" className="font-medium">
          {formatDate(blog?.createdAt) || "Blog Date"}
        </Typography>
      </div>
      <div className="max-w-5xl mt-4">
        <Typography variant="h3" className="font-bold">
          {blog?.title || "Blog Title"}
        </Typography>
      </div>

      <div className="mx-6 md:mx-auto ">
        <Image
          alt={blog?.heroImage?.alt || "Hero Image"}
          src={blog?.heroImage ? urlFor(blog.heroImage).url() : ""}
          height={608}
          width={1232}
          className="rounded-2xl mt-8.25 md:mt-0[46px] lg:mt-14"
        />
      </div>
      <div className="px-5 md:px-18.75 lg:px-26 mx-auto">
        {blog?.body && (
          <PortableText value={blog.body} components={components} />
        )}
      </div>
    </section>
  );
}

export default BlogSection;
