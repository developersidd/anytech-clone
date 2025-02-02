import Image from "next/image";
import Link from "next/link";
import Icon from "../common/Icon";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#002045]">
        <div className="container flex items-center justify-between py-11">
          <Image
            src="/assets/icons/logo.svg"
            width="200"
            height="32"
            className="w-[134px] h-auto object-contain lg:w-[170px]"
            sizes="134px, (min-width: 1024px) 170px"
            alt="AnyTech"
          />
          {/*  Solution Links */}
          <div className="hidden items-center text-[#00E9EA] lg:flex">
            <p className="border-r border-blue-dark px-6 py-4  leading-[25.6px] text-lg font-medium">
              Our Solutions
            </p>
            <ul className="flex items-center">
              <li>
                <Link
                  href="/anycaas"
                  className="px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-blue-main lg:text-body-p1"
                >
                  AnyCaaS
                </Link>
              </li>
              <li>
                <Link
                  className="px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-blue-main lg:text-body-p1"
                  href="/anybaas"
                >
                  AnyBaaS
                </Link>
              </li>
              <li>
                <Link
                  className="px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-blue-main lg:text-body-p1"
                  href="/anypaas"
                >
                  AnyPaaS
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-6 sm:hidden  lg:gap-10">
            <Link href="/linkedin">
              <Icon
                className="w-[24px] h-[25px]"
                src="/assets/icons/linkedin.webp"
                alt="linkedin"
              />
            </Link>

            <Link href="/telephone">
              <Icon
                className="w-[24px] h-[25px]"
                src="/assets/icons/telephone.webp"
                alt="telephone"
              />
            </Link>
            <Link href="/mail">
              <Icon
                className="w-[26px] h-[23px]"
                src="/assets/icons/mail.webp"
                alt="mail"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#00152D]">
        <div className="container flex flex-col items-center justify-between py-6 text-sm text-blue-main lg:flex-row ">
          <p className="">
            <strong>©2023 All rights reserved</strong>. Any Technology Pte Ltd.
          </p>
          <div className="flex items-center gap-[14px] max-lg:mt-4">
            <div>
              <Link
                className="transition-colors duration-300 hover:text-blue-highlight"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
