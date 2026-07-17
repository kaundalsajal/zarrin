import { defineField, defineType } from "sanity";

export const image = defineType({
  name: "customImage",
  type: "image",
  options: { hotspot: true },
  fields: [
    defineField({
      name: "alt",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
