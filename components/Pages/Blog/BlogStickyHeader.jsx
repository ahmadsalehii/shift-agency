"use client";

import Header from "@/components/Header/Header";
import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";

const BlogStickyHeader = () => {
  const [showHeader, setShowHeader] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 250) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        showHeader ? "visible opacity-100" : "invisible opacity-0"
      } transition-all w-full bg-white bg-opacity-70 backdrop-blur-[28px] shadow-md fixed top-0 z-20`}
    >
      <Header noMB />
    </div>
  );
};

export default BlogStickyHeader;
