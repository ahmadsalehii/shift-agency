import Image from "next/image";

import LandingImage from "@/public/images/landing.png";
import ProductO from "@/public/images/product-o.png";
import FlashIcon from "./FlashIcon";
import LandingArrow from "./LandingArrow";
import ScrollArrowIcon from "./ScrollArrowIcon";
import ScrollWithArrow from "@/components/Buttons/ScrollWithArrow";
import OvaleShape from "@/public/images/Ovale.png";

const Landing = () => {
  return (
    <div className="flex flex-col pb-6">
      <div className="app-container pb-6 grid grid-cols-12 gap-6">
        <div className="relative col-span-12 lg:col-span-7 flex flex-col items-start justify-center">
          <Image src={OvaleShape} className="hidden lg:flex absolute left-0 top-3" />
          <div className="mt-4 lg:mt-16 flex items-center gap-2">
            <FlashIcon />
            <p className="text-[16px] leading-[25.6px] lg:text-[18px] lg:leading-[23.44px]">
              We grow your business
            </p>
            <LandingArrow />
          </div>
          <p className="text-[33px] leading-[42px] lg:text-[60px] lg:leading-[70px] xl:text-[72px] xl:leading-[92px] mt-2">
            Let’s Create <strong>Clean,</strong> <br /> User{" "}
            <strong>Friendly</strong>
          </p>
          <div className="flex items-end gap-1 text-[33px] leading-[26px] lg:text-[72px] lg:leading-[58px] font-medium mt-1 lg:mt-4">
            <p>Pr</p>
            <Image src={ProductO} alt="" className="w-[32px] lg:w-[70px]" />
            <p>ducts</p>
          </div>
          <div className="mt-auto pb-4 flex items-end lg:border-b border-opacity-10 border-black">
            <ScrollWithArrow className="hidden lg:flex" color="#808080" />
            <p className="lg:ml-8 mt-[10px] lg:mt-0 text-[14px] leading-[20px] lg:text-[17px] xl:text-[20px] lg:leading-[36px] text-app-text-details">
              Shift is a creative agency that uses design to help social <br />
              impact organizations address the world’s.
            </p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <Image src={LandingImage} alt="" className="w-full" />
          <div className="pt-8 col-span-5 grid grid-cols-3 divide-x divide-opacity-10 divide-black">
            <div className="flex flex-col items-start">
              <p className="font-bold text-[24px] lg:text-[32px] leading-[53px] lg:leading-[40px] text-app-main-text">
                12K+
              </p>
              <p className="font-medium text-[#737373] text-[9.15px] lg:text-[12px] leading-[20px] lg:leading-[26.4px]">
                Project Complete
              </p>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col items-start">
                <p className="font-bold text-[24px] lg:text-[32px] leading-[53px] lg:leading-[40px] text-app-main-text">
                  7K+
                </p>
                <p className="font-medium text-[#737373] text-[9.15px] lg:text-[12px] leading-[20px] lg:leading-[26.4px]">
                  Happy Client
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="flex flex-col items-start">
                <p className="font-bold text-[24px] lg:text-[32px] leading-[53px] lg:leading-[40px] text-app-main-text">
                  10+
                </p>
                <p className="font-medium text-[#737373] text-[9.15px] lg:text-[12px] leading-[20px] lg:leading-[26.4px]">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
