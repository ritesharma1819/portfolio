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
          I graduated from ITS Engineering College in 2022 with a degree in
          Mechanical Engineering. Currently, I am a Software Engineer with over
          3+ years of experience in building and optimizing web applications. My
          technical expertise includes{" "}
          <code>
            <b>
              React.js, Next.js, React Native, TypeScript, JavaScript, GraphQL,
              and Tailwind CSS, with additional familiarity in Flutter
            </b>
          </code>{" "}
          .
        </p>
        <br />
        <p className="w-full md:w-[80%] text-center flex justify-center">
          I am deeply passionate about learning new technologies and sharing my
          knowledge openly with the community. I am a self-motivated,
          hardworking individual who believes in working smart. A good team
          player, I thrive in collaborative environments, and my ability to
          listen actively and learn quickly enables me to adapt to new
          challenges effectively. I am always eager to explore emerging
          technologies and apply them to create impactful solutions in my work.
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
