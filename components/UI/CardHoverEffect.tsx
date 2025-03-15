/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { GridPattern } from "./GridPattern";
import Link from "next/link";

export const CardHoverEffect = ({data}:any) => {
  console.log("data",data.icon)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }:any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Link href={data.link} target="_blank">
    <div
      onMouseMove={onMouseMove}
      className="group rounded-2xl  border  border-zinc-700 p-4 relative max-w-[22rem] h-[346px]"
    >
      <Effect {...data.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="relative z-10">
       <img src={data.icon} className="border border-zinc-700 p-2 h-12 w-12 rounded-lg text-gray-500" />

        <h3 className="mt-3 mb-3 font-bold text-2xl tracking-wide leading-6 antialiased text-slate-100">
          {data.title}
        </h3>
        <p className="mt-2 font-medium tracking-wide leading-6 antialiased text-gray-300">
          {data.description}
        </p>
        <div className="flex flex-wrap mt-4">
          {data.tags.map((tag: any, index: number) => (
            <span
              key={index}
              className="mr-2 mb-2 px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded italic"
            >
              {tag}
            </span>
          ))}
        </div>
        
          
        
      </div>
    </div>
    </Link>
  );
};

function Effect({ mouseX, mouseY, ...gridProps }:any) {
  const maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 fill-white/1 stroke-white/2.5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 transition duration-300 group-hover:opacity-100 from-[#202D2E] to-[#303428]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-white/2.5 stroke-white/10"
          {...gridProps}
        />
      </motion.div>
    </div>
  );
}