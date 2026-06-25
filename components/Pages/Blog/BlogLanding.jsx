import ScrollWithArrow from "../../Buttons/ScrollWithArrow";
import BlogHeader from "./BlogHeader";
import ArrowIcon from "./icons/ArrowIcon";
import MagicIcon from "./icons/MagicIcon";
import WaveBgPattern from "./icons/WaveBgPattern";

const BlogLanding = () => {
  return (
    <div className="flex flex-col p-4 lg:p-6">
      <div className="h-[650px] relative bg-app-main rounded-[8px] p-4 lg:p-7 flex flex-col">
        <div className="realtive z-10">
          <BlogHeader />
        </div>
        <WaveBgPattern className="absolute right-0 -bottom-[650px] lg:right-0 z-0" />
        <ScrollWithArrow
          className="hidden lg:flex absolute left-10 bottom-10"
          color="#99B3F4"
        />
        <div className="w-full lg:w-2/3 mx-auto mt-16 lg:mt-[130px]">
          <p className="flex gap-2 items-center">
            <MagicIcon />
            <span className="uppercase text-white text-[16px] leading-[29px]">
              7 Min Read
            </span>
          </p>
          <h2
            className="mt-2 text-[24px] lg:text-[52px] leading-[31px] lg:leading-[62px] font-bold italic text-white"
            style={{ letterSpacing: "-0.03em" }}
          >
            Why you should optimize images for the web
          </h2>
          <p className="mt-2 text-white opacity-80 text-[16px] lg:text-[18px] leading-[25.6px] lg:leading-[32px]">
            Images are an integral part of almost every website and contribute
            to visitors having a better user experience. Large photos are in
            vogue today, but higher resolutions mean larger file sizes, which
            leads to slower web page loading
          </p>
          <button className="mt-8 hover:bg-white py-3 px-8 bg-app-main gap-3 border-white stroke-white hover:stroke-app-main flex items-center justify-center border-[1.5px] transition-all rounded-full">
            <ArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogLanding;
