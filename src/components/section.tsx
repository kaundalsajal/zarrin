import Hero from "./hero";
import FeaturedBlog from "./featured-blog";
import RecentBlog from "./recent-post";
import PopularPost from "./popular-post";
import GenericSection from "./generic-section";
import BlogSection from "./blog-section";
import BlogCardSection from "./blog-card-section";
import HowWeWorkSection from "./how-we-work-section";
import ImageSection from "./image-section";
import { PAGE_QUERY_RESULT } from "../../sanity.types";
import HeaderSection from "./header-section";
import CardSection from "./card-section";
import ContactFormSection from "./contact-form-section";

function Section({
  page,
  blogSlug,
}: {
  page: PAGE_QUERY_RESULT;
  blogSlug?: string;
}) {
  return (
    <>
      {page?.sections?.map((section, index) => {
        if (section._type === "heroSection") {
          return <Hero section={section} key={index} />;
        } else if (section._type === "featuredPostSection") {
          return <FeaturedBlog section={section} key={index} />;
        } else if (section._type === "recentPostsSection") {
          return <RecentBlog section={section} key={index} />;
        } else if (section._type === "popularPostsSection") {
          return <PopularPost section={section} key={index} currentPost={blogSlug}/>;
        } else if (section._type === "genericSection") {
          return <GenericSection key={index} section={section} />;
        } else if (section._type === "blogSection") {
          return (
            <BlogSection key={index} section={section} blogSlug={blogSlug} />
          );
        } else if (section._type === "blogCardSection") {
          return <BlogCardSection key={index} section={section} />;
        } else if (section._type === "howWeWorkSection") {
          return <HowWeWorkSection key={index} section={section} />;
        } else if (section._type === "imageSection") {
          return <ImageSection key={index} section={section} />;
        } else if (section._type === "headerSection") {
          return <HeaderSection key={index} section={section} />;
        } else if (section._type === "cardSection") {
          return <CardSection key={index} section={section} />;
        } else if(section._type==="contactFormSection"){
          return <ContactFormSection key={index} section={section}/>
        }
          else {
          return <>{console.error("Unknown section type")}</>;
        }
      })}
    </>
  );
}

export default Section;
