"use client";

import { Tab } from "@headlessui/react";

const TabItem = ({ children }) => {
  return (
    <Tab className="outline-none">
      {({ selected }) => (
        <p
          className={`border-b-[3px] capitalize text-[18px] leading-[32px] px-6 py-4 ${
            selected
              ? "border-black text-black"
              : "boder-white text-app-text-details opacity-50"
          }`}
        >
          {children}
        </p>
      )}
    </Tab>
  );
};

export default TabItem;
