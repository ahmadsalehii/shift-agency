import ArrowButton from "@/components/Buttons/ArrowButton";
import Image from "next/image";
import ProjectDateIcon from "./ProjectDateIcon";

const ProjectItem = ({
  title,
  image,
  startDate,
  endDate,
  progress,
  daysLeft,
}) => {
  return (
    <div className="flex flex-col">
      <Image
        src={image}
        alt={title}
        className="w-full rounded-[8px]"
        style={{ border: "1px solid rgba(51, 102, 232, 0.2)" }}
      />
      <div className="mt-5 flex justify-between items-center">
        <h4 className="text-app-main-text font-medium text-[18px] lg:text-[24px] leading-[23px] lg:leading-[28.8px]">
          {title}
        </h4>
        <div className="hidden lg:flex">
          <ArrowButton />
        </div>
      </div>
      <div className="mt-3 flex gap-2 items-center">
        <ProjectDateIcon />
        <p className="text-[16px] lg:text-[20px] leading-[21px] lg:leading-[35px] text-app-text-details opacity-80 lg:opacity-100 lg:text-black">
          Start: {startDate} - End {endDate}
        </p>
      </div>
      <div className="relative mt-8 h-[3px] rounded-[8px] bg-[#EDEDED]">
        <div
          className="h-full left-0 top-0 absolute bg-[#3ABE37]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="mt-2 flex justify-between items-center">
        <p className="text-[16px] lg:text-[18px] leading-[21px] lg:leading-[32.4px]">
          {progress == 0 ? "Not Started" : `${progress}% Completed`}
        </p>
        <p className="text-[14px] lg:text-[18px] leading-[18px] lg:leading-[32.4px] text-app-text-details opacity-80 lg:opacity-100">
          {daysLeft == 0 ? "Done" : `${daysLeft} Days Left`}
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
