import { defineField, defineType } from "sanity";

// schemas/objects/section.ts
export const genericSection = defineType({
  name: "genericSection",
  title: "Section",
  type: "object",
  fields: [
    defineField({
      name: "id",
      title: "Section Id",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      description: "The primary headline for this section.",
    }),
    defineField({
      name: "subTitle",
      title: "Subtitle / Overline",
      type: "string",
      description: "A smaller text line above or below the title.",
    }),
    defineField({
      name: "body",
      title: "Body Text",
      type: "text", // A simple multi-line text box
      description: "The main paragraph text for this section.",
    }),
    defineField({
      name: "layoutType",
      title: "Layout Style",
      type: "string",
      options: {
        list: [
          { title: "Hero Banner (Centered content)", value: "hero" },
          {
            title: "Split Screen (Text Left, Image Right)",
            value: "splitImageRight",
          },
          {
            title: "Split Screen (Image Left, Text Right)",
            value: "splitImageLeft",
          },
          { title: "Simple Text Block", value: "textBlock" },
        ],
        layout: "radio", // Displays options as radio buttons for a clean UI
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "customImage",
      // This image field is hidden if the user selects 'Simple Text Block'
      hidden: ({ parent }) => parent?.layoutType === "textBlock",
    }),
    defineField({
      name: "ctaLabel",
      title: "Button Label",
      type: "string",
      description: 'Text inside the button (e.g., "Learn More").',
    }),
    defineField({
      name: "ctaLink",
      title: "Button Link",
      type: "string",
      description:
        'Where the button links to (e.g., "/about" or "https://google.com").',
    }),
  ],
  // This makes the Sanity studio preview look beautiful and recognizable
  preview: {
    select: {
      title: "title",
      subtitle: "layoutType",
      media: "mainImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Untitled Section",
        subtitle: `Layout: ${subtitle || "Not selected"}`,
        media: media,
      };
    },
  },
});
