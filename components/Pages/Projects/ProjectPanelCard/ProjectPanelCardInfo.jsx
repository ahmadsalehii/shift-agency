import Image from "next/image";

import ProjectDateIcon from "../../Index/Projects/ProjectDateIcon";
import ArrowTopRightBig from "../icons/ArrowTopRightBig";
import Link from "next/link";

const ProjectPanelCardInfo = ({
  image,
  title,
  category,
  startDate,
  endDate,
}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center">
      <div className="w-full lg:w-auto flex flex-row justify-between items-center gap-3">
        <Image
          src={image}
          alt={title}
          className="w-14 h-14 object-cover rounded-[5px] border-[1px] border-[#D6E0FA]"
        />
        <div className="flex flex-col items-start text-[18px] leading-[23px]">
          <h3 className="truncate max-w-[60%] lg:max-w-max font-medium text-app-main-text text-[18px] leading-[23.4px]">
            {title}
          </h3>
          <p className="truncate max-w-[60%] lg:max-w-max mt-[10px] text-[18px] leading-[23.4px] text-app-text-details opacity-50">
            {category}
          </p>
        </div>
        {/* test */}
      </div>
      <div className="hidden lg:flex items-center gap-[22px] ">
        <div className="rounded-full flex items-center gap-2 border-[1px] border-black border-opacity-[0.08] py-4 px-5">
          <ProjectDateIcon />
          <p className="text-[16px] leading-[21px] text-app-text-details opacity-80">
            Start: {startDate} - End {endDate}
          </p>
        </div>
        <div className="w-14 h-14 rounded-full bg-app-main flex items-center justify-center">
          <Link href="/projects/dorita-chemistry">
            <ArrowTopRightBig />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectPanelCardInfo;
