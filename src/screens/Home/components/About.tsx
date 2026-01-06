/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Title from "@/src/components/TitleLayout";

const About = () => {
  return (
    <section id="about-me" className="w-full border-b border-gray-700 py-20">
      <div className="flex justify-center text-center mb-10">
        <Title title="About Me" des="Who I Am" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center text-gray-300 leading-7">
        <p>
          I graduated from{" "}
          <span className="font-semibold text-white">
            ITS Engineering College
          </span>{" "}
          in 2022 with a degree in Mechanical Engineering. Currently, I am a{" "}
          <span className="font-semibold text-white">Software Engineer</span>{" "}
          with over{" "}
          <span className="font-semibold text-designColor">
            4+ years of experience
          </span>{" "}
          building scalable, high-performance web and mobile applications.
        </p>

        <p>
          I specialize in modern frontend technologies including{" "}
          <span className="font-semibold text-white">
            React.js, Next.js, React Native, Expo, TypeScript, JavaScript,
            Tailwind CSS, Firebase, and GraphQL
          </span>
          , and have hands-on experience developing fintech platforms,
          AI-powered products, trading applications, and complex user workflows
          from scratch.
        </p>

        <p className="max-w-3xl text-gray-400">
          I am passionate about crafting clean user experiences, solving
          real-world problems, and continuously learning new technologies. I
          thrive in collaborative environments, take ownership of critical
          features, and enjoy building products that create real impact for
          users and businesses.
        </p>
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/assets/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-gray-400 px-6 py-3 text-lg font-semibold text-gray-200 transition-all duration-300 hover:bg-white hover:text-black"
        >
          Get My Resume
        </Link>
      </div>
    </section>
  );
};

export default About;
