import { type SchemaTypeDefinition } from "sanity";
import { blog } from "./documents/blog";
import quote from "./objects/quote";
import { navBar } from "./documents/nav-bar";
import { navLink } from "./objects/nav-link";
import { ctaButton } from "./objects/cta-button";
import { newsletter } from "./documents/newsletter";
import { logo } from "./documents/logo";
import { footer } from "./documents/footer";
import { socialLink } from "./objects/social-link";
import { image } from "./objects/custom-image";
import { heroSection } from "./objects/hero-section";
import { recentPostsSection } from "./objects/recent-posts-section";
import { popularPostsSection } from "./objects/popular-posts-section";
import { featuredPostSection } from "./objects/featured-post-section";
import { page } from "./documents/page";
import { genericSection } from "./objects/generic-section";
import { blogSection } from "./objects/blog-section";
import { blogCardSection } from "./objects/blog-card-section";
import { howWeWorkSection } from "./objects/how-we-work-section";
import { textCard } from "./objects/text-card";
import { imageSection } from "./objects/image-section";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blog,
    quote,
    navBar,
    navLink,
    ctaButton,
    newsletter,
    logo,
    footer,
    socialLink,
    image,
    heroSection,
    recentPostsSection,
    popularPostsSection,
    featuredPostSection,
    blogSection,
    blogCardSection,
    howWeWorkSection,
    textCard,
    imageSection,
    page,
    genericSection,
  ],
};
