import Image from "next/image";

import ContactExpert from "@/components/Pages/Contact/ContactExpert";

import ContactImage from "@/public/images/contact.png";
import ContactForm from "@/components/Pages/Contact/ContactForm";
import ContactBudget from "@/components/Pages/Contact/ContactBudget";

const page = () => {
  return (
    <div className="app-container flex flex-col">
      <p className="capitalize text-[18px] lg:text-[20px] leading-[32px] lg:leading-[35px] text-app-text-details opacity-30">
        Contact us
      </p>
      <h1 className="mt-4 lg:mt-0 text-[28px] lg:text-[55px] leading-[36px] lg:leading-[71px] text-app-main-text capitalize">
        keep in touch! 👋
      </h1>
      <div className="lg:h-[256px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 mt-8 lg:mt-[72px]">
        <ul className="order-2 lg:order-1 mt-[30px] lg:mt-0 col-span-3 flex flex-col justify-between lg:gap-8">
          <li className="flex flex-col gap-2 lg:gap-4">
            <p className="text-[16px] leading-[21px] text-app-text-details opacity-30">
              Have project?
            </p>
            <p className="text-[20px] font-bold leading-[26px] text-app-main-text">
              Call@shift.agency
            </p>
          </li>
          <li className="flex flex-col gap-2 lg:gap-4">
            <p className="text-[16px] leading-[21px] text-app-text-details opacity-30">
              Join our team
            </p>
            <p className="text-[20px] font-bold leading-[26px] text-app-main-text">
              Careers@shift.agency
            </p>
          </li>
          <li className="flex flex-col gap-2 lg:gap-4">
            <p className="text-[16px] leading-[21px] text-app-text-details opacity-30">
              Call us
            </p>
            <p className="text-[20px] font-bold leading-[26px] text-app-main-text">
              +1 (973) 867 7042
            </p>
          </li>
        </ul>
        <div className="order-1 lg:order-2 col-span-9 flex">
          <Image
            src={ContactImage}
            alt=""
            className="w-full h-full lg:h-auto object-cover rounded-2xl"
          />
        </div>
      </div>
      <div className="mt-16 flex flex-col">
        <h3 className="text-[18px] lg:text-[32px] leading-[23px] lg:leading-[38px] font-medium text-app-main-text">
          tell us more about your product!
        </h3>
        <p className="mt-3 lg:mt-4 text-[14px] lg:text-[16px] leading-[20px] lg:leading-[25px] text-app-text-details opacity-50 max-w-[650px]">
          We love to hear from you. Our friendly team is always here to Respond
          you Just fill this simple form in and we will contact you promptly to
          discuss your project.
        </p>
        <ContactExpert />
        <ContactForm />
        <ContactBudget />
        <div>
          <button
            className={`mt-12 bg-app-main gap-2 py-2 px-10 stroke-app-main text-white flex items-center justify-center border-[1.5px] transition-all border-app-main rounded-full`}
          >
            <span className="text-[20px] leading-[38px]">Submit</span>
            <svg
              width="18"
              height="7"
              viewBox="0 0 18 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 3.22223H17L14.8082 5.44445"
                stroke="white"
                strokeLinecap="square"
                strokeLinejoin="bevel"
              />
              <path
                d="M17.0004 3.22223L14.8086 1.00001"
                stroke="white"
                strokeLinecap="square"
                strokeLinejoin="bevel"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
