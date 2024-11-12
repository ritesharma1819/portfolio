import About from "@/src/screens/Home/components/About";
import Contact from "@/src/screens/Home/components/Contact";
import LeftBanner from "@/src/screens/Home/components/LeftBanner";
import Projects from "@/src/screens/Home/components/Projects";
import RightBanner from "@/src/screens/Home/components/RightBanner";
import { useEffect } from "react";
import { renderCanvas } from "./components/RenderCanvas";

const Home = () => {
  useEffect(() => {
    renderCanvas();
  }, []);
  return (
    <div className="px-8 md:px-16">
      <section
        id="home"
        className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
      >
        <LeftBanner />
        <RightBanner />
      </section>
      <canvas
        className="bg-skin-base pointer-events-none absolute inset-0 max-w-full"
        id="canvas"
      ></canvas>
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
