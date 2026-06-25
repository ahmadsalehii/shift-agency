import BrandingIcon from "../../Index/Services/icons/BrandingIcon";
import ProjectPanelCardAccordion from "./ProjectPanelCardAccordion";
import ProjectPanelCardInfo from "./ProjectPanelCardInfo";
import ProjectPanelCardProgress from "./ProjectPanelCardProgress";

import ProjectImage from "@/public/images/projects/1.png";

const ProjectPanelCard = () => {
  return (
    <div className="mt-6 p-6 rounded-[8px] border-[1px] border-[#E0E0E0] flex flex-col">
      <ProjectPanelCardInfo
        title="DoritaChemistry - Website (Not-Started)"
        category="Branding - Digital Design"
        image={ProjectImage}
        startDate="Sep 08"
        endDate="Jan 16"
      />
      <ProjectPanelCardProgress progress={60} daysLeft={21} />
      <div className="mt-2 flex flex-col">
        <ProjectPanelCardAccordion
          title="Branding"
          icon={<BrandingIcon size="24" />}
          doneTasks={["Application Ui/Ux", "Application illustrations"]}
          pendingTasks={[]}
          notStartedTasks={["Website Ui/Ux", "Website Icons"]}
        />
        <ProjectPanelCardAccordion
          title="Branding"
          icon={<BrandingIcon size="24" />}
          doneTasks={[
            "Application Ui/Ux",
            "Application illustrations",
            "Website Ui/Ux",
          ]}
        />
      </div>
    </div>
  );
};

export default ProjectPanelCard;
