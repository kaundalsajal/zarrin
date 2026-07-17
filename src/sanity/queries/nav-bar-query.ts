import { defineQuery } from "next-sanity";

export const NAV_BAR_QUERY = defineQuery(`*[_type=="navbar"]{_id,logo->{logo{asset,alt},logoText,logoLink},navLinks,ctaButton}`);
