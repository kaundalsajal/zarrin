
import { BLOG_PAGE_QUERY } from "@/sanity/queries/page-query";
import { client } from "@/sanity/lib/client";
import { BLOG_PAGE_QUERY_RESULT } from "../../../../../sanity.types";
import { notFound } from "next/navigation";
import Section from "@/components/section";

async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const page: BLOG_PAGE_QUERY_RESULT = await client.fetch(BLOG_PAGE_QUERY);
  if (!page) notFound();

  return (
    <div className="w-full">
      <Section page={page} blogSlug={slug}/>

    </div>
  );
}

export default Page;
