import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import NewsletterForm from "@/components/newsletter-form";
import { client } from "@/sanity/lib/client";
import { NAV_BAR_QUERY } from "@/sanity/queries/nav-bar-query";
import { SanityDocument } from "next-sanity";
import { NAV_BAR_QUERY_RESULT, Navbar } from "../../../sanity.types";

export default async function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navbar = await client.fetch<NAV_BAR_QUERY_RESULT>(
    NAV_BAR_QUERY,
  )
  return (
    <>
      <NavBar navbar={navbar}/>
      {children}
      <NewsletterForm />
      <Footer />
    </>
  );
}
