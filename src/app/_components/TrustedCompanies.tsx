import Image from "next/image";
import CounterItem from "./CounterItem";

const TrustedCompanies = () => {
  return (
    <section className="container mt-32 mb-12">
      <div className="text-center mb-12 space-y-5">
        <h6 className="leading-6 tracking-[2.56px] text-blue-main uppercase font-bold">
          {" "}
          TRUSTED BY THE BEST
        </h6>
        <div className="flex flex-wrap justify-center items-center gap-16 xl:gap-20 2xl:gap-32">
          <CounterItem number={20} prefix="+" text="Years of Experience" />
          <CounterItem number={40} suffix="+" text="Financial Institutions" />
          <CounterItem
            number={200}
            prefix=">"
            suffix="m"
            text="Customers Each"
          />
        </div>
      </div>
      <div className="mt-32">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5  gap-16">
          {[...Array(15).keys()].map((logoNum) => (
            <div key={logoNum} className="flex justify-center  items-center ">
              <Image
                src={`/assets/companies/company-${logoNum + 1}.png`}
                alt="company logo"
                width={600}
                height={400}
                className="w-[200px] h-[100px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
