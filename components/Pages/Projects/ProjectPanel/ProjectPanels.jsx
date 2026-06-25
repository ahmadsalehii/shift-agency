import { Tab } from "@headlessui/react";
import ProjectPanelCard from "../ProjectPanelCard/ProjectPanelCard";
import ProjectPanel from "./ProjectPanel";

const ProjectPanels = () => {
  return (
    <Tab.Panels>
      <ProjectPanel>
        <ProjectPanelCard />
        <ProjectPanelCard />
      </ProjectPanel>
      <Tab.Panel>Branding</Tab.Panel>
      <Tab.Panel>Digital</Tab.Panel>
      <Tab.Panel>Development</Tab.Panel>
      <Tab.Panel>Marketing</Tab.Panel>
    </Tab.Panels>
  );
};

export default ProjectPanels;
