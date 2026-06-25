"use client";

import { Tab } from "@headlessui/react";

const TabList = ({ children }) => {
  return (
    <>
      <Tab.List className="text-[18px] leading-[32.4px] gap-12 flex overflow-x-scroll lg:overflow-x-hidden whitespace-nowrap">
        {children}
      </Tab.List>
      <div className="border-b-[2px] border-black border-opacity-20 -mt-[1px]"></div>
    </>
  );
};

export default TabList;
