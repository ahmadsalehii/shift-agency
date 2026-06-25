"use client";

import { Tab } from "@headlessui/react";

const TabPanel = ({ children }) => {
  return <Tab.Panel>{children}</Tab.Panel>;
};

export default TabPanel;
