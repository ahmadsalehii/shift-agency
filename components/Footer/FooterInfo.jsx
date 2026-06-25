import LogoLight from "../Logo/LogoLight";

const FooterInfo = () => {
  return (
    <div className="hidden lg:flex flex-col">
      <LogoLight />
      <p className="mt-4 text-white text-[16px] leading-[29px]">
        Join our newsletter to stay up to date on features and releases.
      </p>
      <div className="mt-6 flex">
        <input
          type="text"
          className="rounded-full py-3 pl-5 outline-none grow placeholder-[#505050]"
          placeholder="Enter your email"
        />
        <button className="text-[16px] ml-4 leading-[24px] text-white border hover:bg-white hover:text-black transition-all border-white rounded-full px-6">
          Subscribe
        </button>
      </div>
      <p className="mt-4 text-white text-[12px] leading-[29px] max-w-[500px]">
        By subscribing you agree to with our Privacy Policy and provide consent
        to receive updates from our company.
      </p>
    </div>
  );
};

export default FooterInfo;
