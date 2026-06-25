import OutlineButton from "@/components/Buttons/OutlineButton";
import SectionTitle from "../SectionTitle";
import ProjectItem from "./ProjectItem";

import ProjectImage1 from "@/public/images/projects/1.png";
import ProjectImage2 from "@/public/images/projects/2.png";
import ProjectImage3 from "@/public/images/projects/3.png";
import ProjectImage4 from "@/public/images/projects/4.png";

const projectsData = [
  {
    title: "DoritaChemistry - Website",
    image: ProjectImage1,
    startDate: "Dec 10",
    endDate: "Jan 07",
    progress: 0,
    daysLeft: 21,
  },
  {
    title: "Markored - Online Super Market",
    image: ProjectImage2,
    startDate: "Dec 10",
    endDate: "Jan 07",
    progress: 67,
    daysLeft: 21,
  },
  {
    title: "TaskBox - Project Management",
    image: ProjectImage3,
    startDate: "Dec 10",
    endDate: "Jan 07",
    progress: 100,
    daysLeft: 0,
  },
  {
    title: "HomeFinder - Real state platform",
    image: ProjectImage4,
    startDate: "Dec 10",
    endDate: "Jan 07",
    progress: 93,
    daysLeft: 4,
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col">
      <SectionTitle bgText="our projects" text="Featured works" />
      <div className="app-container grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mt-6">
        {projectsData.map((project) => (
          <ProjectItem
            key={project.title}
            title={project.title}
            image={project.image}
            startDate={project.startDate}
            endDate={project.endDate}
            progress={project.progress}
            daysLeft={project.daysLeft}
          />
        ))}
      </div>
      <div className="app-container mt-12 hidden lg:block">
        <OutlineButton className="h-16">All Projects</OutlineButton>
      </div>
    </div>
  );
};

export default Projects;
