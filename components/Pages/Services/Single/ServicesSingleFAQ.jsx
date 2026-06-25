import { Disclosure } from "@headlessui/react";
import MinusIcon from "../icons/MinusIcon";
import PlusIcon from "../icons/PlusIcon";

const ServicesSingleFAQ = () => {
  return (
    <div className="flex flex-col lg:flex-row app-container mt-10 lg:mt-16">
      <h5 className="text-[24px] lg:text-[56px] leading-[31px] lg:leading-[73px] font-bold w-[165px]">
        FAQ
      </h5>
      <div className="lg:ml-[30px] text-start mt-3 lg:mt-0 w-full">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full py-6 flex justify-between items-start lg:items-center border-b">
                <p className="text-left pr-12 lg:pr-0 flex items-center lg:max-w-max text-[16px] lg:text-[24px] leading-[20.8px] lg:leading-[28.8px]">
                  How much does it cost to make animation?
                </p>
                {open ? <MinusIcon /> : <PlusIcon />}
              </Disclosure.Button>
              <Disclosure.Panel>
                <p className="py-6 text-[18px] leading-[32px] text-app-main-text">
                  The cost of the brand book development depends on the number
                  of elements you want to get, as well as on the number of
                  iterations and improvements required to complete the work. The
                  average price for creating 2 or 3 variants of the visual
                  elements is $2,000–2,500.
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full py-6 flex justify-between items-start lg:items-center border-b">
                <p className="text-left pr-12 lg:pr-0 flex items-center lg:max-w-max  text-[16px] lg:text-[24px] leading-[20.8px] lg:leading-[28.8px]">
                  What is a brand book and what are its functions?
                </p>
                {open ? <MinusIcon /> : <PlusIcon />}
              </Disclosure.Button>
              <Disclosure.Panel>
                <p className="py-6 text-[18px] leading-[32px] text-app-main-text">
                  The cost of the brand book development depends on the number
                  of elements you want to get, as well as on the number of
                  iterations and improvements required to complete the work. The
                  average price for creating 2 or 3 variants of the visual
                  elements is $2,000–2,500.
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full py-6 flex justify-between items-start lg:items-center border-b">
                <p className="text-left pr-12 lg:pr-0 flex items-center lg:max-w-max text-[16px] lg:text-[24px] leading-[20.8px] lg:leading-[28.8px]">
                  Do you make prints?
                </p>
                {open ? <MinusIcon /> : <PlusIcon />}
              </Disclosure.Button>
              <Disclosure.Panel>
                <p className="py-6 text-[18px] leading-[32px] text-app-main-text">
                  The cost of the brand book development depends on the number
                  of elements you want to get, as well as on the number of
                  iterations and improvements required to complete the work. The
                  average price for creating 2 or 3 variants of the visual
                  elements is $2,000–2,500.
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default ServicesSingleFAQ;
