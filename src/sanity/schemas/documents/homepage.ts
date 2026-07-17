import { defineField, defineType } from "sanity";

export const homepage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      type: "heroSection",
    }),

    defineField({
      name: "featuredPost",
      type: "featuredPostSection",
    }),

    defineField({
      name: "recentPosts",
      type: "recentPostsSection",
    }),

    defineField({
      name: "popularPosts",
      type: "popularPostsSection",
    }),
  ],
});
