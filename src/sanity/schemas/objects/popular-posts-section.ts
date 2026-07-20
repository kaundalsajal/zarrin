import { defineField, defineType } from "sanity";

export const popularPostsSection = defineType({
  name: "popularPostsSection",
  title: "Popular Posts",
  type: "object",
  fields: [
    defineField({
      name: "id",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "ctaButton",
      title: "CTA Button",
      type: "ctaButton",
    }),

    defineField({
      name: "postCount",
      type: "number",
      validation: (rule) => rule.positive(),
    }),
  ],
});
