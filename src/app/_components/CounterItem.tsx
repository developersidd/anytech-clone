"use client";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const CounterItem = ({
  number,
  suffix,
  prefix,
  text,
}: {
  number: number;
  suffix?: string;
  prefix?: string;
  text: string;
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [ref, inView] = useInView({ triggerOnce: true });
  const animationRef = useRef<ReturnType<typeof animate>>(null);

  useEffect(() => {
    if (inView) {
      animationRef.current = animate(count, number, {
        duration: 2,
        ease: "easeOut",
      });
    }
  }, [count, inView, number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h1 className="max-[280px]:text-[40px] text-[64px] lg:text-[96px] font-Montserrat tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-blue-main to-[#0057BB] text-transparent bg-clip-text">
        <span>{prefix}</span>
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </h1>
      <p className="text-lg  mt-5 text-[#151d2f] capitalize">{text}</p>
    </motion.div>
  );
};

export default CounterItem;
