import Image from "next/image";

import AboutBanner1 from "@/public/images/about/2.png";
import AboutBanner2 from "@/public/images/about/3.png";

const AboutCounter = () => {
  return (
    <>
      <div className="app-container mt-6 lg:mt-14 p-6">
        <div className="flex flex-col lg:flex-row gap-[52px] lg:gap-0 items-center justify-around">
          <div className="flex flex-col items-center">
            <p className="font-medium text-[65px] leading-[115px]">4</p>
            <p className="-mt-1 text-[18px] leading-[32px]">Teams</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium text-[65px] leading-[115px]">+120</p>
            <p className="-mt-1 text-[18px] leading-[32px]">Employees</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium text-[65px] leading-[115px]">+7</p>
            <p className="-mt-1 text-[18px] leading-[32px]">
              Years of experience
            </p>
          </div>
        </div>
      </div>
      <div className="app-container mt-6 lg:mt-14 flex flex-col-reverse lg:flex-row items-start gap-4 lg:gap-[30px]">
        <Image src={AboutBanner2} className="lg:mt-[308px]" alt="" />
        <Image src={AboutBanner1} alt="" />
      </div>
    </>
  );
};

export default AboutCounter;
