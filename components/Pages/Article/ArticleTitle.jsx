import Image from "next/image";
import ScrollWithArrow from "@/components/Buttons/ScrollWithArrow";
import ProfileImage from "@/public/images/profile.png";

const ArticleTitle = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <Image
            src={ProfileImage}
            alt=""
            className="w-[28px] h-[28px] object-cover"
          />
          <p className="text-[14px] lg:text-[16px] leading-[20px] lg:leading-[29px] text-app-text-details">
            Amirhosein Panahi
          </p>
        </div>
        <h1 className="font-medium text-[18px] lg:text-[32px] leading-[23px] lg:leading-[38px] text-app-main-text mt-4">
          Why you should optimize images for the web
        </h1>
        <div className="flex justify-between lg:justify-start gap-6 text-[14px] lg:text-[16px] leading-[20px] lg:leading-[29px] text-app-text-details opacity-70 mt-4">
          <p>29.Jun.2021</p>
          <p>3 Min read</p>
          <p>Project Management</p>
        </div>
      </div>
      <ScrollWithArrow color="#808080" className="hidden lg:flex" />
    </div>
  );
};

export default ArticleTitle;
