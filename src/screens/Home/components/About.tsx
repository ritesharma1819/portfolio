/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

import Title from "@/src/components/TitleLayout";

const About = () => {
  return (
    <section
      id="about-me"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="About Me" des="About Me" />
      </div>
      <div className="text-center flex flex-col justify-center items-center gap-4">
        <p>
          I'm a graduate at ITS Engineering College, where I majored in the
          Mechanical department and successfully completed my degree in 2022.
        </p>
        <br />
        <p className="w-full md:w-[80%] text-center flex justify-center">
          I am a Frontend Developer with 2+ years of experience in building web
          applications. I have a passion for learning and sharing my knowledge
          with others as publicly as possible. I am a self-motivated and
          hardworking person. I believe in smart work and I am a good team
          player. I am a good listener and a quick learner. I am always ready to
          learn new technologies and implement them in my work.
        </p>
      </div>
      <Link
        href="/assets/resume.pdf"
        passHref
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center text-center mt-10 font-semibold text-xl underline hover:text-designColor"
      >
        Get My Resume
      </Link>
    </section>
  );
};

export default About;
