import { Tab } from "@headlessui/react";

const ProjectPanel = ({ children }) => {
  return <Tab.Panel className="flex flex-col">{children}</Tab.Panel>;
};

export default ProjectPanel;
