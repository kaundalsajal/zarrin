import Image from "next/image";
import Link from "next/link";
import Typography from "./typography/typography";
import {
  footerNavlinks,
  footerSocialMediaLinks,
  footerCopyright,
} from "../data/footer-data";
import { companyName } from "../data/nav-bar-data";
import { FOOTER_QUERY_RESULT } from "../../sanity.types";
import { urlFor } from "@/sanity/lib/image";

interface FooterProps {
  footer: FOOTER_QUERY_RESULT;
}
function Footer({ footer }: FooterProps) {
  return (
    <footer className="container0 max-w-308 mx-auto mt-9 md:mt-12.75 flex flex-col items-center">
      <div className="flex items-center gap-4">
        <Image
          alt={footer?.logo?.logo?.alt || "logo"}
          src={
            footer?.logo?.logo
              ? urlFor(footer.logo.logo).url()
              : companyName.logo
          }
          height={44}
          width={44}
        />
        <Typography variant="h4" className="font-extrabold">
          {footer?.logo?.logoText || companyName.name}
        </Typography>
      </div>
      <div className="w-50 md:w-65.5 lg:w-91.5 mt-8 md:mt-10 flex items-center justify-between">
        {footer?.navLinks?.map((link, index) => (
          <Link
            href={link.href || "/"}
            key={index}
            className=" text-foreground hover:text-primary"
          >
            <Typography variant="button" className="font-700 font-heading">
              {link.label}
            </Typography>
          </Link>
        ))}
      </div>
      <div className="h-10 w-48 tablet-sm:52 mt-8 md:mt-10 flex gap-2 table-sm:gap-4">
        {footer?.socialLinks?.map((link, index) => (
          <Link
            href={link.href || "/"}
            key={index}
            className="h-10 w-10 rounded-full bg-primary text-white hover:bg-white hover:border hover:text-primary flex items-center justify-center transition-all duration-400 ease-in"
          >
            <Typography
              variant="button"
              color="white"
              className="font-700 font-heading"
            >
              {link.label}
            </Typography>
          </Link>
        ))}
      </div>
      <div className="w-full mt-8 md:mt-10">
        <hr className="border border-primary" />
      </div>
      <div className="my-10 text-center">
        <Typography variant="body-sm" className="font-400 font-heading">
          {footer?.copyrightText || footerCopyright}
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
