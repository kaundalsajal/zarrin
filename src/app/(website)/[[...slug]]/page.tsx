
import { client } from "@/sanity/lib/client";
import { PAGE_QUERY } from "@/sanity/queries/page-query";
import { PAGE_QUERY_RESULT } from "../../../../sanity.types";
import Section from "@/components/section";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug?: string[] }>;
}
async function Page({ params }: Props) {
  const { slug } = await params;
  const page: PAGE_QUERY_RESULT = await client.fetch(PAGE_QUERY, {
    slug: slug ? slug?.join("/") : "home",
  });

  if (!page) notFound();

  let blogSlug = "";
  if (slug && slug[0] === "blog") {
    blogSlug = slug[1];
  }

  return (
    <div className="w-full">
      {/* <div className="text-secondary"> hello</div>
      <div className="text-muted"> hello</div> */}
      <Section page={page} blogSlug = {blogSlug} />
    </div>
  );
}

export default Page;
