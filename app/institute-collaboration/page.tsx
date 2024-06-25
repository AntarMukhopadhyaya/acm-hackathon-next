"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";

import TiltCard from "./components/TiltCard";
import { cards } from "./colleges";
import { ClassNames } from "@emotion/react";
import Heading from "./components/Heading";

// export default Example;

const Collaborators = () => {
  return (
    <div className="p-8 md:py-40 lg:px-16 lg:py-40 sm:py-40">
      {/* <div className="bg-inherit" style={{ marginTop: "100px" }} /> */}
      <Heading title="INSTITUTE COLLABORATORS" />
      <div
        className=" flex h-screen items-center gap-10"
        style={{ flexWrap: "wrap" }}
      >
        {cards
          .filter((card) => card.role === "Institute Collaboration")
          .map((card) => {
            return <TiltCard card={card} key={card.id} />;
          })}
      </div>
      <div className="bg-inherit" style={{ marginTop: "50px" }} />
      <Heading title="ACM STUDENT CHAPTER COLLABORATORS" />
      <div
        className=" flex h-screen items-center gap-10"
        style={{ flexWrap: "wrap" }}
      >
        {cards
          .filter((card) => card.role === "ACM Student Chapter")
          .map((card) => {
            return <TiltCard card={card} key={card.id} />;
          })}
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10">
          {cards.map((card) => {
            return <TiltCard card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Collaborators;
