import Image from "next/image";
import AboutCharacterImage from "@/public/images/about-character.png";

const AboutHero = () => {
  return (
    <div className="flex flex-col items-center mt-20 text-[33.65px] lg:text-[96px] font-bold leading-[37.86px] lg:leading-[108px] text-center">
      <div className="flex items-baseline gap-3 lg:gap-4">
        <p>We</p>
        <div className="relative">
          <Image src={AboutCharacterImage} alt="" className="w-[70px]" />
          <div className="w-[182px] h-[27px] lg:w-[260px] lg:h-[53px] rounded-[24px] rounded-bl-none absolute -top-10 lg:-top-16 left-1/2 bg-app-main font-medium text-white text-[12px] lg:text-[16px] leading-[15.62px] lg:leading-[21px] flex items-center justify-center">
            Ramin - 3D & Motion Designer
          </div>
        </div>
        <p>are creative</p>
      </div>
      <p>people with big</p>
      <p>dreams</p>
      <p className="mt-6 font-normal text-[14px] lg:text-[24px] leading-[19.6px] lg:leading-[28.8px]">
        Meet Our Team!
      </p>
      <svg
        viewBox="0 0 178 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[103px] h-[8px] lg:w-[178px] lg:h-[10px] mt-[6px]"
      >
        <path
          d="M1 9C49.7143 2.96301 153.114 -5.48877 177 9"
          stroke="#3366E8"
        />
      </svg>
    </div>
  );
};

export default AboutHero;
