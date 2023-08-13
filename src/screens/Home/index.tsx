import LeftBanner from "@/src/screens/Home/components/LeftBanner";
import RightBanner from "@/src/screens/Home/components/RightBanner";
import Projects from "@/src/screens/Home/components/Projects";
import Contact from "@/src/screens/Home/components/Contact";
import About from "@/src/screens/Home/components/About";

const Home = () => {
  return (
    <div className="px-8 md:px-16">
      <section
        id="home"
        className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
      >
        <LeftBanner />
        <RightBanner />
      </section>
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
