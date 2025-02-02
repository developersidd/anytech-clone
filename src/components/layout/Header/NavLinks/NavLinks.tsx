import Link from "next/link";
const link = ["Services", "About Us"];

const NavLinks = () => {
  return (
    <nav className="hidden lg:flex items-center gap-14 text-primary-black">
      <ul className="flex items-center gap-14">
        <div className="group/dropdown relative">
          <li className="py-4 text-white text-center inline-flex items-center font-medium">
            Solution{" "}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </li>

          <div
            id="dropdownDelay"
            data-popover="menu"
            className="z-10 hidden absolute top-14 left-0 group-hover/dropdown:block bg-white  rounded-md shadow-sm w-44 "
          >
            <ul className=" py-2 text-sm text-blue-dark divide-y divide-gray-100 font-medium">
              {["AnyCaas", "AnyBaas", "AnyPaas"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLocaleLowerCase()}`}
                    className="block px-4 py-2.5 hover:text-blue-main"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {link.map((item, index) => (
          <li key={index}>
            <Link
              href={item.toLocaleLowerCase()}
              className="relative text-white font-medium before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[3px] before:bg-white before:rounded  before:scale-x-0 before:transition-transform before:duration-300 before:origin-right hover:before:scale-x-100  hover:before:origin-left"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
