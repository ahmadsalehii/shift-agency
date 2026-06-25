import Image from "next/image";

import ScrollWithArrow from "../../Buttons/ScrollWithArrow";

import AboutLandingImage from "@/public/images/about/1.png";

const AboutLanding = () => {
  return (
    <>
      <div className="app-container flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-4 lg:gap-0">
            <p className="text-[18px] lg:text-[20px] leading-[32px] lg:leading-[35px] text-app-text-details opacity-30">
              Digital Design
            </p>
            <h1 className="mt-4 text-[28px] lg:text-[55px] leading-[36px] lg:leading-[71px] capitalize text-app-main-text">
              who we are?
            </h1>
            <p className="capitalize mt-2 text-app-text-details opacity-50 text-[16px] leading-[26px]">
              Know more about shift agency!
            </p>
          </div>
          <ScrollWithArrow className="hidden lg:flex" color="#808080" />
        </div>
      </div>
      <div className="mt-10 relative">
        <Image
          src={AboutLandingImage}
          className="w-full h-[166px] lg:h-[454px] object-cover"
          alt=""
        />
        <div className="flex items-center absolute top-6 lg:top-14 left-8 lg:left-[60px] gap-1 lg:gap-3">
          <svg
            width="3"
            height="5"
            viewBox="0 0 3 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1.5"
              y1="3.5"
              x2="1.5"
              y2="1.5"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <p className="capitalize text-white font-medium text-[12px] lg:text-[20px] leading-[12px] lg:leading-[35px]">
            our office
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutLanding;
