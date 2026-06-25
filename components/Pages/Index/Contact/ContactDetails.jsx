import ContactSectionTitle from "./ContactSectionTitle";
import ArrowRight from "./icons/ArrowRight";
import ArrowTopRight from "./icons/ArrowTopRight";
import WorldIcon from "./icons/WorldIcon";

const ContactDetails = () => {
  return (
    <div className="relative">
      <div className="lg:hidden">
        <ContactSectionTitle />
      </div>
      <div className="app-container flex flex-col mt-12 lg:mt-0">
        <div className="flex flex-col lg:flex-row justify-between mt-8">
          <div className="order-2 lg:order-1 flex flex-col items-start mt-6 lg:mt-0">
            <p className="flex items-center gap-2 text-[18px] lg:text-[20px] leading-[35px] text-app-text-details">
              <span className="opacity-30">Keep in touch !</span>
              <ArrowRight />
            </p>
            <p className="mt-4 lg:mt-8 text-app-main-text text-[31px] lg:text-[55px] leading-[40px] lg:leading-[71px]">
              Call@shift.agency
            </p>
            <p className="flex items-center mt-4 lg:mt-8 gap-4">
              <span className="text-app-main text-[16px] lg:text-[24px] leading-[25.6px] lg:leading-[28.8px]">
                Contact Page
              </span>
              <ArrowTopRight />
            </p>
          </div>
          <WorldIcon />
        </div>
        <div className="my-4 lg:my-8 border-b border-black border-opacity-20"></div>
        <p className="text-[14px] lg:text-[18px] leading-[19.6px] lg:leading-[32.4px] text-app-text-details opacity-50 capitalize">
          feel free to contact us, and talk about your project to collaborate
          with us.
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;
