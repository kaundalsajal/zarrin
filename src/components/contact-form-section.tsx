import LabelInput from "./ui/label-input";
import Button from "./ui/button";
import { PAGE_QUERY_RESULT } from "../../sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";


interface ContactFormSectionProps {section:Extract<
  NonNullable<NonNullable<PAGE_QUERY_RESULT>["sections"]>[number],
  { _type: "contactFormSection" }
>}
function ContactFormSection({section}:ContactFormSectionProps) {
  return (
    <section
      id={section.id}
      className="max-w-360 px-5 md:px-18.75 relative lg:px-26 pt-15 md:pt-18 mx-auto overflow-clip mt-17.5 md:mt-20 lg:mt-27.5"
    >
      <div className="absolute inset-0 -z-10 w-360 overflow-clip">
        <Image
          src={
            section.backgroundImage
              ? urlFor(section.backgroundImage).url()
              : "/contact-us/contact-background.png"
          }
          alt={section.backgroundImage?.alt || "background-image"}
          height={547}
          width={1440}
          priority
        />
      </div>

      <div className="max-w-3xl py-10 md:py-17.75 px-8 md:px-15.75 bg-white rounded-xl shadow-[4.89px_5.59px_37.71px_0px_rgba(124,78,228,0.07)] mx-auto mt-87.5">
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <LabelInput name="name" label="Name" />
          <LabelInput name="email" label="Email" type="email" />
          <LabelInput name="phone" label="Phone" />
          <LabelInput name="subject" label="Subject" />
          <div className="sm:col-span-2">
            <LabelInput name="Message" label="Message" inputType="textarea" />
          </div>
          <Button
            variant="purple"
            className="sm:col-span-2 px-9 py-4 max-w-44.25 text-[15px] font-heading mx-auto"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}

export default ContactFormSection;
