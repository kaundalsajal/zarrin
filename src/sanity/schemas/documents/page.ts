import { defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  type: "document",
  fields: [
    defineField({
      name: "titleIsVisible",
      type: "boolean",
      initialValue: false,
    }),
    defineField({ name: "label", type: "string" }),
    defineField({ name: "title", type: "string" }),
    defineField({ name: "description", type: "text" }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sections",
      type: "array",
      of: [
        { type: "heroSection" },
        { type: "featuredPostSection" },
        { type: "popularPostsSection" },
        { type: "recentPostsSection" },
        { type: "blogSection" },
        { type: "blogCardSection" },
        { type: "genericSection" },
      ],
    }),
  ],
  preview: {
    select: {
      title: "label",
    },
  },
});
