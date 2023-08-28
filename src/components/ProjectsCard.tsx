import Image, { StaticImageData } from "next/image";
import { FC } from "react";

import Link from "next/link";
import GithubIcon from "/public/assets/icons/githubIcon.svg";

import LinkNavIcon from "/public/assets/icons/linkNavIcon.svg";

interface IProjectsCardProps {
  title: string;
  des: string;
  src: StaticImageData;
  githubLink: string;
  liveLink: string;
  builtIn: string;
}

const ProjectsCard: FC<IProjectsCardProps> = ({
  title,
  des,
  src,
  builtIn,
  githubLink,
  liveLink,
}) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <Link
        href={githubLink}
        target="_blank"
        className="w-full h-[80%] overflow-hidden rounded-lg"
      >
        <Image
          className="w-full h-64 object-contain group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </Link>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <Link
                href={githubLink}
                target="_blank"
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
              >
                <GithubIcon className="w-6 h-6 fill-white" />
              </Link>
              <Link
                href={liveLink}
                target="_blank"
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
              >
                <LinkNavIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
          <h4 className="text-sm text-designColor mt-3">{builtIn}</h4>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
