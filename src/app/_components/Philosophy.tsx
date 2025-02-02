import Image from "next/image";
const features = [
  {
    title: "Full-suite solutions",
    description:
      "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
    image: "/assets/icons/solution.svg",
  },
  {
    title: "Simplify the complex",
    description:
      "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
    image: "/assets/icons/bulb.avif",
  },
  {
    title: "Cutting-edge tech",
    description:
      "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
    image: "/assets/icons/chip.svg",
  },
];
const Philosophy = () => {
  return (
    <section className="container mb-24">
      <div className="text-center mb-12 space-y-5">
        <h6 className="leading-6 tracking-[2.56px] text-blue-main uppercase font-bold">
          {" "}
          our philosophy
        </h6>
        <h1 className="text-[56px] leading-[61.6px] text-blue-dark font-bold">
          {" "}
          Human-centred innovation
        </h1>
      </div>
      {/* Road Map */}
      <div>
        <Image
          src="/assets/images/roadmap.avif"
          width={2024}
          height={800}
          alt="Human-centred innovation"
          className="object-cover w-full h-full hidden md:block"
          loading="lazy"
        />
        <Image
          src="/assets/images/roadmap.avif"
          width={600}
          height={800}
          alt="Human-centred innovation"
          className="object-cover w-full h-full md:hidden"
          loading="lazy"
        />
      </div>
      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
        {features.map(({description, title,image}) => (
          <div
            key={title}
            className="space-y-5 bg-[#f8fcff] rounded-[20px] p-7"
          >
            <Image
              src={image}
              width={80}
              height={80}
              className="w-[32px] h-[32px] md:w-[50px] md:h-[50px] "
              alt={title}
              loading="lazy"
            />
            <h3 className="text-blue-dark font-bold text-[24px] leading-[31.2px]">
              {title}
            </h3>
            <p className="text-blue-dark leading-[25.6px]">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Philosophy;
