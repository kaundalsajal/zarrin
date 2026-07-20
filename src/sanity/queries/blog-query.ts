import { defineQuery } from "next-sanity";

export const BLOG_QUERY = defineQuery('*[_type=="blog"]|order(createdAt desc)')