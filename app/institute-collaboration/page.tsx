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

import TiltCard, { CustomCard } from "./components/TiltCard";
import { cards } from "./colleges";
import { ClassNames } from "@emotion/react";
import Heading from "./components/Heading";
import { useState, useEffect } from "react";

// export default Example;

const Collaborators = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check screen size on initial load
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderCards = (role: string) => {
    return cards
      .filter((card) => card.role === role)
      .map((card) => {
        if (isMobile) {
          return <CustomCard card={card} key={card.id} />;
        }
        return <TiltCard card={card} key={card.id} />;
      });
  };
  return (
    <div className="p-8 md:py-40 lg:px-16 lg:py-40 sm:py-40">
      <Heading title="INSTITUTE COLLABORATORS" isMobile={isMobile} />
      <div className="flex justify-center flex-wrap gap-10">
        {renderCards("Institute Collaboration")}
      </div>

      {/* <div className="bg-inherit" style={{ marginTop: "100px" }} />
      
      <Heading title="ACM STUDENT CHAPTER COLLABORATORS" isMobile={isMobile} />
      <div className="flex items-center gap-10" style={{ flexWrap: "wrap" }}>
        {renderCards("ACM Student Chapter")}
      </div> */}
    </div>
  );
};

export default Collaborators;
