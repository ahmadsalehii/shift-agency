import ServicesSingleItem from "./ServicesSingleItem";

import ServiceItem1Image from "@/public/images/services/single/1.png";
import ServiceItem2Image from "@/public/images/services/single/2.png";
import ServiceItem3Image from "@/public/images/services/single/3.png";

const ServicesSingleItems = () => {
  return (
    <div className="app-container mt-8 lg:mt-16">
      <p className="font-medium text-[16px] lg:text-[24px] leading-[20.8px] lg:leading-[28.8px]">
        Some Motion Design Portfoilio:
      </p>
      <div className="flex flex-col gap-6 lg:gap-8">
        <ServicesSingleItem
          title="Gmail Motion Design"
          suptitle="Google"
          subtitle="Motion Design - 3d Design - Illustration"
          image={ServiceItem1Image}
        />
        <ServicesSingleItem
          title="Yahoo Motion Design"
          suptitle="Yahoo"
          subtitle="Motion Design - 3d Design - Illustration"
          image={ServiceItem2Image}
        />
        <ServicesSingleItem
          title="Loading Motion"
          suptitle="trust wallet"
          subtitle="Motion Design - Illustration"
          image={ServiceItem3Image}
        />
      </div>
    </div>
  );
};

export default ServicesSingleItems;
