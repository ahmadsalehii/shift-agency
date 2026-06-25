import Image from "next/image";

const BlogShortsItem = ({ image, title, readingTime, category }) => {
  return (
    <div className="flex gap-5">
      <Image
        src={image}
        alt={title}
        className="w-[150px] h-[100px] object-cover"
      />
      <div className="flex flex-col items-start gap-1">
        <p className="text-[12px] leading-[16px] text-app-text-details opacity-50">
          {readingTime} Read
        </p>
        <p className="text-[16px] lg:text-[18px] text-app-main-text leading-[22.4ox] lg:leading-[25px] font-medium mt-1">
          {title}
        </p>
        <p className="capitalize text-[12px] leading-[20px] text-app-text-details opacity-50 mt-1">
          {category}
        </p>
      </div>
    </div>
  );
};

export default BlogShortsItem;
