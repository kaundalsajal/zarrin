import React from "react";
import { newsletter } from "../data/home-page";
import Button from "./ui/Button";
import Typography from "./typography/Typography";
import Image from "next/image";
function NewsletterForm() {
  return (
    <div className="w-full mt-47.75 relative bg-primary flex justify-center overflow-hidden">
      <div className="hidden md:block absolute -top-20 -left-50 z-0">
        <Image
          alt="Waves Design"
          src="/hero/wave-design.png"
          width={685}
          height={378}
          loading="eager"
        />
      </div>
      <div className="contianer max-w-360 p-6.25 md:p-33 flex items-center justify-center">
        <div className=" flex flex-col items-center ">
          <div className="max-w-3xl text-center">
            <Typography
              variant="h3"
              color="white"
              className="font-bold leading-12"
            >
              {newsletter.title}
            </Typography>
          </div>
          <form>
            <div className="flex justify-center gap-2 mt-12">
              <input
                name="email"
                className="h-9.5 w-54.5 lg:h-14 lg:w-[320px] border-none outline-0 bg-white text-text-primary px-5.75 rounded-lg"
                placeholder="Your Email"
                type="text"
              />
              <Button
                type="submit"
                variant="whiteOutline"
                className="w-27.5 h-9.5 lg:h-14 lg:w-41.5"
              >
                <Typography variant="button" color="white">
                  Get Started
                </Typography>
              </Button>
            </div>
          </form>
          <div className="text-center max-w-138.75 mt-6 leading-6">
            <Typography
              variant="body-sm"
              color="white"
              className="font-heading"
            >
              {newsletter.note}
            </Typography>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute rotate-180 -bottom-22.5 -right-50 z-0">
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

export default NewsletterForm;
