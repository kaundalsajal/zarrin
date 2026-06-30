export const blogsSection = {
  overline: "OUR BLOGS",
  title: "Find our all blogs from here",
  description:
    "Our blogs are written from extensive research by well-known writers so that we can provide you with the best blogs and articles to read.",
};

export interface Content {
  type:"paragraph" | "quote" | "image";
  text?:string;
  author?:string;
  src?:string
}

export interface Blog {
  slug: string;
  category: string;
  date: string;
  title: string;
  image?:string;
  featuredImage?:string;
  heroImage?: string;   //dimension - 
  cardImage?: string;       //dimension - 
  content?:Array<Content>
  buttonText: string;
  isFeatured?:boolean;
  isPopular?:boolean;
}

export const blogs: Array<Blog> = [
  {
    slug: "p1",
    category: "DEVELOPMENT",
    date: "16 March 2023",
    title:
      "How to make a Game look more attractive with New VR & AI Technology",
    featuredImage:"/posts/featured-blog-image.png",
    heroImage: "/posts/recent-post-image.png",
    cardImage: "/posts/recent-post-1.png",
    content: [
      {
        type: "paragraph",
        text: "Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.",
      },
      {
        type: "paragraph",
        text: "We’re now at a pivotal moment in our AI journey. Breakthroughs in generative AI are fundamentally changing how people interact with technology — and at Google, we’ve been responsibly developing large language models so we can safely bring them to our products. Today, we’re excited to share our early progress. Developers and businesses can now try new APIs and products that make it easy, safe and scalable to start building with Google’s best AI models through Google Cloud and a new prototyping environment called MakerSuite. And in Google Workspace, we’re introducing new features that help people harness the power of generative AI to create, connect and collaborate.",
      },
      {
        type: "quote",
        text: "People worry that computers will get too smart and take over the world, but the real problem is that they’re too stupid and they’ve already taken over the world.",
        author: "Pedro Domingos",
      },
      {
        type: "paragraph",
        text: "More than 3 billion people already benefit from AI-powered features in Google Workspace, whether it’s using Smart Compose in Gmail or auto-generated summaries in Google Docs. Now, we’re excited to take the next step and bring a limited set of trusted testers a new set of features that makes the process of writing even easier. In Gmail and Google Docs, you can simply type in a topic you’d like to write about, and a draft will be instantly generated for you. So if you’re a manager onboarding a new employee, Workspace saves you the time and effort involved in writing that first welcome email. From there, you can elaborate upon or abbreviate the message or adjust the tone to be more playful or professional — all in just a few clicks. We’ll be rolling out these new experiences to testers in the coming weeks.",
      },
      {
        type: "image",
        src: "/posts/content-image.png",
      },
      {
        type: "paragraph",
        text: "We’re so excited by the potential of generative AI, and the opportunities it will unlock — from helping people express themselves creatively, to helping developers build brand new types of applications, to transforming how businesses and governments engage their customers and constituents. Stay tuned for more to come in the weeks and months ahead.",
      },
    ],
    buttonText: "Read More",
    isFeatured: true,
  },
  {
    slug: "p2",
    category: "Travel",
    date: "13 March 2023",
    title: "8 Rules of Travelling In Sea You Need To Know",
    heroImage: "/posts/recent-post-image.png",
    cardImage: "/posts/recent-post-1.png",
    content: [
      {
        type: "paragraph",
        text: "Sea travel has connected continents for centuries and continues to play a vital role in tourism and global trade. Whether you are planning a cruise, traveling between islands, or transporting goods across oceans, understanding the basics of sea travel can make your journey safer and more enjoyable. Proper planning, weather awareness, and following maritime guidelines are essential for every traveler embarking on a voyage.",
      },
      {
        type: "paragraph",
        text: "Before setting sail, it is important to prepare the necessary documents, pack appropriate clothing, and become familiar with the ship's safety procedures. Modern vessels are equipped with advanced navigation systems and safety equipment, but passengers should still know the location of emergency exits, life jackets, and assembly points. A few minutes spent learning these details can make a significant difference during unexpected situations.",
      },
      {
        type: "quote",
        text: "The sea, once it casts its spell, holds one in its net of wonder forever.",
        author: "Jacques Yves Cousteau",
      },
      {
        type: "paragraph",
        text: "Weather conditions at sea can change much faster than on land, making it important to stay informed throughout the journey. Listening to announcements from the crew, following navigation updates, and respecting safety restrictions help ensure a smooth experience. Travelers should also take precautions against seasickness by staying hydrated, getting enough fresh air, and carrying recommended medication if needed.",
      },
      {
        type: "image",
        src: "/posts/content-image.png",
      },
      {
        type: "paragraph",
        text: "Responsible travel is equally important when exploring oceans and coastal destinations. Avoid throwing waste into the sea, respect marine wildlife, and support operators who follow sustainable tourism practices. By combining careful preparation with environmental awareness, travelers can enjoy memorable sea adventures while helping preserve the beauty and health of the world's oceans for future generations.",
      },
    ],
    buttonText: "Read More",
    isFeatured: false,
  },

  {
    slug: "p3",
    category: "DEVELOPMENT",
    date: "11 March 2023",
    title: "How to build strong portfolio and get a Job in UI/UX",
    heroImage: "/posts/recent-post-image.png",
    cardImage: "/posts/recent-post-2.png",
    content: [
      {
        type: "paragraph",
        text: "A strong UI/UX portfolio is often more valuable than a long resume because it demonstrates your ability to solve real design problems. Recruiters and hiring managers want to understand your design thinking, research process, wireframing skills, and the reasoning behind your decisions. Rather than showcasing dozens of projects, focus on a few well-crafted case studies that clearly explain the problem, your approach, and the final outcome.",
      },
      {
        type: "paragraph",
        text: "Every portfolio project should tell a complete story from start to finish. Begin by identifying the user's needs through research, define the problem, create user flows and wireframes, and then move on to high-fidelity designs and interactive prototypes. Explain the challenges you encountered, the feedback you received, and how you iterated on your designs. This process helps employers evaluate your problem-solving abilities instead of just your visual design skills.",
      },
      {
        type: "quote",
        text: "Design is not just what it looks like and feels like. Design is how it works.",
        author: "Steve Jobs",
      },
      {
        type: "paragraph",
        text: "Besides building a portfolio, improving your professional presence is equally important. Create a polished LinkedIn profile, publish your work on platforms such as Behance or Dribbble, and contribute to design communities where you can receive constructive feedback. Networking with other designers and participating in design challenges can help you gain visibility and discover job opportunities that may not be publicly advertised.",
      },
      {
        type: "image",
        src: "/posts/content-image.png",
      },
      {
        type: "paragraph",
        text: "Finally, tailor both your portfolio and resume for every job application. Highlight projects that closely match the company's industry or product, and be prepared to confidently explain your design decisions during interviews. Employers appreciate candidates who can communicate their thought process, collaborate effectively with developers and stakeholders, and continuously learn new tools and design methodologies.",
      },
    ],
    buttonText: "Read More",
    isFeatured: false,
  },

  {
    slug: "p4",
    category: "Sports",
    date: "10 March 2023",
    title: "How to Be a Professional Footballer in 2023",
    heroImage: "/posts/recent-post-image.png",
    cardImage: "/posts/recent-post-3.png",
    content: [
      {
        type: "paragraph",
        text: "Becoming a professional footballer requires much more than natural talent. Success comes from years of disciplined training, physical fitness, technical development, and a willingness to improve every single day. Modern football demands that players understand tactics, communicate effectively with teammates, and adapt quickly to different styles of play. Developing these qualities from an early stage significantly increases the chances of progressing through academy systems and competitive leagues.",
      },
      {
        type: "paragraph",
        text: "A structured training routine should include technical drills, strength and conditioning, speed development, and match analysis. Players should regularly practice passing, dribbling, shooting, and defending while also reviewing their performances to identify strengths and weaknesses. Working with experienced coaches and competing against strong opponents provides valuable experience and helps build the confidence needed to perform under pressure during important matches.",
      },
      {
        type: "quote",
        text: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and, above all, love of what you are doing.",
        author: "Pelé",
      },
      {
        type: "paragraph",
        text: "Maintaining a healthy lifestyle is equally important for aspiring footballers. A balanced diet, proper hydration, sufficient sleep, and adequate recovery allow athletes to perform consistently throughout demanding training sessions and competitive seasons. Preventing injuries through warm-ups, stretching, and recovery exercises is just as important as improving technical skills, since long-term fitness is essential for career development.",
      },
      {
        type: "image",
        src: "/posts/content-image.png",
      },
      {
        type: "paragraph",
        text: "In today's football industry, building a professional mindset can set players apart from the competition. Attend trials, participate in tournaments, create highlight videos, and remain open to feedback from coaches and teammates. Every training session and every match is an opportunity to learn something new. With dedication, resilience, and continuous improvement, aspiring footballers can move one step closer to achieving their dream of playing at the professional level.",
      },
    ],
    buttonText: "Read More",
    isFeatured: false,
  },

  {
    slug: "p5",
    category: "Travel",
    date: "13 March 2023",
    title: "Train Or Bus Journey? Which one suits?",
    heroImage: "/posts/recent-post-image.png",
    cardImage: "/posts/popular-post-1.png",
    content: [
      {
        type: "paragraph",
        text: "Choosing between a train and a bus journey depends on your travel priorities, including comfort, budget, travel time, and destination. Trains generally provide a smoother ride with more space to move around, making them ideal for long-distance travel. Buses, on the other hand, offer greater route flexibility and often reach destinations that may not be accessible by rail, making them a practical choice for regional and rural travel.",
      },
      {
        type: "paragraph",
        text: "When planning your journey, consider factors such as ticket prices, departure schedules, and onboard facilities. Modern trains often provide amenities like Wi-Fi, charging ports, and spacious seating, while many premium buses now offer reclining seats, air conditioning, and entertainment systems. Comparing these features before booking can help you select the option that best fits your travel needs and budget.",
      },
      {
        type: "quote",
        text: "The journey, not the arrival, matters.",
        author: "T. S. Eliot",
      },
      {
        type: "paragraph",
        text: "Travel time is another important consideration. High-speed trains can significantly reduce travel duration between major cities, while buses may take longer due to road traffic and multiple stops. However, buses often operate more frequently and provide direct connections to smaller towns, eliminating the need for additional transportation after reaching your destination.",
      },
      {
        type: "image",
        src: "/posts/content-image.png",
      },
      {
        type: "paragraph",
        text: "Ultimately, the best choice depends on your personal preferences and the purpose of your trip. If comfort, speed, and convenience are your priorities, a train journey may be the better option. If affordability, route availability, and flexibility are more important, traveling by bus can be an excellent alternative. Evaluating both options before booking ensures a more enjoyable and stress-free travel experience.",
      },
    ],
    buttonText: "Read More",
    isFeatured: false,
    isPopular:true,
  },

  {
    slug: "p6",
    category: "DEVELOPMENT",
    date: "11 March 2023",
    title: "Best Website to research for your next project",
    heroImage: "/posts/recent-post-image.png",
    cardImage: "/posts/popular-post-2.png",
    content: [
      {
        type: "paragraph",
        text: "Successful projects begin with thorough research. Whether you're designing a website, developing an application, or conducting academic work, gathering reliable information helps you make informed decisions and avoid costly mistakes. Modern research platforms provide access to design inspiration, technical documentation, user feedback, market trends, and case studies that can significantly improve the quality of your final product.",
      },
      {
        type: "paragraph",
        text: "A combination of resources often produces the best results. Design platforms help you discover interface patterns and user experiences, while official documentation ensures you follow recommended implementation practices. Community forums and developer blogs offer practical solutions to real-world problems, allowing you to learn from professionals who have already faced similar challenges. Organizing your findings into notes or mood boards also makes it easier to reference information throughout the development process.",
      },
      {
        type: "quote",
        text: "Research is creating new knowledge.",
        author: "Neil Armstrong",
      },
      {
        type: "paragraph",
        text: "When evaluating online resources, always consider their credibility and how recently the information was updated. Technology evolves rapidly, and outdated tutorials or documentation may no longer reflect current best practices. Comparing information from multiple trusted sources helps verify accuracy and provides a broader understanding of different approaches to solving the same problem.",
      },
      {
        type: "image",
        src: "/posts/content-image.png",
      },
      {
        type: "paragraph",
        text: "The most effective developers continuously research throughout the entire project lifecycle rather than only during the planning stage. Staying curious, experimenting with new tools, and learning from industry experts enables you to build better products and adapt to changing technologies. Investing time in quality research ultimately leads to more efficient development, improved user experiences, and stronger long-term project success.",
      },
    ],
    buttonText: "Read More",
    isFeatured: false,
    isPopular:true
  },

  {
    slug: "p7",
    category: "Sports",
    date: "10 March 2023",
    title: "How to Be a Dancer in 2023 with proper skills?",
    heroImage: "/posts/recent-post-image.png",
    cardImage: "/posts/popular-post-3.png",
    content: [
      {
        type: "paragraph",
        text: "Becoming a skilled dancer requires dedication, consistent practice, and a passion for learning. Whether your goal is to perform professionally or simply improve your abilities, mastering the fundamentals is the first step toward success. Building strength, flexibility, rhythm, and coordination allows dancers to perform confidently while reducing the risk of injury during rehearsals and live performances.",
      },
      {
        type: "paragraph",
        text: "Training with experienced instructors and exploring different dance styles can help you discover your strengths while expanding your skill set. Recording practice sessions, accepting constructive feedback, and regularly performing in front of an audience are excellent ways to measure progress. Consistency is more important than intensity, and even short daily practice sessions can produce remarkable improvements over time.",
      },
      {
        type: "quote",
        text: "Great dancers are not great because of their technique, they are great because of their passion.",
        author: "Martha Graham",
      },
      {
        type: "paragraph",
        text: "Physical fitness plays an important role in every dancer's journey. A balanced diet, proper hydration, adequate sleep, and regular recovery sessions help maintain energy levels and improve overall performance. Stretching before and after practice, along with strength and endurance exercises, prepares the body for demanding choreography and helps prevent common dance-related injuries.",
      },
      {
        type: "image",
        src: "/posts/content-image.png",
      },
      {
        type: "paragraph",
        text: "Today's dancers can also benefit from sharing their work online through social media and video platforms. Building a professional portfolio, participating in competitions, and collaborating with other performers creates valuable opportunities for growth and recognition. By combining technical training with creativity, discipline, and confidence, aspiring dancers can develop the skills needed to succeed in the modern dance industry.",
      },
    ],
    buttonText: "Read More",
    isFeatured: false,
    isPopular:true
  },

  {
    slug: "p8",
    category: "Travel",
    date: "13 March 2023",
    title: "Who is the best singer on chart? Know him?",
    heroImage: "/posts/recent-post-image.png",
    cardImage: "/posts/popular-post-4.png",
    content: [
      {
        type: "paragraph",
        text: "Music charts have long been a measure of an artist's popularity, consistency, and cultural impact. Rankings such as the Billboard Hot 100 evaluate artists based on album sales, streaming numbers, radio airplay, and audience engagement. While topping the charts is a remarkable achievement, maintaining success over many years is what truly defines legendary performers and secures their place in music history.",
      },
      {
        type: "paragraph",
        text: "The world's greatest singers are known not only for their chart-topping hits but also for their ability to connect with audiences through meaningful lyrics, memorable performances, and musical innovation. Many artists continuously reinvent their style to remain relevant while inspiring new generations of musicians. Their influence often extends beyond music, shaping fashion, entertainment, and popular culture across the globe.",
      },
      {
        type: "quote",
        text: "One good thing about music, when it hits you, you feel no pain.",
        author: "Bob Marley",
      },
      {
        type: "paragraph",
        text: "With the rise of digital streaming platforms, the music industry has evolved significantly. Fans can now discover artists from different countries, genres, and cultures with just a few clicks. Streaming services, social media, and video platforms have created opportunities for talented musicians to build global audiences without relying solely on traditional record labels, making the competition for chart positions more exciting than ever.",
      },
      {
        type: "image",
        src: "/posts/content-image.png",
      },
      {
        type: "paragraph",
        text: "Although charts provide valuable insights into an artist's commercial success, personal preference remains the most important factor in choosing a favorite singer. Every listener connects with music differently, and each artist brings a unique voice, style, and message to their audience. Exploring a variety of genres and performers allows music lovers to appreciate the diversity and creativity that make the industry so inspiring.",
      },
    ],
    buttonText: "Read More",
    isFeatured: false,
    isPopular:true
  },

  {
    slug: "p9",
    category: "DEVELOPMENT",
    date: "11 March 2023",
    title: "How to start export import business from home?",
    heroImage: "/posts/recent-post-image.png",
    cardImage: "/posts/popular-post-5.png",

    content: [
      {
        type: "paragraph",
        text: "Starting an export-import business from home has become more accessible than ever thanks to digital marketplaces and global communication tools. Entrepreneurs can research international markets, connect with suppliers, and communicate with buyers without the need for a physical office. Success begins with selecting a profitable niche, understanding customer demand, and identifying reliable manufacturers or distributors who can consistently deliver quality products.",
      },
      {
        type: "paragraph",
        text: "Before launching your business, it is important to understand the legal and financial requirements involved in international trade. Register your business, obtain any required licenses, and become familiar with customs regulations, taxes, shipping documentation, and payment methods. Working with trusted freight forwarders and logistics providers can simplify the shipping process and help ensure that goods reach customers safely and on time.",
      },
      {
        type: "quote",
        text: "Opportunities don't happen. You create them.",
        author: "Chris Grosser",
      },
      {
        type: "paragraph",
        text: "Building strong relationships with both suppliers and customers is essential for long-term growth. Clear communication, transparent pricing, and timely deliveries help establish trust and encourage repeat business. Using digital marketing, professional websites, and online marketplaces can also expand your reach, allowing you to attract customers from different countries while building a recognizable brand in the global marketplace.",
      },
      {
        type: "image",
        src: "/posts/content-image.png",
      },
      {
        type: "paragraph",
        text: "As your business grows, continue analyzing market trends and customer preferences to identify new opportunities. Diversifying your product range, improving operational efficiency, and investing in technology can help you stay competitive in the fast-changing world of international trade. With careful planning, consistent learning, and a customer-focused approach, a home-based export-import business can develop into a successful and sustainable enterprise.",
      },
    ],
    buttonText: "Read More",
    isFeatured: false,
    isPopular:true
  },

  {
    slug: "p10",
    category: "Sports",
    date: "10 March 2023",
    title: "Make some drinks with chocolates and milk",
    heroImage: "/posts/recent-post-image.png",
    cardImage: "/posts/popular-post-6.png",
    content: [
      {
        type: "paragraph",
        text: "Chocolate and milk are a timeless combination that can be transformed into a variety of delicious beverages for every season. Whether you prefer a warm cup of hot chocolate on a cold evening or a refreshing iced chocolate drink during summer, a few quality ingredients are all you need to prepare a satisfying homemade treat. Experimenting with different types of chocolate and milk can create unique flavors and textures that suit every taste.",
      },
      {
        type: "paragraph",
        text: "Start by choosing high-quality dark, milk, or white chocolate and combine it with your preferred type of milk, such as whole milk, almond milk, oat milk, or soy milk. Gently heat the mixture while stirring continuously until the chocolate melts completely. You can enhance the flavor with ingredients like vanilla extract, cinnamon, caramel syrup, coffee, or a pinch of sea salt to create café-style drinks from the comfort of your home.",
      },
      {
        type: "quote",
        text: "There is nothing better than a friend, unless it is a friend with chocolate.",
        author: "Linda Grayson",
      },
      {
        type: "paragraph",
        text: "Presentation also plays an important role in making homemade drinks more enjoyable. Top your beverage with whipped cream, chocolate shavings, marshmallows, or cocoa powder for an attractive finish. For chilled drinks, blend the chocolate mixture with ice cubes to create a rich and creamy chocolate frappe that is perfect for warm afternoons or special gatherings with friends and family.",
      },
      {
        type: "image",
        src: "/posts/content-image.png",
      },
      {
        type: "paragraph",
        text: "Preparing chocolate drinks at home allows you to control the sweetness and customize each recipe according to your preferences. Trying different combinations of flavors and toppings is a fun way to discover new favorites while sharing memorable moments with loved ones. With a little creativity and a few simple ingredients, you can create delicious beverages that rival those served in your favorite cafés.",
      },
    ],
    buttonText: "Read More",
    isFeatured: false,
    isPopular:true
  },
];

