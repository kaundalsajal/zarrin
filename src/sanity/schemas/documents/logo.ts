import { defineField, defineType } from "sanity";

export const logo = defineType({
  name: "logo",
  title: "Logo",
  type: "document",
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "customImage",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "logoText",
      title: "Logo Text",
      type: "string",
    }),
    defineField({
      name: "logoLink",
      title: "Logo Link",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});
