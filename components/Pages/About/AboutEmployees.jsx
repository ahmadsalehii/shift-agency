import Image from "next/image";
import AboutTeamMemberFrame from "../Index/About/AboutTeamMemberFrame";
import TeamMemberImage from "@/public/images/team/2.png";
import AboutEmployeeFrame from "./icons/AboutEmployeeFrame";
import EmployeeArrow from "./icons/EmployeeArrow";

const AboutEmployees = () => {
  return (
    <>
      <div className="mt-8 lg:mt-14 app-container">
        <h5 className="uppercase text-app-text-details text-[18px] lg:text-[20px] leading-[32px] lg:leading-[35px] opacity-30">
          our employees
        </h5>
        <p className="mt-4 text-[16px] lg:text-[18px] leading-[25.6px] lg:leading-[32px] text-app-text-details">
          We specialise in brand strategy, identity design, brand communication,
          and digital design and development. <br />
          We consciously work across a diverse range of sectors – spanning arts
          and culture, corporate, property, hospitality and retail. We work for
          organisations, but design for people. <br />
          We would like to acknowledge the Wurundjeri people of the Kulin nation
          who are the traditional custodians of the land on which Studio Brave
          conducts business.
        </p>
      </div>
      <div className="app-container flex flex-col lg:flex-row items-start mt-14 relative">
        <div className="flex gap-4 lg:gap-0">
          <EmployeeArrow className="relative lg:absolute lg:-left-[72px]" />
          <p className="text-[20px] lg:text-[39px] font-medium leading-[25px] lg:leading-[51px]">
            Meet <br className="hidden lg:block" /> our <br /> Founder!
          </p>
        </div>
        <div className="w-full lg:w-[350px] lg:ml-[30px] relative p-1 mt-4 lg:mt-0">
          <Image
            src={TeamMemberImage}
            className="w-full rounded-[307px]"
            alt=""
          />
          <AboutEmployeeFrame />
        </div>
        <div className="flex flex-col items-start lg:ml-[30px] lg:max-w-[555px]">
          <p className="capitalize text-[18px] lg:text-[20px] leading-[23px] lg:leading-[26px] mt-6 lg:mt-[20px] text-app-main-text">
            lead manager , founder
          </p>
          <p className="text-[48px] lg:text-[80px] leading-[62px] lg:leading-[108px] mt-1 lg:mt-2">
            Navid
          </p>
          <p className="mt-1 lg:mt-4 text-app-main-text text-[14px] lg:text-[16px] leading-[20px] lg:leading-[29px]">
            Vicki Dang a.k.a Wii-ki is a self-taught 3D motion
            designer/director. Originally from Saigon, She has been working as a
            3D Animator and Art director ever since. Her clients are Maserati,
            Louis Vuitton, Nike China, IKEA, MOAG, Oppo, Musiversal, FreeFire...
            She aims to create unconventional visual dimensions for digital
            spaces while implementing diverse cultural identities for the new
            generations. Deconstructing the concept of westernizing and
            localizing, Vicki seeks to implement unbounded creativity and
            craftsmanship into the work.
          </p>
        </div>
      </div>
      <div className="mt-8 lg:mt-14 app-container">
        <h5 className="uppercase text-app-text-details text-[18px] lg:text-[20px] leading-[32px] lg:leading-[35px] opacity-30">
          Our approach
        </h5>
        <p className="mt-4 text-[16px] lg:text-[18px] leading-[25.6px] lg: leading-[32px] text-app-text-details">
          We go to the core of your business and examine every aspect that
          shapes your brand. <br /> We examine every aspect that shapes your
          brand to highlight which key elements define success. This includes
          your customers, marketplace, competitors, products, and the entire
          customer journey.
        </p>
      </div>
    </>
  );
};

export default AboutEmployees;
