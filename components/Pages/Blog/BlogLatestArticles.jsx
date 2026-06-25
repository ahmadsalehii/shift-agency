"use client";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import TabGroup from "@/components/Tabs/TabGroup";
import TabItem from "@/components/Tabs/TabItem";
import TabList from "@/components/Tabs/TabList";
import TabPanel from "@/components/Tabs/TabPanel";
import TabPanels from "@/components/Tabs/TabPanels";
import BlogLatestItem from "./BlogLatestItem";

import Article1Image from "@/public/images/blog/1.png";
import Article2Image from "@/public/images/blog/3.png";
import Article3Image from "@/public/images/blog/4.png";
import Article4Image from "@/public/images/blog/5.png";

const BlogLatestArticles = () => {
  return (
    <div className="flex flex-col items-start app-container mt-12">
      <h4 className="text-[16px] lg:text-[24px] leading-[20px] lg:leading-[29px] font-medium">
        Latest Articles
      </h4>
      <TabGroup className="mt-3">
        <TabList>
          <TabItem>All</TabItem>
          <TabItem>Branding</TabItem>
          <TabItem>Digital Design</TabItem>
          <TabItem>Development</TabItem>
          <TabItem>Marketing</TabItem>
        </TabList>
        <TabPanels className="mt-2">
          <TabPanel>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2 }}>
              <Masonry gutter="30px">
                <BlogLatestItem
                  i={1}
                  image={Article1Image}
                  title="Values not aesthetics. The crucial aspects of good design"
                  readingTime="13 min"
                  category="Ui/Ux Design - Google - Ads"
                />
                <BlogLatestItem
                  i={2}
                  image={Article2Image}
                  title="Design for neurodiversity"
                  readingTime="13 min"
                  category="Ui/Ux Design - Google - Ads"
                />
                <BlogLatestItem
                  i={3}
                  image={Article3Image}
                  title="Design for neurodiversity"
                  readingTime="13 min"
                  category="Ui/Ux Design - Google - Ads"
                />
                <BlogLatestItem
                  i={4}
                  image={Article4Image}
                  title="How to properly prepare your website for SEO"
                  readingTime="13 min"
                  category="Ui/Ux Design - Google - Ads"
                />{" "}
              </Masonry>
            </ResponsiveMasonry>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default BlogLatestArticles;
