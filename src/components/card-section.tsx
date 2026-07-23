import React from "react";
import { PAGE_QUERY_RESULT } from "../../sanity.types";
import ContactCard from "./contact-card";

type CardSectionProps = Extract<
  NonNullable<NonNullable<PAGE_QUERY_RESULT>["sections"]>[number],
  { _type: "cardSection" }
>;

function CardSection({ section }: { section: CardSectionProps }) {
  return (
    <section
      id={section.id}
      className="max-w-360 mx-auto px-5 md:px-18.75 lg:px-26 grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-7.5 mt-14.75 md:mt-15 lg:mt-20 "
    >
      {section.cards?.map((card, index) => (
        <ContactCard card={card} key={index} />
      ))}
    </section>
  );
}

export default CardSection;
