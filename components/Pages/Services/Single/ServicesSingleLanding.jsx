import Image from "next/image";

import ScrollWithArrow from "@/components/Buttons/ScrollWithArrow";

import BannerImage from "@/public/images/services/single/banner.png";

const ServicesSingleLanding = () => {
  return (
    <div className="app-container flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <p className="capitalize text-app-text-details opacity-30 text-[18px] lg:text-[20px] leading-[32px] lg:leading-[35px]">
            digital design
          </p>
          <h2 className="lg:max-w-[800px] capitalize mt-4 text-app-main-text text-[28px] lg:text-[55px] leading-[36.4px] lg:leading-[71px]">
            Motion Design
          </h2>
          <p className="mt-4 lg:mt-2 text-[16px] leading-[25.6px] text-app-text-details opacity-50">
            Turning bright business ideas into compelling digital products.
          </p>
        </div>
        <ScrollWithArrow className="hidden lg:flex" color="#808080" />
      </div>
      <div>
        <button className="mt-6 lg:mt-8 capitalize rounded-full py-4 px-12 text-app-main-text text-[18px] leading-[21.6px] border-[1px] border-black border-opacity-[0.12]">
          get in touch
        </button>
      </div>
      <Image
        className="mt-6 h-[118px] lg:h-auto lg:mt-14"
        src={BannerImage}
        alt=""
      />
      <div className="mt-12 lg:mt-14 grid grid-cols-1 lg:grid-cols-2">
        <p className="font-medium text-[18px] lg:text-[32px] leading-[23.4px] lg:leading-[45px]">
          To create a Motion Design that matches the client’s needs, we take the
          following steps:
        </p>
        <div className="flex flex-col mt-6 lg:mt-0 lg:pl-[120px]">
          <ul className="flex flex-col font-medium gap-8">
            <li className="flex flex-col">
              <p className="text-app-main text-[18px] lg:text-[32px] font-medium lg:font-normal leading-[23.4px] lg:leading-[45px]">
                1
              </p>
              <p className="text-[16px] lg:text-[24px] leading-[20.8px] lg:leading-[43px] text-app-main-text mt-4">
                Help a client define the requirements.
              </p>
            </li>
            <li className="flex flex-col">
              <p className="text-app-main text-[18px] lg:text-[32px] font-medium lg:font-normal leading-[23.4px] lg:leading-[45px]">
                2
              </p>
              <p className="text-[16px] lg:text-[24px] leading-[20.8px] lg:leading-[43px] text-app-main-text mt-4">
                Gather references to find the suitable style.
              </p>
            </li>
            <li className="flex flex-col">
              <p className="text-app-main text-[18px] lg:text-[32px] font-medium lg:font-normal leading-[23.4px] lg:leading-[45px]">
                3
              </p>
              <p className="text-[16px] lg:text-[24px] leading-[20.8px] lg:leading-[43px] text-app-main-text mt-4">
                Create a mind map and lo-fi wireframes.
              </p>
            </li>
            <li className="flex flex-col">
              <p className="text-app-main text-[18px] lg:text-[32px] font-medium lg:font-normal leading-[23.4px] lg:leading-[45px]">
                4
              </p>
              <p className="text-[16px] lg:text-[24px] leading-[20.8px] lg:leading-[43px] text-app-main-text mt-4">
                Create 2–3 frame of the future Motion.
              </p>
            </li>
            <li className="flex flex-col">
              <p className="text-app-main text-[18px] lg:text-[32px] font-medium lg:font-normal leading-[23.4px] lg:leading-[45px]">
                5
              </p>
              <p className="text-[16px] lg:text-[24px] leading-[20.8px] lg:leading-[43px] text-app-main-text mt-4">
                Discuss the screens with the client and make improvements.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesSingleLanding;
