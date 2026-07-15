import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import NewsletterForm from "@/components/newsletter-form";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      {children}
      <NewsletterForm />
      <Footer />
    </>
  );
}
