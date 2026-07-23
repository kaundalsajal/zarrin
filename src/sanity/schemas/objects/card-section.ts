import { defineField, defineType } from "sanity";

export const cardSection = defineType({
  name: "cardSection",
  title: "Card Section",
  type: "object",
  fields: [
    defineField({
      name: "id",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "label",
      title: "Label",
      type: "string",
    }),
    
    defineField({
      name: "cards",
      title: "Cards",
      type: "array",
      of: [{ type: "contactCard" }],
    }),
  ],
});
