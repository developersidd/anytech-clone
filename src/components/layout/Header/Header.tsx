"use client";
import Icon from "@/components/common/Icon";
import Image from "next/image";
import { useState } from "react";
import NavLinks from "./NavLinks/NavLinks";
import ResponsiveNavLinks from "./NavLinks/ResponsiveLavLinks";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className={`container font-inter max-lg:bg-blue-main flex justify-between mx-auto py-5 items-center absolute top-0 left-0 right-0 z-30 ${
          isOpen ? "overflow-hidden scrollbar-hide" : ""
        }`}
      >
        {/* Logo */}
        <div className="flex items-end md:items-center gap-2">
          <Image
            src="/assets/icons/logo.svg"
            width="200"
            height="32"
            className="w-[134px] h-auto object-contain lg:w-[170px]"
            sizes="134px, (min-width: 1024px) 170px"
            alt="AnyTech"
          />
        </div>
        {/* Nav Link */}
        <NavLinks />
        <div className="flex items-center gap-[10px] sm:gap-3 lg:gap-5">
          <button className="border text-white font-bold rounded border-white bg-transparent hover:bg-white hover:text-blue-main hidden max-lg:w-full max-lg:justify-center max-lg:mt-16 pl-6 pr-10 py-[13px]  lg:flex items-center group/highlight transition-all drop-shadow-sm  ">
            <span> Contact Us </span>
            <svg
              className="fill-white translate-x-3.5 transition-transform group-hover/highlight:translate-x-5 group-hover/highlight:fill-blue-main"
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.67969 5.89844L2.13281 10.4688C1.89844 10.6797 1.54688 10.6797 1.33594 10.4688L0.796875 9.92969C0.585938 9.71875 0.585938 9.36719 0.796875 9.13281L4.40625 5.5L0.796875 1.89062C0.585938 1.65625 0.585938 1.30469 0.796875 1.09375L1.33594 0.554688C1.54688 0.34375 1.89844 0.34375 2.13281 0.554688L6.67969 5.125C6.89062 5.33594 6.89062 5.6875 6.67969 5.89844Z"></path>
            </svg>
          </button>
          <Icon
            alt="menu-bar"
            src={`/assets/icons/${isOpen ? "close" : "menu-bar"}.svg`}
            className="size-6 lg:hidden text-red-300 z-50"
            onClick={() => setIsOpen(!isOpen)}
          />
          {/* Responsive Nav Link */}
        </div>
      </header>
      <ResponsiveNavLinks onClose={() => setIsOpen(false)} isOpen={isOpen} />
    </>
  );
};

export default Header;
