import Image from "next/image";

import ScrollWithArrow from "@/components/Buttons/ScrollWithArrow";
import UnionIcon from "./icons/UnionIcon";

import ServicesBanner from "@/public/images/services/banner.png";

const ServicesLanding = () => {
  return (
    <>
      <div className="app-container flex items-center justify-between">
        <div className="flex flex-col">
          <p className="capitalize text-app-text-details opacity-30 text-[18px] lg:text-[20px] leading-[32px] lg:leading-[35px]">
            our Services
          </p>
          <h2 className="max-w-[800px] capitalize mt-4 text-app-main-text text-[28px] lg:text-[55px] leading-[36.4px] lg:leading-[71px]">
            These are Services that we offer you!
          </h2>
        </div>
        <ScrollWithArrow className="hidden lg:flex" color="#808080" />
      </div>
      <div className="app-container mt-8 lg:mt-10">
        <Image src={ServicesBanner} alt="" className="w-full" />
      </div>
      <div className="-mt-8 lg:-mt-20 bg-black py-6 lg:py-12 h-[64px] lg:h-[130px]">
        <ul className="text-white font-bold text-[14px] lg:text-[28px] leading-[16.8px] lg:leading-[33px] uppercase gap-2 lg:gap-9 flex flex-nowrap whitespace-nowrap items-center">
          <li>Branding</li>
          <UnionIcon />
          <li>Seo</li>
          <UnionIcon />
          <li>Digital Marketing</li>
          <UnionIcon />
          <li>Digital Design</li>
          <UnionIcon />
          <li>development</li>
          <UnionIcon />
          <li>Nft Design</li>
          <UnionIcon />
        </ul>
      </div>
      <div className="border-b-[9px] border-app-main"></div>
    </>
  );
};

export default ServicesLanding;
