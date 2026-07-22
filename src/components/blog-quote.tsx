// import { Content } from "@/data/blog-data";
import Typography from "./typography/typography";

interface BlogQuoteProps {
  value: {
    text: string;
    author: string;
  };
}

function BlogQuote({ value }: BlogQuoteProps) {
  return (
    <p className="max-w-5xl flex flex-col md:px-10.75 lg:px-13 mx-auto mt-5 lg:mt-10">
      <Typography
        variant="h6"
        color="secondary"
        className="italic border-l-6 border-primary px-4.75 py-3"
      >
        &quot;{value.text}&quot;
      </Typography>
      <Typography variant="body-sm" className="font-bold px-5">
        — {value.author}
      </Typography>
    </p>
  );
}

export default BlogQuote;
