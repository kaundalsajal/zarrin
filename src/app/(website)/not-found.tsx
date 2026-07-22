import Image from "next/image";
import Typography from "@/components/typography/typography";
import Button from "@/components/ui/button";
import Link from "next/link";

function Page() {
  return (
    <div className="max-w-204 my-6 md:my-25 mx-auto px-7.5">
      <div className=" bg-primary rounded-2xl flex flex-col justify-center items-center relative  py-11.5 md:py-20 overflow-hidden">
        <div className="hidden md:block absolute -top-75 ">
          <Image
            alt="Waves Design"
            src="/hero/Vector (1).png"
            width={1341}
            height={347}
            loading="eager"
          />
        </div>
        <Image
          alt="404 not found"
          src="/not-found/404.png"
          width={282}
          height={112}
          className="px-8 sm:px-0"
        />
        <Typography variant="h6" color="white">
          <div className="flex flex-col items-center mt-14.5 text-center px-4">
            <p>Sorry!</p>
            <p>The link is broken, try to refresh or go to home</p>
          </div>
        </Typography>

        <Link href={"/"}>
          <Button variant="white" className="mt-9 h-14 w-47">
            Go To Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Page;
