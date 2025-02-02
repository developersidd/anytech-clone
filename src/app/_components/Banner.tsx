import Image from "next/image";
import BannerSvg from "./BannerSvg";

const Banner = () => {
  return (
    <section
      className="banner-clipPath
      lg:h-[max(620px,_calc(92vh-49px))] h-auto relative w-full text-white  pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%]   bg-[radial-gradient(59.82%_121.73%_at_-9.66%_130.31%,#00e9ea_0%,#1f80f0_52.08%,#005bc4_100%)] 
      "
    >
      <div className="relative  w-full h-full md:flex md:items-center md:justify-center">
        <div className="z-30 container h-fit lg:flex-[65] xl:flex-[75] space-y-7">
          <h1 className="lg:max-w-3xl lg:whitespace-pre-line text-[80px] leading-[115%] tracking-[-1.6px] font-semibold font-Montserrat  text-white">
            Embrace the future of finance
          </h1>
          <h5 className="text-white max-w-[37rem] lg:mr-5 text-lg font-medium font-Montserrat">
            Reimagine financial services with AnyTech’s open platform,
            distributed banking solution that powers transformation
          </h5>
          <button className=" text-white font-bold rounded    max-lg:w-full max-lg:justify-center max-lg:mt-16 pl-10 pr-16 py-[16px]  lg:flex items-center group/highlight bg-orange-main transition-all drop-shadow-sm  ">
            <span> React Out to Us </span>
            <svg
              className="fill-white translate-x-3.5 transition-transform group-hover/highlight:translate-x-5 "
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.67969 5.89844L2.13281 10.4688C1.89844 10.6797 1.54688 10.6797 1.33594 10.4688L0.796875 9.92969C0.585938 9.71875 0.585938 9.36719 0.796875 9.13281L4.40625 5.5L0.796875 1.89062C0.585938 1.65625 0.585938 1.30469 0.796875 1.09375L1.33594 0.554688C1.54688 0.34375 1.89844 0.34375 2.13281 0.554688L6.67969 5.125C6.89062 5.33594 6.89062 5.6875 6.67969 5.89844Z"></path>
            </svg>
          </button>
        </div>
        <div
          className="
        hidden lg:block absolute top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full 
        pointer-events-none banner-image-clipPath
        "
        >
          <figure
            className="h-[115%] w-[115%] object-cover"
            style={{ transform: "translate3d(-12%, 0.014%, 0px)" }}
          >
            <Image
              src="/assets/backgrounds/banner-women.avif"
              width="1552"
              height="1304"
              className="z-10 h-full w-full object-cover"
              alt="background image"
            />
          </figure>
          <div
            className="absolute top-0 left-0 w-full 
          h-full bg-[linear-gradient(190deg,#1f80f0_15.05%,rgba(31,128,240,0)_30.39%)]"
          ></div>
        </div>
      </div>
      <BannerSvg />
    </section>
  );
};

export default Banner;
