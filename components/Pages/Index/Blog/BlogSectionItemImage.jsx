"use client";

import { useEffect, useState } from "react";
import "./BlogStyles.css";

const BlogSectionItemImage = ({ fgImage, bgImage }) => {
  const [isIn, setIsIn] = useState(false);

  const onMouseOver = (e) => {
    setIsIn(true);
  };

  const onMouseOut = (e) => {
    // e.target.style.setProperty("--x", `-100px`);
    // e.target.style.setProperty("--y", `-100px`);
    e.target.style.setProperty("--size", `0px`);
  };

  const onMouseMove = (e) => {
    if (isIn) {
      let rect = e.target.getBoundingClientRect();

      // if (Math.floor(e.clientX - rect.left) == rect.width / 2) {
      //   console.log("ok");
      // }
      e.target.style.setProperty("--size", `70px`);
      e.target.style.setProperty("--x", `${e.clientX - rect.left}px`);
      e.target.style.setProperty("--y", `${e.clientY - rect.top}px`);
    }
  };

  const onLoad = () => {
    console.log("ok");
  };

  useEffect(() => {
    document.querySelectorAll(".img-hole").forEach((element) => {
      element.style.setProperty(
        "--image",
        `url(${element.getAttribute("data-fgimage")})`
      );
    });
  }, []);

  return (
    <div
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onMouseMove={onMouseMove}
      className="img-hole h-[390px] lg:h-[432px] relative object-cover rounded-lg border-[1px] border-black border-opacity-20"
      style={{ backgroundImage: `url(${bgImage})` }}
      data-fgimage={fgImage}
    ></div>
  );
};

export default BlogSectionItemImage;
