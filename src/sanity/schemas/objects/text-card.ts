import { defineField, defineType } from "sanity";

export const textCard = defineType({
  name: "textCard",
  title:"Text Card",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", type: "text" }),
    defineField({
      name: "button",
      title: "Button",
      type: "ctaButton",
    }),
  ],
});
