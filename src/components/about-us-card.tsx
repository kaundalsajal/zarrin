// import { step } from "@/data/about-us-data";
import Typography from "./typography/typography";
import { TextCard } from "../../sanity.types";
import Link from "next/link";

function AboutUsCard({ card }: { card: TextCard }) {
  return (
    <div className="group max-w-190 md:max-w-100 rounded-2xl flex flex-col p-6 bg-white  hover:bg-primary transition-all ease-in duration-400">
      {card.label && (
        <Typography variant="h1" className="font-bold" color="muted">
          <span className="group-hover:text-white">{card.label}</span>
        </Typography>
      )}
      {card.title && (
        <Typography variant="h6" color="primary" className="font-bold">
          <span className="group-hover:text-white">{card.title}</span>
        </Typography>
      )}
      {card.description && (
        <Typography
          variant="body-sm"
          color="muted"
          className="mt-4"
        >
          <span className="group-hover:text-white">{card.description}</span>
        </Typography>
      )}
      {card.button && (
        <Link href={card.button.href || "/"}>
          <Typography
            variant="caption"
            className="underline underline-offset-6 decoration-4 font-bold mt-8 transition-transform duration-400 translate-x-12.5 group-hover:translate-x-0"
            color="white"
          >
            {card.button.label || "Learn More"}
          </Typography>
        </Link>
      )}
    </div>
  );
}

export default AboutUsCard;
