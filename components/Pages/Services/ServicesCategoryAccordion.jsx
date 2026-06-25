import { Disclosure, Transition } from "@headlessui/react";
import React from "react";
import ChevronUpIcon from "../Index/Services/icons/ChevronUpIcon";

const ServicesCategoryAccordion = ({ icon, title, children }) => {
  return (
    <div className="p-0 py-10 lg:p-10 w-full border-b border-black border-opacity-10">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full">
              <div className="flex justify-between">
                <div className="flex items-center gap-4">
                  {icon}
                  <p className="font-medium text-app-main-text text-[16px] lg:text-[24px] leading-[21px] lg:leading-[28.8px]">
                    {title}
                  </p>
                </div>
                <ChevronUpIcon className={open ? "rotate-0" : "rotate-180"} />
              </div>
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="pt-8 lg:pl-12">{children}</Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default ServicesCategoryAccordion;
