import { posts } from "@/data/blog-data";

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blogPost = posts.find((post) => post.id === id);

  return(

    blogPost?.content?.map((content,index)=> {
      if(content.type==="paragraph"){
        return (
          "paragraph"
        )
      } else if(content.type==="quote"){
        return(
          "quote"
        )
      }
    }
    )
  )

}

export default Page;
