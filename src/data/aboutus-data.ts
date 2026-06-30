export const aboutPage = {
  hero: {
    overline: "ABOUT US",
    title: "Creative Blog Writting and publishing site",
    description:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
      image:"/about-us/aboutus.png"
  },

  howWeWork: {
    overline: "HOW WE WORK",
    title: "I will show you how our team works",
    introduction:
      "Bring to the table win-win market strategies to ensure perfect articles.",

    

    buttonText: "Learn More",
  },
};

export interface step {
  id:string,
  title:string,
  description:string
}

export const howWeWorkSteps: Array<step> = [
  {
    id: "01",
    title: "Brainstorming",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated. Solely on the bottom line solely on the bottom line.",
  },
  {
    id: "02",
    title: "Analysing",
    description:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line solely on the bottom line.",
  },
  {
    id: "03",
    title: "News Publishing",
    description:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
  },
];