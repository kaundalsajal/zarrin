import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import NewsletterForm from "@/components/newsletter-form";
import { client } from "@/sanity/lib/client";
import { NAV_BAR_QUERY } from "@/sanity/queries/nav-bar-query";
import {
  FOOTER_QUERY_RESULT,
  NAV_BAR_QUERY_RESULT,
} from "../../../sanity.types";
import { FOOTER_QUERY } from "@/sanity/queries/footer-query";

export default async function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navbar = await client.fetch<NAV_BAR_QUERY_RESULT>(NAV_BAR_QUERY);
  const footer = await client.fetch<FOOTER_QUERY_RESULT>(FOOTER_QUERY);
  return (
    <>
      <NavBar navbar={navbar} />
      {children}
      <NewsletterForm />
      <Footer footer={footer} />
    </>
  );
}
