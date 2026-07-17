import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import NewsletterForm from "@/components/newsletter-form";
import { client } from "@/sanity/lib/client";
import { NAV_BAR_QUERY } from "@/sanity/queries/nav-bar-query";
import { SanityDocument } from "next-sanity";
import { Navbar } from "../../../sanity.types";

export default async function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navbar = (await client.fetch<SanityDocument[]>(
    NAV_BAR_QUERY,
  )) as Array<Navbar>;
  return (
    <>
      <NavBar navbar={navbar[0]}/>
      {children}
      <NewsletterForm />
      <Footer />
    </>
  );
}
