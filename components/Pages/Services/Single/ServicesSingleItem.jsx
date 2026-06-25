import Image from "next/image";

const ServicesSingleItem = ({ image, title, subtitle, suptitle }) => {
  return (
    <div className="lg:mt-4 gap-4 lg:gap-0 flex flex-col-reverse lg:flex-row justify-between items-center">
      <div className="w-full flex flex-col justify-center items-start">
        <p className="capitalize text-[18px] lg:text-[20px] leading-[35px] text-app-text-details opacity-30">
          {suptitle}
        </p>
        <p className="mt-3 lg:mt-4 text-[24px] lg:text-[55px] leading-[31px] lg:leading-[71px] text-app-main-text">
          {title}
        </p>
        <p className="mt-3 lg:mt-4 text-[16px] lg:text-[18px] leading-[28.8px] lg:leading-[32px] text-app-main-text">
          {subtitle}
        </p>
        <button className="mt-8 capitalize rounded-full py-4 px-12 text-app-main-text text-[18px] leading-[21.6px] border-[1px] border-black border-opacity-[0.12]">
          View Project
        </button>
      </div>
      <Image
        src={image}
        className="w-[457px] h-[410px] object-cover rounded-[6.6px] border-[1px] border-[#3C3C3C] border-opacity-[0.1]"
        alt=""
        style={{
          boxShadow: "0px 0px 29.7081px 1.65045px rgba(51, 102, 232, 0.05)",
        }}
      />
    </div>
  );
};

export default ServicesSingleItem;
