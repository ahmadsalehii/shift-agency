import ProjectsTabs from "@/components/Pages/Projects/ProjectsTabs";
import ProjectsTitle from "@/components/Pages/Projects/ProjectsTitle";

const page = () => {
  return (
    <div className="app-container flex flex-col">
      <ProjectsTitle />
      <ProjectsTabs />
    </div>
  );
};

export default page;
