import { defineQuery } from "next-sanity";

export const POPULAR_POST_QUERY = defineQuery(
  '*[_type=="blog" && isPopular==true]|order(createdAt desc)',
);
