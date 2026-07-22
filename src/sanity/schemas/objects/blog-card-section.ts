import { defineField, defineType } from "sanity";

export const blogCardSection = defineType({
  name: "blogCardSection",
  title: "Blog Card Section",
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
  ],
});