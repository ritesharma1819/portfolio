import Link from "next/link";

import FacebookIcon from "@/public/assets/icons/facebookIcon.svg";
import GraphqlIcon from "@/public/assets/icons/graphqlIcon.svg";
import LinkedInIcon from "@/public/assets/icons/linkedInIcon.svg";
import NextJsIcon from "@/public/assets/icons/nextJsIcon.svg";
import ReactIcon from "@/public/assets/icons/reactIcon.svg";
import TailwindIcon from "@/public/assets/icons/tailwindIcon.svg";
import TwitterIcon from "@/public/assets/icons/twitterIcon.svg";
import GithubIcon from "@/public/assets/icons/githubIcon.svg";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <Link
            className="bannerIcon"
            href="https://www.linkedin.com/in/ritesharma1819/"
            target="_blank"
          >
            <LinkedInIcon className="w-4 h-4" />
          </Link>
          <Link
            className="bannerIcon"
            href="https://twitter.com/Ritesharma1819"
            target="_blank"
          >
            <TwitterIcon className="w-4 h-4" />
          </Link>
          <Link
            className="bannerIcon"
            href="https://github.com/ritesharma1819"
            target="_blank"
          >
            <GithubIcon className="w-5 h-5 fill-white" />
          </Link>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <Link
            className="bannerIcon"
            href="https://nextjs.org/"
            target="_blank"
          >
            <NextJsIcon className="w-8 h-8" />
          </Link>
          <Link
            className="bannerIcon"
            href="https://react.dev/"
            target="_blank"
          >
            <ReactIcon className="w-8 h-8" />
          </Link>
          <Link
            className="bannerIcon"
            href="https://graphql.org/"
            target="_blank"
          >
            <GraphqlIcon className="w-8 h-8" />
          </Link>
          <Link
            className="bannerIcon"
            href="https://tailwindcss.com/"
            target="_blank"
          >
            <TailwindIcon className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Media;
