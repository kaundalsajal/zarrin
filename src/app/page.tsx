import Hero from "@/components/Hero";
import FeaturedBlog from "@/components/FeaturedBlog";
import PopularPost from "@/components/PopularPost";
import RecentPost from "@/components/RecentPost";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <FeaturedBlog />
      <RecentPost />
      <PopularPost blogCount={6}/>
    </div>
  );
}
