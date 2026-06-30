import Image from "next/image";
import Typography from "@/components/typography/Typography";
import Button from "@/components/ui/Button";

function Page() {
  return (
    <div className="max-w-204 my-6 md:my-25 lg:mx-auto mx-5.75 md:mx-25 flex flex-col justify-center items-center relative bg-primary rounded-2xl px-7.5 md:px-31 py-11.5  md:py-20.75 overflow-hidden">
      <div className="hidden md:block absolute -top-75">
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
      />
      <Typography variant="h6" color="white">
        <div className="flex flex-col items-center mt-14.5 text-center">
          <p>Sorry!</p>
          <p>The link is broken, try to refresh or go to home</p>
        </div>
      </Typography>
      <Button variant="white" className="mt-9 h-14 w-47">
        Go To Home
      </Button>
    </div>
  );
}

export default Page;
