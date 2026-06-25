"use client";

import ServicesSingleCounter from "@/components/Pages/Services/Single/ServicesSingleCounter";
import ServicesSingleLanding from "@/components/Pages/Services/Single/ServicesSingleLanding";
import ServicesSingleItems from "@/components/Pages/Services/Single/ServicesSingleItems";
import ContactDetails from "@/components/Pages/Index/Contact/ContactDetails";
import ServicesSingleFAQ from "@/components/Pages/Services/Single/ServicesSingleFAQ";

const page = () => {
  return (
    <div className="flex flex-col">
      <ServicesSingleLanding />
      <ServicesSingleCounter />
      <ServicesSingleItems />
      <ServicesSingleFAQ />
      <div className="mt-14">
        <ContactDetails />
      </div>
    </div>
  );
};

export default page;
