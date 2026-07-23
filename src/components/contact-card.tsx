import React from "react";
import Typography from "./typography/typography";
import type { ContactCard } from "../../sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

function ContactCard({ card }: { card: ContactCard }) {
  return (
    <div className="rounded-2xl bg-white flex flex-col justify-center items-center gap-5 py-7.5 shadow-[3px_1px_43px_0px_rgba(124,78,228,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(124,78,228,0.5)]">
      <div className="w-17.5 aspect-square flex justify-center items-center rounded-full bg-primary">
        <Image
          alt={card.icon?.alt || "Card Image"}
          src={card.icon ? urlFor(card.icon).url() : "/contact-us/phone-icon.png"}
          height={24}
          width={24}
        />
      </div>
      {card.title && (
        <span className="text-[20px] font-heading text-primary">
          {card.title}
        </span>
      )}
      {card.body && (
        <span className="text-[18px] font-heading text-gray">
          {card.body}
        </span>
      )}
    </div>
  );
}

export default ContactCard;
