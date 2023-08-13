import Commerce from "@/public/assets/e-Commerce.png";
import Instagram from "@/public/assets/instagram.jpg";
import RawUpLogo from "@/public/assets/rawUpLogo.png";
import Youtube from "@/public/assets/youtube.jpg";

export const navLinksdata = [
  {
    _id: 1001,
    title: "Home",
    link: "home",
  },
  {
    _id: 1002,
    title: "About Me",
    link: "about-me",
  },
  {
    _id: 1003,
    title: "Projects",
    link: "projects",
  },

  {
    _id: 1004,
    title: "Contact",
    link: "contact",
  },
];

export const projectListData = [
  {
    id: 1,
    title: "Youtube Clone",
    description:
      "A Youtube Clone built using Next, Redux, Firebase, Material UI, Axios, and Youtube Official API.",
    image: Youtube,
    github: "https://github.com/ritesharma1819/youtube-clone",
    liveLink: "https://youtube-clone-next-firebase.vercel.app/login",
    builtIn: "Next, Firebase, Material UI",
  },
  {
    id: 2,
    title: "Fire-Commerce",
    description:
      "An E-Commerce website built using React, Redux, Firebase, and Boostrap",
    image: Commerce,
    github: "https://github.com/ritesharma1819/fire-commerce",
    liveLink: "https://fire-commerce-11wgv3sf8-ritesharma1819.vercel.app/login",
    builtIn: "React, Firebase, Redux",
  },
  {
    id: 3,
    title: "Raw-Up",
    description:
      "A Social Media website built using Next,TypeScript, Tailwind and Firebase",
    image: RawUpLogo,
    github: "https://github.com/ritesharma1819/raw-up",
    liveLink: "https://raw-up.vercel.app/",
    builtIn: "React, Firebase, Redux",
  },
  {
    id: 4,
    title: "Instagram Clone",
    description:
      "An Instagram Clone built using React, Redux, Firebase, and React-Routers",
    image: Instagram,
    github: "https://github.com/ritesharma1819/instagram-clone",
    liveLink: "https://instagram-clone-beta-dun.vercel.app/",
    builtIn: "React, Firebase, Redux",
  },
];
