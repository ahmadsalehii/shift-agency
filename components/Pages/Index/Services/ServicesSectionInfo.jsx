import Image from "next/image";

import ScrollWithArrow from "@/components/Buttons/ScrollWithArrow";
import LogoMaskImage from "@/public/images/logo-mask.png";

const ServicesSectionInfo = () => {
  return (
    <div className="flex flex-col">
      <Image src={LogoMaskImage} alt="Shift Agency" />
      <p className="mt-4 text-[16px] lg:text-[18px] leading-[25.6px] lg:leading-[32px] text-app-text-details">
        We’re a holistic partner that helps you with everything you’ll need.
        From brand strategy, naming, and logo design, through to guidelines,
        campaigns, and content, we build brands that connect belief to the
        bottom line.
      </p>
      <div className="px-8 flex justify-between mt-10">
        <p>
          <span className="text-[32px] leading-[70px] font-bold text-app-main-text">
            5
          </span>
          <br />
          <span className="font-medium text-[12px] leading-[26.4px] text-[#737373]">
            Teams
          </span>
        </p>
        <div className="h-full w-[1px] bg-black opacity-10"></div>
        <p>
          <span className="text-[32px] leading-[70px] font-bold text-app-main-text">
            120+
          </span>
          <br />
          <span className="font-medium text-[12px] leading-[26.4px] text-[#737373]">
            Employees
          </span>
        </p>
        <div className="h-full w-[1px] bg-black opacity-10"></div>
        <p>
          <span className="text-[32px] leading-[70px] font-bold text-app-main-text">
            70+
          </span>
          <br />
          <span className="font-medium text-[12px] leading-[26.4px] text-[#737373]">
            Services
          </span>
        </p>
      </div>
      <div className="hidden lg:flex justify-end mt-auto">
        <ScrollWithArrow />
      </div>
    </div>
  );
};

export default ServicesSectionInfo;
