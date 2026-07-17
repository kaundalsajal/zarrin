import { defineField, defineType } from "sanity";

export const recentPostsSection = defineType({
  name: "recentPostsSection",
  title: "Recent Posts",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "customImage",
    }),

    defineField({
      name: "blog",
      title: "Blog",
      type: "reference",
      to: [{ type: "blog" }],
    }),

    defineField({
      name: "ctaButton",
      title: "CTA Button",
      type: "ctaButton",
    }),
  ],
});
