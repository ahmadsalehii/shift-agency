import AboutLanding from "@/components/Pages/About/AboutLanding";
import AboutText from "@/components/Pages/About/AboutText";
import AboutCounter from "@/components/Pages/About/AboutCounter";
import AboutEmployees from "@/components/Pages/About/AboutEmployees";
import ContactDetails from "@/components/Pages/Index/Contact/ContactDetails";

const page = () => {
  return (
    <div className="flex flex-col">
      <AboutLanding />
      <AboutText />
      <AboutCounter />
      <AboutEmployees />
      <div className="mt-14">
        <ContactDetails />
      </div>
    </div>
  );
};

export default page;
