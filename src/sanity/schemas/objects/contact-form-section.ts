import { defineField, defineType } from "sanity";

export const contactFormSection = defineType({
  name: "contactFormSection",
  title: "Contact Form Section",
  type: "object",
  fields: [
    defineField({
      name: "id",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    
    defineField({
      name: "backgroundImage",
      type: "customImage",
    }),

    defineField({
      name: "label",
      title: "Label",
      type: "string",
    }),
  ],
});