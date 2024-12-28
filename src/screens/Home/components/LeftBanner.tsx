/* eslint-disable react/no-unescaped-entities */
import { Cursor, useTypewriter } from "react-simple-typewriter";

import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Software Engineer.", "Sports Enthusiast."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Ritesh Sharma</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking={false}
            cursorStyle="|"
            cursorColor="#c87f67"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am passionate about the dynamic realm of web and app development, I
          shifted my focus to become a skilled Software Engineer.
        </p>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
