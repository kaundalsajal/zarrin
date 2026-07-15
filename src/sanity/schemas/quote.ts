import { defineField, defineType } from "sanity";

export default defineType({
  name: "quote",
  title: "Quote",
  type: "object",
  fields: [
    defineField({
      name: "text",
      type: "string",
    }),
    defineField({
      name: "author",
      type: "string",
    }),
  ],
});
