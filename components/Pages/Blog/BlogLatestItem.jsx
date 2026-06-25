import Image from "next/image";
import Link from "next/link";

const BlogLatestItem = ({ title, image, readingTime, category, i }) => {
  return (
    <Link href="/blog/test-article" className="mt-8 flex flex-col">
      <Image
        src={image}
        alt={title}
        className={`w-full object-cover rounded-[8px] border-[1px] border-black border-opacity-20 ${
          i == 2 || i == 3 ? "h-[322px]" : "h-[378px]"
        } `}
      />
      <p className="mt-4 uppercase text-app-text-details text-[12px] leading-[16px]">
        {readingTime} read
      </p>
      <h5 className="mt-1 font-medium text-app-main-text text-[16px] lg:text-[24px] leading-[21px] lg:leading-[31px]">
        {title}
      </h5>
      <div className="my-2 w-[68px] border-b border-black border-opacity-10"></div>
      <p className="text-[16px] leading-[21px] text-app-text-details opacity-30">
        {category}
      </p>
    </Link>
  );
};

export default BlogLatestItem;
