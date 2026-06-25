import Link from "next/link";
import BlogSectionItemImage from "./BlogSectionItemImage";

const BlogSectionItem = ({
  title,
  description,
  fgImage,
  bgImage,
  link = "#",
}) => {
  return (
    <Link href={link} className="flex flex-col group">
      <BlogSectionItemImage fgImage={fgImage} bgImage={bgImage} />
      <h4 className="mt-2 lg:mt-6 text-[18px] lg:text-[24px] font-medium leading-[23px] lg:leading-[28.8px] truncate whitespace-nowrap">
        {title}
      </h4>
      <div className="my-2 border-b w-[165px]"></div>
      <p className="text-[16px] lg:text-[20px] leading-[25.6px] lg:leading-[35px] text-app-text-details opacity-30">
        {description}
      </p>
    </Link>
  );
};

export default BlogSectionItem;
