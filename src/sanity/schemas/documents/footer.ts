import { defineField, defineType } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "logo",
      type: "reference",
      to: [{ type: "logo" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "navLinks",
      title: "Navigation Links",
      type: "array",
      of: [{ type: "navLink" }],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "array",
      of: [{ type: "socialLink" }],
    }),
    defineField({
      name: "copyrightText",
      title: "Copyright Text",
      type: "string",
    }),
  ],
});
