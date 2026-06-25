"use client";

import { useState } from "react";

import LogoDark from "@/components/Logo/LogoDark";
import HeaderMenu from "./HeaderMenu";
import Link from "next/link";
import MenuIcon from "./icons/MenuIcon";
import Sidebar from "../Sidebar/Sidebar";

const Header = ({ noMB }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <Sidebar show={showSidebar} onClose={() => setShowSidebar(false)} />
      <div
        className={`h-[82px] lg:h-[88px] border-b-[1px] lg:border-[1px] border-[#00000014] ${
          !noMB && "mb-8"
        }`}
      >
        <div className="px-8 lg:px-32 xl:px-40 h-full flex items-center justify-between">
          <Link href="/">
            <LogoDark />
          </Link>
          <HeaderMenu />
          <Link
            href="/contact"
            className="hidden lg:flex bg-app-main rounded-full text-white px-[34px] py-[13.5px]"
          >
            Contact Us
          </Link>
          <MenuIcon onClick={() => setShowSidebar(true)} />
        </div>
      </div>
    </div>
  );
};

export default Header;
