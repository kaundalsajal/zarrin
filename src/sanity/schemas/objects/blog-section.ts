import { defineField, defineType } from "sanity";

export const blogSection = defineType({
  name: "blogSection",
  title: "Blog Section",
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
    }),

    defineField({
      name: "blog",
      title: "Blog",
      type: "reference",
      to: [{ type: "blog" }],
    }),
  ]
});
