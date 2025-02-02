import { motion } from "framer-motion";
import Link from "next/link";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const ResponsiveNavLinks = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <>
      <motion.header className="lg:hidden" animate={isOpen ? "open" : "closed"}>
        {/* Nav Links */}
        <nav className="">
          <motion.ul
            className="w-screen  shadow-md px-5 h-[40dvh] rounded-t-x fixed right-0 top-16 bg-[#1B76E9] text-white py-10 pl-6 font-medium  space-y-5  z-30"
            variants={{
              open: {
                transition: {
                  duration: 0.7,
                  ease: "easeInOut",
                  staggerChildren: 0.05,
                  delayChildren: 0.5,
                },
                x: 0,
              },
              closed: {
                x: "100%",
              },
            }}
          >
            {["Solutions", "Services", "About Us"].map((route) => (
              <motion.li key={route} variants={itemVariants}>
                <Link className="capitalize hover:underline" href={`/${route}`}>
                  {" "}
                  {route}{" "}
                </Link>
              </motion.li>
            ))}
            <button className="border text-white font-bold rounded border-white bg-transparent   max-lg:w-full max-lg:justify-center max-lg:mt-16 pl-6  py-[13px] flex items-center group/highlight transition-all drop-shadow-sm  ">
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
          </motion.ul>
        </nav>
      </motion.header>
    </>
  );
};

export default ResponsiveNavLinks;
