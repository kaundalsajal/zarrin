import { Content } from "@/data/blog-data";
import Typography from "./typography/typography";

function BlogParagraph({ content }: { content: Content }) {
  return (
    <p className="max-w-5xl mx-auto mt-5 lg:mt-10">
      <Typography variant="blog-paragraph" color="secondary">
        {content.text}
      </Typography>
    </p>
  );
}

export default BlogParagraph;
