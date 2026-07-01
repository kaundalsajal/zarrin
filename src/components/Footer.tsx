import Image from "next/image";
import Link from "next/link";
import Typography from "./typography/Typography";
import {
  footerNavlinks,
  footerSocialMediaLinks,
  footerCopyright,
} from "../data/footer-data";
import { companyName } from "../data/navbar-data";
function Footer() {
  return (
    <footer className="container0 max-w-308 mx-auto mt-9 md:mt-12.75 flex flex-col items-center">
      <div className="flex items-center gap-4">
        <Image alt="logo" src={companyName.logo} height={44} width={44} />
        <Typography variant="h4" className="font-extrabold">
          {companyName.name}
        </Typography>
      </div>
      <div className="w-50 md:w-65.5 lg:w-91.5 mt-8 md:mt-10 flex items-center justify-between">
        {footerNavlinks.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className=" text-foreground hover:text-primary"
          >
            <Typography variant="button" className="font-700 font-heading">
              {link.name}
            </Typography>
          </Link>
        ))}
      </div>
      <div className="h-10 w-48 tablet-sm:52 mt-8 md:mt-10 flex gap-2 table-sm:gap-4">
        {footerSocialMediaLinks.map((link) => (
          <div
            key={link.name}
            className="h-10 w-10 rounded-full bg-primary text-white hover:bg-white hover:border hover:text-primary flex items-center justify-center transition-all"
          >
            <Typography
              variant="button"
              color="white"
              className="font-700 font-heading"
            >
              {link.name}
            </Typography>
          </div>
        ))}
      </div>
      <div className="w-full mt-8 md:mt-10">
        <hr className="border border-primary" />
      </div>
      <div className="my-10 text-center">
        <Typography variant="body-sm" className="font-400 font-heading">
          {footerCopyright}
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
