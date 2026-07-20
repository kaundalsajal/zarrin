import { defineField, defineType } from "sanity";

export const navBar = defineType({
  name: "navbar",
  title: "Navbar",
  type: "document",
  fields: [
    defineField({
      name: "logo",
      type: "reference",
      to: [{ type: "logo" }],
    }),

    defineField({
      name: "navLinks",
      title: "Navigation Links",
      type: "array",
      of: [{ type: "navLink" }],
      validation: (rule) => rule.max(6),
    }),
    defineField({
      name: "ctaButton",
      type: "ctaButton",
    }),
  ],
});
