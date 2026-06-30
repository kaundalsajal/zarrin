import Typography from "@/components/typography/Typography";
import PopularPost from "@/components/PopularPost";
import { blogsSection } from "@/data/blog-data";

function layout({children}:{children:React.ReactNode}) {
  return (
    <div className="container items-center mx-auto">
      {/* <p className="text-primary">Primary</p>
    <p className="text-secondary">Secondary</p>
    <p className="text-muted">Muted</p>
    <p className="text-foreground">foreground</p>
    <p className="text-white">white</p> */}
      <div className="px-6 md:px-18  lg:px-26">
        <div className="mt-15 md:mt-18 flex flex-col justify-center items-center">
          <Typography
            variant="body-sm"
            color="secondary"
            className="font-heading font-bold"
          >
            {blogsSection.overline}
          </Typography>
          <Typography
            variant="h3"
            className="font-bold font-heading max-w-182 text-center mt-4.5 lg:mt-6.25"
          >
            {blogsSection.title}
          </Typography>
          <Typography
            variant="body-sm"
            color="secondary"
            className="max-w-252.5 font-heading text-center mt-6 md:mt-4 lg:mt-6"
          >
            {blogsSection.description}
          </Typography>
        </div>
        {children}
      </div>
      <PopularPost />
    </div>
  );
}

export default layout
