import { defineField, defineType } from "sanity";

export const imageSection = defineType({
  name: "imageSection",
  title: "Image Section",
  type: "object",
  fields: [
    defineField({
      name: "id",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "displayImage",
      type: "customImage",
    }),
  ],
});
