import ArrowButton from "@/components/Buttons/ArrowButton";
import SlideImage from "@/public/images/services/1.png";
import Image from "next/image";
import Link from "next/link";

const ServicesItemSlideItem = () => {
  return (
    <div className="flex flex-col">
      <Image
        src={SlideImage}
        className="rounded-[8px] border-[1px] border-[#3C3C3C] border-opacity-10"
        style={{
          boxShadow: "0px 0px 29.7081px 1.65045px rgba(51, 102, 232, 0.05)",
        }}
        alt=""
      />
      <div className="flex justify-between items-center mt-[18px]">
        <h5 className="lg:w-[60%] font-medium text-[20px] lg:text-[18px] truncate leading-[24px] text-app-main-text">
          Markored - Online Super Market
        </h5>
        <Link className="hidden lg:flex" href="/services/digital-marketing">
          <ArrowButton />
        </Link>
      </div>
      <p className="mt-3 text-[14.85px] lg:text-[13px] leading-[27px] text-app-text-details">
        TaskBox An interactive platform built for the Microsoft. We worked on
        fantastic Ui and original motion graphics.
      </p>

      <Link className="flex lg:hidden mt-3" href="/services/digital-marketing">
          <ArrowButton />
        </Link>
    </div>
  );
};

export default ServicesItemSlideItem;
