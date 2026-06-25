"use client";

import { Tab } from "@headlessui/react";

const TabPanels = ({ children, className }) => {
  return <Tab.Panels className={className}>{children}</Tab.Panels>;
};

export default TabPanels;
