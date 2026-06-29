import FeaturedBlog from "./components/FeaturedBlog";
import Hero from "./components/Hero";
import NewsletterForm from "./components/NewsletterForm";
import PopularPost from "./components/PopularPost";
import RecentPost from "./components/RecentPost";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <FeaturedBlog />
      <RecentPost />
      <PopularPost />
      <NewsletterForm />
    </div>
  );
}
