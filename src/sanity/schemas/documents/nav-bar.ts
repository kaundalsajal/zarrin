import { defineField, defineType } from "sanity";

export const navBar = defineType({
  name: "navbar",
  title: "Navbar",
  type: "document",
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name:"logoText",
      title:"Logo Text",
      type:"string"
    }),
    defineField({
      name: "logoLink",
      title: "Logo Link",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "links",
      title: "Navigation Links",
      type: "array",
      of: [{ type: "navLink" }],
      validation: (rule) => rule.max(6),
    }),
    defineField({
      name: "ctaButton",
      title: "CTA Button",
      type: "ctaButton",
    }),
  ],
});
