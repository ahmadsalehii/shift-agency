import Image from "next/image";
import AboutTeamMemberFrame from "./AboutTeamMemberFrame";

const AboutTeamMember = ({ member }) => {
  return (
    <div className="mt-[26px] lg:mt-[100px] group grid grid-cols-3">
      <div className="lg:group-odd:order-1 lg:group-even:order-2 col-span-3 lg:col-span-1 relative p-1">
        <Image
          src={member.image}
          className="w-full rounded-[307px]"
          alt={member.name}
        />
        <AboutTeamMemberFrame />
      </div>
      <div className="lg:group-odd:order-2 lg:group-even:order-1 col-span-3 lg:col-span-2 flex flex-col lg:group-odd:pl-32 lg:group-even:pr-32">
        <p className="capitalize text-white text-[18px] lg:text-[20px] leading-[23px] lg:leading-[26px] mt-6 lg:mt-0">
          {member.headline}
        </p>
        <p className="mt-1 lg:mt-2 text-white text-[48px] lg:text-[80px] leading-[62px] lg:leading-[108px] capitalize">
          {member.name}
        </p>
        <p className="text-white text-[14px] leading-[19.6px] lg:text-[16px] lg:leading-[29px] mt-1 lg:mt-4">
          {member.bio}
        </p>
        <p className="mt-2 lg:mt-auto text-white opacity-50 text-[16px] leading-[23.8px]">
          {member.socials.map((social, i) => (
            <>
              <a key={i} href={social.link} target="_blank">
                {social.name}
              </a>
              {i != member.socials.length - 1 && <span> / </span>}
            </>
          ))}
        </p>
      </div>
    </div>
  );
};

export default AboutTeamMember;
