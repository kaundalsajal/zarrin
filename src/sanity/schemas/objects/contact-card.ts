import { defineField, defineType } from "sanity";

export const contactCard = defineType({
  name: "contactCard",
  title: "Contact Card",
  type: "object",
  fields: [
    defineField({
      name: "icon",
      type: "customImage",
    }),
    defineField({ name: "title", type: "string" }),
    defineField({ name: "body", type: "string" }),
  ],
});
