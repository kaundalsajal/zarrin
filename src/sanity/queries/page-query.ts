import { defineQuery } from "next-sanity";

export const PAGE_QUERY = defineQuery(
  `*[_type == "page" && slug.current == $slug][0]{
    titleIsVisible,
    title,
    label,
    description,
    sections[]{
      ...,
      blog->
    }
  }`,
);

export const BLOGS_PAGE_QUERY = defineQuery(
  `*[_type == "page" && slug.current == "blog"][0]{
    titleIsVisible,
    title,
    label,
    description,
    sections[]{
      ...,
      blog->
    }
  }`
)

export const BLOG_PAGE_QUERY = defineQuery(
  `*[_type == "page" && slug.current == "blog/"][0]{
    titleIsVisible,
    title,
    label,
    description,
    sections[]{
      ...,
      blog->
    }
  }`
)
