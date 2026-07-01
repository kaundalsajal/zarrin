import Image from "next/image";
import { heroSection } from "../data/home-data";
import Button from "./ui/Button";
import Typography from "./typography/Typography";
function Hero() {
  return (
    <div className="w-full relative flex flex-col items-center bg-primary overflow-hidden">
      <div className="hidden md:block absolute -top-20 -left-50">
        <Image
          alt="Waves Design"
          src="/hero/wave-design.png"
          width={685}
          height={378}
          loading="eager"
        />
      </div>
      <div className="py-10.25 md:py-22 lg:py-30.5 px-6 md:px-18.5 lg:px-26 flex justify-center md:flex-row flex-col gap-11.5">
        <div className="max-w-145">
          <div>
            <Typography variant="body-sm" color="white">
              {heroSection.badge}
            </Typography>
          </div>
          <div>
            <Typography variant="h1" color="white" className="font-bold">
              {heroSection.title}
            </Typography>
          </div>
          <div className="mt-4.75 lg:mt-7 max-w-104">
            <Typography
              variant="body-sm"
              color="white"
              className="font-heading "
            >
              {heroSection.description}
            </Typography>
          </div>
          <div className="mt-6.5 md:mt-11.75 lg:mt-16">
            <Button
              variant="white"
              className="w-30.5 h-9.5 lg:w-42.5 lg:h-13.25"
            >
              <Typography variant="button" className="font-weight-bold">
                {heroSection.buttonText}
              </Typography>
            </Button>
          </div>
        </div>
        <div className="container max-w-152">
          <Image
            alt="Hero Image"
            src={heroSection.image}
            height={576}
            width={608}
          />
        </div>
      </div>
      <div className="hidden md:block absolute rotate-180 -bottom-22.5 -right-50">
        <Image
          alt="Waves Design"
          src="/hero/wave-design.png"
          width={685}
          height={378}
          loading="eager"
        />
      </div>
    </div>
  );
}

export default Hero;
