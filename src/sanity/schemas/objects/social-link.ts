import { defineField, defineType } from "sanity";

export const socialLink = defineType({
  name: "socialLink",
  title: "Social Link",
  type: "object",

  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      description:"Add only two character to be displayed as icon eg:FB ",
      validation: (Rule) => Rule.length(2),
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
