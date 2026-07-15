import AboutUsCard from "@/components/about-us-card";
import Typography from "@/components/typography/typography";
import { aboutPage, howWeWorkSteps } from "@/data/about-us-data";
import Image from "next/image";

function Page() {
  return (
    <div className="max-w-360 px-5 md:px-18.75 lg:px-26 items-center mx-auto">
      {/* TODO: remove me 
      <p className="text-primary">Primary</p>
      <p className="text-secondary">Secondary</p>
      <p className="text-muted">Muted</p>
      <p className="text-foreground">foreground</p>
      <p className="text-white">white</p> */}
      <div className="mt-15 md:mt-18 flex flex-col justify-center items-center">
        <Typography
          variant="body-sm"
          color="secondary"
          className="font-heading font-bold"
        >
          {aboutPage.hero.overline}
        </Typography>
        <Typography
          variant="h3"
          className="font-bold font-heading max-w-182 text-center mt-4.5 lg:mt-6.25"
        >
          {aboutPage.hero.title}
        </Typography>
        <Typography
          variant="body-sm"
          color="secondary"
          className="max-w-252.5 font-heading text-center mt-6 md:mt-4 lg:mt-6"
        >
          {aboutPage.hero.description}
        </Typography>
      </div>
      <Image
        alt="About Us Image"
        src={aboutPage.hero.image}
        height={608}
        width={1232}
        className="rounded-2xl mt-15 md:mt-21.75 lg:mt-30.75 animate-image"
      />
      <div className="mt-15 md:mt-18">
        <Typography variant="body-sm" color="secondary" className="font-bold">
          {aboutPage.howWeWork.overline}
        </Typography>
        <div className="flex flex-col md:flex-row md:justify-between md:items-end ">
          <Typography
            variant="h3"
            className="max-w-125 font-bold font-heading mt-3 md:mt-4.5 lg:mt-6.25 mb-1.75 "
          >
            {aboutPage.howWeWork.title}
          </Typography>
          <Typography
            variant="body-sm"
            color="secondary"
            className="max-w-104 font-heading mt-3 md:mt-4.5 lg:mt-6.25 "
          >
            {aboutPage.howWeWork.introduction}
          </Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-x-4 gap-y-7.5 mt-14.75 md:mt-15 lg:mt-20 ">
          {howWeWorkSteps?.map((step, index) => (
            <AboutUsCard step={step} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
