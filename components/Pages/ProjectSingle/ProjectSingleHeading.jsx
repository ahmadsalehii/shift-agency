import Image from "next/image";
import SectionTitle from "../Index/SectionTitle";
import HeadingImage from "@/public/images/screenshots/1.png";
import ScrollWithArrow from "@/components/Buttons/ScrollWithArrow";

const ProjectSingleHeading = () => {
  return (
    <div className="relative mt-16 lg:mt-32">
      <div className="relative flex justify-center items-end app-container">
        <div className="absolute -z-10 -top-8 lg:-top-28">
          <SectionTitle bgText="Taskbox" />
        </div>
        <Image src={HeadingImage} alt="" className="relative z-0" />
        <div className="absolute -right-14">
          <ScrollWithArrow color="#808080" />
        </div>
      </div>
    </div>
  );
};

export default ProjectSingleHeading;
