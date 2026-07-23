import { defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  type: "document",
  fields: [
    defineField({ name: "label", type: "string" }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "label" },
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
        { type: "howWeWorkSection" },
        { type: "imageSection" },
        { type: "headerSection" },
        { type: "cardSection" },
        { type: "contactFormSection" },
      ],
    }),
  ],
  preview: {
    select: {
      title: "label",
    },
  },
});
