import FeaturedBlog from "./components/FeaturedBlog";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import NewsletterForm from "./components/NewsletterForm";
import PopularPost from "./components/PopularPost";
import RecentPost from "./components/RecentPost";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <Hero />
      <FeaturedBlog />
      <RecentPost />
      <PopularPost />
      <NewsletterForm />
      <Footer />
    </div>
  );
}
