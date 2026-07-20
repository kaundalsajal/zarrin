import { defineQuery } from "next-sanity";

export const RECENT_POST_QUERY = defineQuery(
  '*[_type=="blog" && isPopular == false]|order(createdAt desc)',
);
