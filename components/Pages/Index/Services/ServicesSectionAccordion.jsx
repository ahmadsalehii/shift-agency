import ServicesSectionAccordionItem from "./ServicesSectionAccordionItem";
import BrandingIcon from "./icons/BrandingIcon";
import DevelopmentIcon from "./icons/DevelopmentIcon";
import DigitalDesignIcon from "./icons/DigitalDesignIcon";
import MarketingIcon from "./icons/MarketingIcon";

const ServicesSectionAccordion = () => {
  return (
    <div className="flex flex-col lg:pl-32">
      <ServicesSectionAccordionItem title="Branding" icon={<BrandingIcon />}>
        <ul className="flex flex-col text-app-main-text text-[18px] leading-[32px]">
          <li className="grid grid-cols-3">
            <span className="col-span-2">Brand audit</span>
            <span>Brand Strategy</span>
          </li>
          <li className="grid grid-cols-3 mt-5">
            <span className="col-span-2">Visual identity</span>
            <span>Iconography</span>
          </li>
          <li className="grid grid-cols-3 mt-5">
            <span className="col-span-2">Packaging design</span>
            <span>Logo Design</span>
          </li>
        </ul>
      </ServicesSectionAccordionItem>
      <ServicesSectionAccordionItem
        title="Digital Design"
        icon={<DigitalDesignIcon />}
      ></ServicesSectionAccordionItem>
      <ServicesSectionAccordionItem
        title="Development"
        icon={<DevelopmentIcon />}
      ></ServicesSectionAccordionItem>
      <ServicesSectionAccordionItem
        title="Marketing"
        icon={<MarketingIcon />}
      ></ServicesSectionAccordionItem>
    </div>
  );
};

export default ServicesSectionAccordion;
