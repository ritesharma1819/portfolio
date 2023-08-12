import React from "react";
import FacebookIcon from "@/public/assets/icons/facebookIcon.svg";
import LinkedInIcon from "@/public/assets/icons/linkedInIcon.svg";
import TwitterIcon from "@/public/assets/icons/twitterIcon.svg";
import ReactIcon from "@/public/assets/icons/reactIcon.svg";
import NextJsIcon from "@/public/assets/icons/nextJsIcon.svg";
import TailwindIcon from "@/public/assets/icons/tailwindIcon.svg";
import GraphqlIcon from "@/public/assets/icons/graphqlIcon.svg";

import Link from "next/link";

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
            href="https://www.facebook.com/rs211638"
            target="_blank"
          >
            <FacebookIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <NextJsIcon />
          </span>
          <span className="bannerIcon">
            <ReactIcon />
          </span>
          <span className="bannerIcon">
            <GraphqlIcon />
          </span>
          <span className="bannerIcon">
            <TailwindIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
