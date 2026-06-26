
export const heroSection = {
  badge: "Featured Post",
  title: "How AI will Change the Future",
  description:
    "The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction.",
  buttonText: "Read more",
  image: "/hero/hero.png",
};
export const featuredBlog = {
  category: "DEVELOPMENT",
  date: "16 March 2023",
  title: "How to make a Game look more attractive with New VR & AI Technology",
  description:
    "Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it's publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we're committed to making AI accessible to everyone.",
  buttonText: "Read More",
  image: "/featuredblog/featured-blog-image.png",
};

export interface Post {
  id: string;
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
  buttonText?:string;
}

export const recentPost:Post = {
  id:"rp1",
  category: "DEVELOPMENT",
  date: "16 March 2023",
  title: "How to make a Game look more attractive with New VR & AI Technology",
  description:
    "Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities.",
  image: "/recentpost/recent-post-image.png",
  buttonText: "Read More",
};

export const recentPosts: Array<Post> = [
  {
    id: "p1",
    category: "Travel",
    date: "13 March 2023",
    title: "8 Rules of Travelling In Sea You Need To Know",
    description:
      "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs.",
    image: "/posts/recent-post-1.png",
  },

  {
    id: "p2",
    category: "DEVELOPMENT",
    date: "11 March 2023",
    title: "How to build strong portfolio and get a Job in UI/UX",
    description:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.",
    image: "/posts/recent-post-2.png",
  },

  {
    id: "p3",
    category: "Sports",
    date: "10 March 2023",
    title: "How to Be a Professional Footballer in 2023",
    description:
      "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    image: "/posts/recent-post-3.png",
  },
];

export const popularPost: Array<Post> = [
  {
    id: "p4",
    category: "Travel",
    date: "13 March 2023",
    title: "Train Or Bus Journey? Which one suits?",
    description:
      "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available and the cost.",
    image: "/posts/popular-post-1.png",
  },

  {
    id: "p5",
    category: "DEVELOPMENT",
    date: "11 March 2023",
    title: "Best Website to research for your next project",
    description:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.",
    image: "/posts/popular-post-2.png",
  },

  {
    id: "p6",
    category: "Sports",
    date: "10 March 2023",
    title: "How to Be a Dancer in 2023 with proper skills?",
    description:
      "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    image: "/posts/popular-post-3.png",
  },

  {
    id: "p7",
    category: "Travel",
    date: "13 March 2023",
    title: "Who is the best singer on chart? Know him?",
    description:
      "Chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100.",
    image: "/posts/popular-post-4.png",
  },

  {
    id: "p8",
    category: "DEVELOPMENT",
    date: "11 March 2023",
    title: "How to start export import business from home?",
    description:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.",
    image: "/posts/popular-post-5.png",
  },

  {
    id: "p9",
    category: "Sports",
    date: "10 March 2023",
    title: "Make some drinks with chocolates and milk",
    description:
      "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    image: "/posts/popular-post-6.png",
  },
];

export const newsletter = {
  title: "Get our stories delivered From us to your inbox weekly.",
  note: "Get a response tomorrow if you submit by 9pm today. If we receive it after 9pm, you'll get a response the following day.",
};
