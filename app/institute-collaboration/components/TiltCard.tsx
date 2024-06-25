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

export type CardType = {
  url: string;
  title: string;
  role: string;
  id: number;
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ card }: { card: CardType }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      key={card.id}

      // className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transform,
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
        }}
        className="relative h-[450px] w-[600px] rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
      >
        <div
          style={{
            backgroundPosition: "center",
            transform: "translateZ(50px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-0 z-10 flex items-end "
        >
          <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-l text-center font-black text-white backdrop-blur">
            {card.title}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default TiltCard;
