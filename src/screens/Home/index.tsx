import LeftBanner from "@/src/screens/Home/components/LeftBanner";
import RightBanner from "@/src/screens/Home/components/RightBanner";
import Projects from "./components/Projects";

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
      <Projects />
    </div>
  );
};

export default Home;
