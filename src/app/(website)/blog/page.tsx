import { BLOGS_PAGE_QUERY } from "@/sanity/queries/page-query";
import { BLOGS_PAGE_QUERY_RESULT } from "../../../../sanity.types";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import Section from "@/components/section";

async function Page() {

  const page: BLOGS_PAGE_QUERY_RESULT = await client.fetch(BLOGS_PAGE_QUERY);
   if (!page) notFound();

  return (
    <div className="w-full">
      <Section page={page} />
    </div>
  );
}

export default Page;
