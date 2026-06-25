import BlogLanding from "@/components/Pages/Blog/BlogLanding";
import BlogLatestArticles from "@/components/Pages/Blog/BlogLatestArticles";
import BlogShorts from "@/components/Pages/Blog/BlogShorts";
import BlogStickyHeader from "@/components/Pages/Blog/BlogStickyHeader";

const page = () => {
  return (
    <div className="relative">
      <BlogStickyHeader />
      <BlogLanding />
      <BlogShorts />
      <BlogLatestArticles />
    </div>
  );
};

export default page;
