import BlogShortsItem from "./BlogShortsItem";
import ShortImage1 from "@/public/images/shorts/1.png";
import ShortImage2 from "@/public/images/shorts/2.png";
import ShortImage3 from "@/public/images/shorts/3.png";

const BlogShorts = () => {
  return (
    <div className="mt-8 app-container flex flex-col">
      <h4 className="font-medium text-[16px] lg:text-[24px] leading-[21px] lg:leading-[29px]">Short Reads</h4>
      <div className="mt-3 border border-black border-opacity-[0.15]"></div>
      <div className="w-[68px] border border-black -mt-[1.5px]"></div>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
        <BlogShortsItem
          title="What is an MVP and how to define the..."
          image={ShortImage1}
          readingTime="6 Min"
          category="Project Management"
        />
        <BlogShortsItem
          title="A guide to interface design for older ..."
          image={ShortImage2}
          readingTime="3 Min"
          category="Design"
        />
        <BlogShortsItem
          title="Top 5 tips on giving  design feedback..."
          image={ShortImage3}
          readingTime="2 Min"
          category="Other"
        />
      </div>
    </div>
  );
};

export default BlogShorts;
