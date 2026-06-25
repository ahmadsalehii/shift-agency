import OutlineButton from "@/components/Buttons/OutlineButton";
import SectionTitle from "../SectionTitle";
import BlogSectionItem from "./BlogSectionItem";

import Article1Image from "@/public/images/blog/1.png";
import Article2Image from "@/public/images/blog/2.png";
import Article3Image from "@/public/images/blog/3.png";

const articles = [
  {
    title: "Dropbox 'For All Things Worth ...",
    description: "Ui/Ux Design - Frontend",
    fgImage: "/images/blog/1.png",
    bgImage: "/images/blog/2.png",
    link: "#",
  },
  {
    title: "Eames Institute",
    description: "Ui/Ux Design - Frontend",
    fgImage: "/images/blog/3.png",
    bgImage: "/images/blog/4.png",
    link: "#",
  },
  {
    title: "Dropbox 'For All Things Worth ...",
    description: "Ui/Ux Design - Frontend",
    fgImage: "/images/blog/5.png",
    bgImage: "/images/blog/3.png",
    link: "#",
  },
];

const BlogSection = () => {
  return (
    <div className="flex flex-col mt-14">
      <SectionTitle bgText="Blog" text="Blog" />
      <div className="app-container flex flex-col">
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-[30px]">
          {articles.map((article, i) => (
            <BlogSectionItem
              key={i}
              title={article.title}
              description={article.description}
              link={article.link}
              fgImage={article.fgImage}
              bgImage={article.bgImage}
            />
          ))}
        </div>
        <OutlineButton className="mt-5 lg:mt-8 h-[48px] lg:h-[64px]">
          All Blog Posts
        </OutlineButton>
      </div>
    </div>
  );
};

export default BlogSection;
