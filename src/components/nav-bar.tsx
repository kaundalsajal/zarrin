"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./ui/butto";
import Typography from "./typography/typograph";
import {
  companyName,
  navLinks,
  mobileSideMenuLogo,
} from "../data/nav-bar-data";
import { useState } from "react";
import clsx from "clsx";
function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toogleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  console.log(isMenuOpen);
  return (
    <nav className="w-full bg-white">
      <div className="max-w-360 relative py-5 mx-auto md:py-3 lg:py-5.25 px-5 md:px-18.75 lg:px-26 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-4">
            {/* Logo and Name */}
            <Image
              src={companyName.logo}
              alt="Company Logo"
              height={44}
              width={44}
            />
            <Typography variant="h4" className="font-extrabold">
              {companyName.name}
            </Typography>
          </div>
        </Link>

        <div className="hidden md:flex items-center h-14 w-104.75 justify-between">
          {
            //NavBar Links

            navLinks?.links?.map((link, index) => (
              <Link href={link.href} key={index}>
                <Typography
                  variant="body-sm"
                  className="font-heading font-medium hover:text-primary"
                >
                  {link.name}
                </Typography>
              </Link>
            )) || "Links should appear here"
          }
          <Image
            alt="Search Icon"
            src="/navbar/search-minus.png"
            height={22}
            width={22}
          />
          {navLinks?.buttons?.map((button, index) => {
            return (
              <Link href={button.href} key={index}>
                <Button variant="purple" className="w-45 h-14">
                  <Typography
                    variant="button"
                    className="font-heading font-600"
                  >
                    {button.name}
                  </Typography>
                </Button>
              </Link>
            );
          }) || "Button should appear here"}
        </div>
        <div className="md:hidden">
          <Image
            alt="Mobile side menu logo"
            src={mobileSideMenuLogo}
            height={34}
            width={34}
            onClick={toogleMenu}
          ></Image>
        </div>
        <div
          className={clsx(
            isMenuOpen ? "block" : "hidden",
            "absolute -bottom-37.5 left-0 z-10 flex flex-col w-full bg-white",
          )}
        >
          {navLinks?.links?.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="py-3 border-b border-gray-300 text-center"
              onClick={toogleMenu}
            >
              <Typography
                variant="body-lg"
                className="font-heading font-medium hover:text-primary"
              >
                {link.name}
              </Typography>
            </Link>
          )) || "Links should appear here"}

          {navLinks?.buttons?.map((button, index) => {
            return (
              <Link
                href={button.href}
                key={index}
                className="py-3 border-b border-gray-300 text-center"
                onClick={toogleMenu}
              >
                <Typography
                  variant="body-lg"
                  className="font-heading font-medium hover:text-primary"
                >
                  {button.name}
                </Typography>
              </Link>
            );
          }) || "Button should appear here"}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
