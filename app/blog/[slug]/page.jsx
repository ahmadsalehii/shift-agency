import Image from "next/image";
import ArticleTitle from "@/components/Pages/Article/ArticleTitle";
import ArticleContent from "@/components/Pages/Article/ArticleContent";
import ArticleMeta from "@/components/Pages/Article/ArticleMeta";
import ArticleRelated from "@/components/Pages/Article/ArticleRelated";
import ContactDetails from "@/components/Pages/Index/Contact/ContactDetails";

const page = () => {
  return (
    <div>
      <div className="app-container mt-2 flex flex-col">
        <ArticleTitle />
        <ArticleContent />
        <ArticleMeta />
        <ArticleRelated />
      </div>
      <div className="mt-16">
        <ContactDetails />
      </div>
    </div>
  );
};

export default page;
