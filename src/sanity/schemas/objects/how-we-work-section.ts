import { defineField, defineType } from "sanity";

export const howWeWorkSection = defineType({
  name: "howWeWorkSection",
  title: "How We Work Section",
  type: "object",
  fields: [
    defineField({
      name: "id",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "label", type: "string" }),
    defineField({ name: "title", type: "string" }),
    defineField({ name: "description", type: "text" }),
    defineField({
      name: "cards",
      title: "Cards",
      type: "array",
      of: [{ type: "textCard" }],
    }),
  ],
});
