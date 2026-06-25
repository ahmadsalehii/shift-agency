"use client";

import { Tab } from "@headlessui/react";

const TabGroup = ({ children, className }) => {
  return (
    <div className={`w-full ${className}`}>
      <Tab.Group>{children}</Tab.Group>
    </div>
  );
};

export default TabGroup;
