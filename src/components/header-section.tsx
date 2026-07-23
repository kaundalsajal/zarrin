import Typography from "./typography/typography";
import { PAGE_QUERY_RESULT } from "../../sanity.types";

interface HeaderSectionProps {
  section: Extract<
    NonNullable<NonNullable<PAGE_QUERY_RESULT>["sections"]>[number],
    { _type: "headerSection" }
  >;
}

function HeaderSection({ section }: HeaderSectionProps) {
  return (
    <section
      id={section.id}
      className="max-w-360 px-5 md:px-18.75 lg:px-26 mx-auto mt-15 md:mt-18 flex flex-col justify-center items-center"
    >
      {section?.label && (
        <Typography
          variant="body-sm"
          color="secondary"
          className="font-heading font-bold uppercase"
        >
          {section.label}
        </Typography>
      )}
      {section?.title && (
        <Typography
          variant="h3"
          className="font-bold font-heading max-w-182 text-center mt-4.5 lg:mt-6.25"
        >
          {section.title}
        </Typography>
      )}
      {section?.description && (
        <Typography
          variant="body-sm"
          color="secondary"
          className="max-w-252.5 font-heading text-center mt-6 md:mt-4 lg:mt-6"
        >
          {section.description}
        </Typography>
      )}
    </section>
  );
}

export default HeaderSection;
