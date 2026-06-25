import SectionTitle from "../SectionTitle";
import ServicesSectionAccordion from "./ServicesSectionAccordion";
import ServicesSectionInfo from "./ServicesSectionInfo";

const ServicesSection = () => {
  return (
    <div className="flex flex-col">
      <div className="relative flex flex-col">
        <div className="h-[200px] lg:h-[500px] bg-black absolute top-0 -z-20 left-0 w-full"></div>
        <div
          className="w-[120%] -ml-[10%] h-[200px] lg:h-[500px] bg-white"
          style={{
            borderRadius: "50% 50% 0 0",
            clipPath: "ellipse(50% 100% at 50% 100%)",
          }}
        >
          <div className="flex flex-col mt-[50px] lg:mt-[200px]">
            <SectionTitle text="What we do?" bgText="Our Services" />
          </div>
        </div>
      </div>
      <div className="app-container grid grid-cols-1 lg:grid-cols-2">
        <ServicesSectionInfo />
        <ServicesSectionAccordion />
      </div>
    </div>
  );
};

export default ServicesSection;
