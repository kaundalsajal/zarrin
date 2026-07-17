import { defineField, defineType } from "sanity";

export const ctaButton = defineType({
  name: "ctaButton",
  title: "CTA Button",
  type: "object",

  fields: [
    defineField({
      name: "label",
      title: "Button Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "href",
      title: "Button Link",
      type: "string",
    }),

    defineField({
      name: "openInNewTab",
      title: "Open in New Tab",
      type: "boolean",
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: "label",
      subtitle: "href",
    },
  },
});
