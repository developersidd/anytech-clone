import LegacySvg from "./LegacySvg";

const Legacy = () => {
  return (
    <section className="relative h-[60vh] lg:h-[530px] w-full text-white bg-clip-cta overflow-hidden bg-[url('/assets/backgrounds/legacy-wave.svg'),_radial-gradient(24.45%_88.58%_at_23.57%_2%,#00e9ea_0%,#1f80f0_52.08%,#005bc4_100%)] bg-no-repeat bg-cover md:z-20 z-0 legacy-clip-path legacy-bg">
      <div className="z-30 container flex w-full items-start max-sm:mt-20 justify-center h-full relative  flex-col mt-6">
        <h2 className="font-montserrat text-2xl xl:text-[56px] leading-[61.6px]  text-white font-semibold mb-[24px]">
          Legacy no longer
        </h2>{" "}
        <p className="text-base font-inter lg:text-lg 2xl:text-xl lg:whitespace-pre-line mb-[30px]">
          Talk to us to find out how we can transform your organisation for the
          future
        </p>
        <div className="flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full">
          <button className=" text-white font-bold rounded    max-lg:w-full max-lg:justify-center lg:mt-16 pl-10 pr-14 py-[16px]  flex items-center group/highlight bg-orange-main transition-all drop-shadow-sm  ">
            <span> Contact Us </span>
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
      </div>
      <LegacySvg />
    </section>
  );
};

export default Legacy;
