"use client";

import { Disclosure } from "@headlessui/react";
import ServicesCategoryAccordion from "./ServicesCategoryAccordion";

// import BrandingIcon from "../Index/Services/icons/BrandingIcon";
import BrandingIcon from "@/components/Pages/Index/Services/icons/BrandingIcon";
import DevelopmentIcon from "@/components/Pages/Index/Services/icons/DevelopmentIcon";
import DigitalDesignIcon from "@/components/Pages/Index/Services/icons/DigitalDesignIcon";
import MarketingIcon from "@/components/Pages/Index/Services/icons/MarketingIcon";

const ServicesCategories = () => {
  return (
    <div className="app-container">
      <h4 className="mt-4 lg:mt-14 text-app-main-text capitalize font-bold text-[20px] lg:text-[47px] leading-[26px] lg:leading-[61px]">
        services we provide:
      </h4>
      <p className="mt-3 lg:mt-6 text-[16px] lg:text-[18px] leading-[25.6px] lg:leading-[32px] text-app-text-details max-w-[555px]">
        We’re a holistic partner that helps you with everything you’ll need.
        From brand strategy, naming, and logo design, through to guidelines,
        campaigns, and content, we build brands that connect belief to the
        bottom line.
      </p>
      <ServicesCategoryAccordion title="Branding" icon={<BrandingIcon />}>
        <div className="text-[16px] lg:text-[18px] leading-[29px] lg:leading-[32px] text-app-main-text w-full grid grid-cols-2 gap-5">
          <p>Brand audit</p>
          <p>Brand Strategy</p>
          <p>Visual identity</p>
          <p>Iconography</p>
          <p>Packaging design</p>
          <p>Logo Design</p>
        </div>
      </ServicesCategoryAccordion>
      <ServicesCategoryAccordion
        title="Digital Design"
        icon={<DigitalDesignIcon />}
      ></ServicesCategoryAccordion>
      <ServicesCategoryAccordion
        title="Development"
        icon={<DevelopmentIcon />}
      ></ServicesCategoryAccordion>
      <ServicesCategoryAccordion
        title="Marketing"
        icon={<MarketingIcon />}
      ></ServicesCategoryAccordion>
    </div>
  );
};

export default ServicesCategories;
