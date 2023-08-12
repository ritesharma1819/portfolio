import React from "react";
import LeftBanner from "./components/LeftBanner";
import RightBanner from "./components/RightBanner";

const Home = () => {
  return (
    <div className="px-9">
      <section
        id="home"
        className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
      >
        <LeftBanner />
        <RightBanner />
      </section>
    </div>
  );
};

export default Home;
