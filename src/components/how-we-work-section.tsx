import React from "react";
import AboutUsCard from "./about-us-card";
import Typography from "./typography/typography";
import type { HowWeWorkSection, PAGE_QUERY_RESULT } from "../../sanity.types";

type HowWeWorkSectionProps = Extract<
  NonNullable<NonNullable<PAGE_QUERY_RESULT>["sections"]>[number],
  { _type: "howWeWorkSection" }
>;

function HowWeWorkSection({ section }:{section: HowWeWorkSectionProps}) {
  return (
    <section id={section.id} className="max-w-360 px-5 md:px-18.75 lg:px-26 mx-auto pt-15 md:pt-18">
      {section.label && (
        <Typography variant="body-sm" color="secondary" className="font-bold">
          {section.label}
        </Typography>
      )}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end ">
        {section.title && (
          <Typography
            variant="h3"
            className="max-w-125 font-bold font-heading mt-3 md:mt-4.5 lg:mt-6.25 mb-1.75 "
          >
            {section.title}
          </Typography>
        )}
        {section.description && (
          <Typography
            variant="body-sm"
            color="secondary"
            className="max-w-104 font-heading mt-3 md:mt-4.5 lg:mt-6.25 "
          >
            {section.description}
          </Typography>
        )} 
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-x-4 gap-y-7.5 mt-14.75 md:mt-15 lg:mt-20 ">
        {section.cards?.map((card, index) => (
          <AboutUsCard card={card} key={index} />
        ))}
      </div>
    </section>
  );
}

export default HowWeWorkSection;
