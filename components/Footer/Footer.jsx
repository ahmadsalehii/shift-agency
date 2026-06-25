import FooterCopyright from "./FooterCopyright";
import FooterSocials from "./FooterSocials";
import FooterLocation from "./FooterLocation";
import FooterLinks from "./FooterLinks";
import FooterInfo from "./FooterInfo";
import LogoLight from "../Logo/LogoLight";

const Footer = () => {
  return (
    <div className="bg-[#1A1A1A] lg:bg-black flex flex-col p-8 lg:py-14 lg:px-16 mt-7 lg:mt-[120px]">
      <div className="lg:hidden mb-4">
        <LogoLight />
      </div>
      <div className="flex justify-between">
        <FooterInfo />
        <FooterLinks />
        <FooterLocation />
        <FooterSocials />
      </div>
      <div className="mt-6 flex lg:hidden">
        <input
          type="text"
          className="rounded-full py-3 pl-5 outline-none w-3/4 placeholder-[#505050]"
          placeholder="Enter your email"
        />
        <button className="text-[16px] ml-4 leading-[24px] text-white border hover:bg-white hover:text-black transition-all border-white rounded-full px-6">
          Subscribe
        </button>
      </div>
      <div className="w-full border-b border-white border-opacity-50 mt-[62px]"></div>
      <FooterCopyright />
    </div>
  );
};

export default Footer;
