"use client";

import { Disclosure, Transition } from "@headlessui/react";
import ChevronUpIcon from "./icons/ChevronUpIcon";

const ServicesSectionAccordionItem = ({ icon, title, children }) => {
  return (
    <div className="py-6 w-full">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full">
              <div className="flex flex-col">
                {icon}
                <div className="flex justify-between mt-4 pb-6 border-b border-black border-opacity-10">
                  <p className="text-[16px] lg:text-[24px] leading-[20px] lg:leading-[28.8px]">{title}</p>
                  <ChevronUpIcon className={open ? "rotate-0" : "rotate-180"} />
                </div>
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
              <Disclosure.Panel className="py-6 border-b border-black border-opacity-10">
                {children}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default ServicesSectionAccordionItem;
