import ScrollWithArrow from "@/components/Buttons/ScrollWithArrow";

const ProjectsTitle = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-col">
        <p className="capitalize opacity-30 text-[18px] lg:text-[20px] leading-[32.4px] lg:leading-[35px] text-app-text-details">
          our projects
        </p>
        <h2 className="mt-4 text-app-main-text text-[28px] lg:text-[55px] leading-[36px] lg:leading-[71.5px] max-w-[850px]">
          These are products that we helped to made
        </h2>
      </div>
      <ScrollWithArrow className="hidden lg:flex" color="#808080" />
    </div>
  );
};

export default ProjectsTitle;
