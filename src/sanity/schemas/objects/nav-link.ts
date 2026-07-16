import { defineField, defineType } from "sanity";

export const navLink = defineType({
  name: "navLink",
  title: "Navigation Link",
  type: "object",

  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "href",
      title: "Link",
      type: "string",
      description: "Example: /blog or /about",
      validation: (Rule) => Rule.required(),
    }),

  ],

  preview: {
    select: {
      title: "label",
      subtitle: "href",
    },
  },
});
