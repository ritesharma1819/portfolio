import Link from "next/link";
import { useState } from "react";
import * as Scroll from "react-scroll";

import CloseIcon from "@/public/assets/icons/closeIcon.svg";
import FacebookIcon from "@/public/assets/icons/facebookIcon.svg";
import LinkedInIcon from "@/public/assets/icons/linkedInIcon.svg";
import TwitterIcon from "@/public/assets/icons/twitterIcon.svg";
import { navLinksdata } from "@/src/utils/constants";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  let ScrollLink: any = Scroll.Link;

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-700 px-8">
      <Link
        href="/"
        className="w-10 h-10 text-lightText rounded-full flex justify-center items-center"
      >
        <span className="text-designColor">R</span>S
      </Link>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <ScrollLink
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <Link
                  href="/"
                  className="w-10 h-10 text-lightText rounded-full flex justify-center items-center"
                >
                  <span className="text-designColor">R</span>S
                </Link>
                <p className="text-sm text-gray-400 mt-2">
                  I am passionate about the dynamic realm of web development, I
                  shifted my focus to become a skilled Frontend Developer.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <ScrollLink
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4 text-designColor">
                  Find me in
                </h2>
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
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <CloseIcon className="w-6 h-6" />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
