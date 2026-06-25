import ScrollWithArrow from "@/components/Buttons/ScrollWithArrow";
import AboutTeamMember from "./AboutTeamMember";
import Team1Image from "@/public/images/team/1.png";
import Team2Image from "@/public/images/team/2.png";
import AboutAllLink from "./AboutAllLink";

const members = [
  {
    name: "Navid",
    image: Team2Image,
    headline: "lead manager , backend developer",
    bio: 'Vicki Dang a.k.a Wii-ki is a self-taught 3D motion designer/director. Originally from Saigon, She has been working as a 3D Animator and Art director ever since. Her clients are Maserati, Louis Vuitton, Nike China, IKEA, MOAG, Oppo, Musiversal, FreeFire... She aims to create unconventional visual dimensions for digital spac es while implementing diverse cultural identities for the new generations. Deconstructing the concept of "westernizing" and "localizing," Vicki seek    s to implement unbounded creativity and craftsmanship into the work.',
    socials: [
      { link: "https://linkedin.com/", name: "Linkedin" },
      { link: "https://instagram.com/", name: "Instagram" },
    ],
  },
  {
    name: "Navid",
    image: Team1Image,
    headline: "lead manager , backend developer",
    bio: 'Vicki Dang a.k.a Wii-ki is a self-taught 3D motion designer/director. Originally from Saigon, She has been working as a 3D Animator and Art director ever since. Her clients are Maserati, Louis Vuitton, Nike China, IKEA, MOAG, Oppo, Musiversal, FreeFire... She aims to create unconventional visual dimensions for digital spac es while implementing diverse cultural identities for the new generations. Deconstructing the concept of "westernizing" and "localizing," Vicki seek    s to implement unbounded creativity and craftsmanship into the work.',
    socials: [
      { link: "https://linkedin.com/", name: "Linkedin" },
      { link: "https://instagram.com/", name: "Instagram" },
      { link: "https://instagram.com/", name: "Dribble" },
    ],
  },
  {
    name: "Mohammad",
    image: Team1Image,
    headline: "lead Designer , Visual designer",
    bio: 'Vicki Dang a.k.a Wii-ki is a self-taught 3D motion designer/director. Originally from Saigon, She has been working as a 3D Animator and Art director ever since. Her clients are Maserati, Louis Vuitton, Nike China, IKEA, MOAG, Oppo, Musiversal, FreeFire... She aims to create unconventional visual dimensions for digital spac es while implementing diverse cultural identities for the new generations. Deconstructing the concept of "westernizing" and "localizing," Vicki seek    s to implement unbounded creativity and craftsmanship into the work.',
    socials: [
      { link: "https://linkedin.com/", name: "Linkedin" },
      { link: "https://instagram.com/", name: "Instagram" },
      { link: "https://instagram.com/", name: "Dribble" },
    ],
  },
];

const AboutTeam = () => {
  return (
    <div className="team-clip bg-black relative mt-6 lg:mt-28">
      <div className="relative z-10 flex flex-col items-center pt-8">
        <ScrollWithArrow className="hidden lg:flex" color="#FFFFFF" />
        <p className="text-black about-outline-text text-[29px] lg:text-[80px] leading-[40px] lg:leading-[108px] text-center">
          Know More <br />
          About Our{" "}
          <span className="text-white font-bold" style={{ textShadow: "none" }}>
            Leaders
          </span>
        </p>
        <div className="w-full lg:w-9/12 p-6 lg:p-0 grid grid-cols-12 text-white mt-7 lg:mt-14">
          <div className="col-span-12 lg:col-span-11 flex flex-col">
            {members.map((member, i) => (
              <AboutTeamMember key={i} member={member} />
            ))}
          </div>
          <div className="hidden lg:flex col-span-1 justify-end items-start">
            <ScrollWithArrow color="#FFFFFF" />
          </div>
        </div>
        <div className="my-8 lg:my-20">
          <AboutAllLink />
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
