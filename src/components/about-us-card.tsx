import { step } from "@/data/about-us-data";
import Typography from "./typography/typography";

function AboutUsCard({ step }: { step: step }) {
  return (
    <div className="group max-w-190 md:max-w-100 rounded-2xl flex flex-col p-6 bg-white  hover:bg-primary transition-all">
      <Typography variant="h1" className="font-bold" color="muted">
        <span className="group-hover:text-white">{step.id}</span>
      </Typography>
      <Typography variant="h6" color="primary" className="font-bold">
        <span className="group-hover:text-white">{step.title}</span>
      </Typography>
      <Typography variant="body-sm" color="muted" className="mt-4 line-clamp-6">
        <span className="group-hover:text-white">{step.description}</span>
      </Typography>
      <Typography
        variant="caption"
        className="underline underline-offset-6 decoration-4 font-bold mt-8 transition-transform duration-400 translate-x-12.5 group-hover:translate-x-0"
        color="white"
      >
        Learn More
      </Typography>
    </div>
  );
}

export default AboutUsCard;
