import ContactDetails from "./ContactDetails";
import ContactSectionTitle from "./ContactSectionTitle";

const ContactSection = () => {
  return (
    <div className="relative flex flex-col mt-8">
      <div className="hidden lg:flex">
        <ContactSectionTitle />
      </div>
      <div className="mt-52">
        <ContactDetails />
      </div>
    </div>
  );
};

export default ContactSection;
