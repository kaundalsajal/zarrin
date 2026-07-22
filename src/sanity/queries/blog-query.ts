import { defineQuery } from "next-sanity";

export const BLOGS_QUERY = defineQuery(
  '*[_type=="blog"]|order(createdAt desc)[$start...$end]',
);

export const BLOG_QUERY = defineQuery(
  '*[_type=="blog" && slug.current==$slug][0]'
)