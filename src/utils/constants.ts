import Commerce from "@/public/assets/e-Commerce.png";
import SmartMoney from "@/public/assets/smartMoney.jpg";
import Smartrr from "@/public/assets/smartrr.jpg";
import EKyc from "@/public/assets/ekyc.jpg";
import Backoffice from "@/public/assets/backoffice.jpg";
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
    title: "Smart-Money",
    description:
      "An Angel One project that helps users learn and gain knowledge about trading.",
    image: SmartMoney,
    github: "",
    liveLink: "https://www.angelone.in/smart-money",
    builtIn: "NextJs, TypeScript , Tailwind, Redux",
  },
  {
    id: 2,
    title: "Smartrr",
    description:
      "Smartrr is used to display reviews of products, companies, services, tools, and more.",
    image: Smartrr,
    github: "",
    liveLink: "https://smartrr.me/",
    builtIn: "Next, GraphQL, Apollo ,Tailwind",
  },
  {
    id: 3,
    title: "E-Kyc",
    description: "e-KYC is a process that helps validate user verification.",
    image: EKyc,
    github: "",
    liveLink: "https://almondztrade.com/open-demat-account",
    builtIn: "ReactJs, Redux, RTK Query, TypeScript",
  },
  {
    id: 4,
    title: "Client Backoffice",
    description:
      "Back-office is a portal where clients can view their portfolio, holdings, apply for IPOs, and more.",
    image: Backoffice,
    github: "",
    liveLink: "https://almondztrade.com/backoffice/login",
    builtIn: "NextJs, Redux, RTK Query, TypeScript",
  },
  {
    id: 5,
    title: "Fire-Commerce",
    description:
      "An E-Commerce website built using React, Redux, Firebase, and Boostrap",
    image: Commerce,
    github: "https://github.com/ritesharma1819/fire-commerce",
    liveLink: "https://fire-commerce-11wgv3sf8-ritesharma1819.vercel.app/login",
    builtIn: "ReactJs, Firebase, Redux",
  },
  {
    id: 6,
    title: "Youtube Clone",
    description:
      "A Youtube Clone built using Next, Redux, Firebase, Material UI, Axios, and Youtube Official API.",
    image: Youtube,
    github: "https://github.com/ritesharma1819/youtube-clone",
    liveLink: "https://youtube-clone-next-firebase.vercel.app/login",
    builtIn: "NextJs, Firebase, Material UI",
  },
];
