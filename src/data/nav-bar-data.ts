interface Link {
  name: string;
  href: string;
}

interface NavLinks {
  links: Array<Link>,
  buttons: Array<Link>
}

export const companyName = {
  name: "Zarrin",
  logo: "/nav-bar/logo.png",
};

export const mobileSideMenuLogo = "/nav-bar/menu.png"

export const navLinks:NavLinks = {
  links: [
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
  ],
  buttons: [{ name: "Contact Us", href: "/contact-us" }],
};