import { defineQuery } from "next-sanity";

export const NEWSLETTER_QUERY = defineQuery(
  '*[_type=="newsletter"]{_id,title,description}',
);
