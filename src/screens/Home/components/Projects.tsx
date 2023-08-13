import ProjectsCard from "@/src/components/ProjectsCard";
import Title from "@/src/components/TitleLayout";
import { projectListData } from "@/src/utils/constants";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projectListData.map((item, index) => (
          <ProjectsCard
            key={index}
            title={item.title}
            des={item.description}
            src={item.image}
            githubLink={item.github}
            liveLink={item.liveLink}
            builtIn={item.builtIn}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
