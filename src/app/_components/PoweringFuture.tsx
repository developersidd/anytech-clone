import Image from "next/image";

const PoweringFuture = () => {
  return (
    <>
      <section className="container mt-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-7">
            <h6 className="text-blue-main leading-[24px] tracking-[2.56px] font-bold">
              POWERING THE FUTURE OF FINANCE{" "}
            </h6>
            <h1 className="text-[56px] leading-[61.6px] text-blue-dark font-bold">
              Uncovering new ways to delight customers
            </h1>
            <div className="space-y-7">
              <p className="leading-[25.6px] font-bold text-blue-dark">
                AnyTech is revolutioning financial technology by introducing
                innovative and real-time transaction account processing
                capabilities, specifically designed for retail financial
                services.
              </p>
              <p className="leading-[25.6px] text-blue-dark">
                Our modern approach surpasses traditional banking and card
                processing systems, empowering you with the most advanced
                technology for lasting success.
              </p>
            </div>
          </div>
          <div className="relative h-fit">
            {/* Powering Women */}
            <figure
              className="w-[76%] mx-auto -z-10"
              style={{ boxShadow: "0px 23px 30px 0px #16437763" }}
            >
              <Image
                src="/assets/images/powering.avif"
                width={1124}
                height={1364}
                alt="POWERING THE FUTURE OF FINANCE"
                className="object-cover w-full h-full"
                sizes="(min-width: 1024px) 45vw, 95vw"
                loading="lazy"
              />
            </figure>
          {/* Finance Icons */}
            <div>
              <figure className="absolute top-[10%] right-[12%] translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl">
                <Image
                  src="https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?auto=format"
                  width={116}
                  height={115}
                  alt="anybass"
                  sizes="115px"
                  className="object-contain w-full h-full"
                  loading="lazy"
                />
              </figure>
              <figure className="absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl">
                <Image
                  src="https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?auto=format"
                  width={89}
                  height={88}
                  alt="anypass"
                  sizes="87px"
                  className="object-contain w-full h-full"
                  loading="lazy"
                />
              </figure>
              <figure className="absolute top-[20%] left-[12%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl">
                <Image
                  src="https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg?auto=format"
                  width={74}
                  height={75}
                  className="object-contain w-full h-full"
                  alt="anycaas"
                  sizes="73px"
                  loading="lazy"
                />
              </figure>
            </div>

            {/* Background Top */}
            <figure
              className="absolute inset-0 w-full h-full -z-10"
              style={{
                transform: "translate3d(0%, -1.08011%, 0px)",
                transition:
                  "transform 2500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                animationFillMode: "forwards",
              }}
            >
              <Image
                className="object-cover w-full h-full overflow-visible"
                loading="lazy"
                src="/assets/backgrounds/powering-waves.svg"
                width={1200}
                height={1200}
                alt="background frame"
              />
            </figure>
            {/* Background Bottom */}
            <figure
              className="absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%]"
              style={{
                transform: "translate3d(0%, 0.885558%, 0px)",
                transition:
                  "transform 2500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                animationFillMode: "forwards",
              }}
            >
              <Image
                src="/assets/backgrounds/powering-foreground.png"
                width={1124}
                height={1364}
                alt="POWERING THE FUTURE OF FINANCE"
                className="object-cover w-full h-full"
                sizes="(min-width: 1024px) 45vw, 95vw" 

                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>
      <svg
        className="undefined max-h-[240px] md:my-sm my-lg w-full min-h-[60px]"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1920 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.7"
          d="M-240 0L1680 0L-240 280L-240 0Z"
          fill="url(#paint0_linear_6055_471)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_6055_471"
            x1="458.5"
            y1="1561.14"
            x2="392.705"
            y2="52.1879"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1F80F0" />
            <stop offset={1} stopColor="#1F80F0" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default PoweringFuture;
