import ContactDetails from "@/components/Pages/Index/Contact/ContactDetails";
import ServicesCounter from "@/components/Pages/Index/Services/ServicesCounter";
import ServicesCategories from "@/components/Pages/Services/ServicesCategories";
import ServicesItem from "@/components/Pages/Services/ServicesItem";
import ServicesLanding from "@/components/Pages/Services/ServicesLanding";

import "swiper/css";
import "swiper/css/navigation";

const page = () => {
  return (
    <div className="flex flex-col">
      <ServicesLanding />
      <ServicesCategories />
      <ServicesCounter />
      <ServicesItem />
      <ServicesItem />
      <ServicesItem />
      <ServicesItem />
      <div className="mt-14">
        <ContactDetails />
      </div>
    </div>
  );
};

export default page;
