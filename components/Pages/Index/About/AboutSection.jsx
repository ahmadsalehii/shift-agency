import SectionTitle from "../SectionTitle";
import AboutHero from "./AboutHero";
import AboutTeam from "./AboutTeam";

const AboutSection = () => {
  return (
    <div className="mt-14">
      <SectionTitle text="Who We Are?" bgText="About Us" />
      <AboutHero />
      <AboutTeam />
    </div>
  );
};

export default AboutSection;
