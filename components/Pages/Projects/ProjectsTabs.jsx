"use client";

import { Tab } from "@headlessui/react";
import ProjectPanels from "./ProjectPanel/ProjectPanels";
import TabList from "@/components/Tabs/TabList";
import TabItem from "@/components/Tabs/TabItem";
import TabGroup from "@/components/Tabs/TabGroup";

const ProjectsTabs = () => {
  return (
    <div className="mt-12 lg:mt-10">
      <TabGroup>
        <TabList>
          <TabItem>All</TabItem>
          <TabItem>Branding</TabItem>
          <TabItem>Digital Design</TabItem>
          <TabItem>Development</TabItem>
          <TabItem>Marketing</TabItem>
        </TabList>
        <div className="mt-2"></div>
        <ProjectPanels />
      </TabGroup>
    </div>
  );
};

export default ProjectsTabs;
