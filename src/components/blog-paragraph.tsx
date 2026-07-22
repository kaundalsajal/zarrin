import { Content } from "@/data/blog-data";
import Typography from "./typography/typography";

function BlogParagraph({ children }: { children:React.ReactNode}) {
  return (
    <p className="max-w-5xl mx-auto mt-5 lg:mt-10">
      <Typography variant="blog-paragraph" color="secondary">
        {children}
      </Typography>
    </p>
  );
}

export default BlogParagraph;
