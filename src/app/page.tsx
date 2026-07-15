import Hero from "@/components/ero";
import FeaturedBlog from "@/components/featured-blog";
import PopularPost from "@/components/popular-post";
import RecentPost from "@/components/recent-post";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <FeaturedBlog />
      <RecentPost />
      <PopularPost blogCount={6} />
    </div>
  );
}
