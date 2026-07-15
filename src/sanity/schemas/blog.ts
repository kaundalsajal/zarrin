import { defineField, defineType } from "sanity";

// slug: "p4",
//     category: "Sports",
//     date: "10 March 2023",
//     title: "How to Be a Professional Footballer in 2023",
//     heroImage: "/posts/recent-post-image.png",
//     cardImage: "/posts/recent-post-3.png",

export const blog = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "createdAt",
      type: "date",
      initialValue: new Date().toISOString().split("T")[0],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroImage",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "cardImage",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "isFeatured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "isPopular",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }, { type: "image" }, { type: "quote" }],
    }),
  ],
});
