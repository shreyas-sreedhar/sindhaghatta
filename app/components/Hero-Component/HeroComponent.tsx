"use client";
import React from "react";
import { HeroParallax } from "./hero-parallax";
import { ImagesSlider } from "./hero-slider";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";

export default function HeroComponent() {
  return ( <>     
   

   <Navbar/>

  <ImagesSlider className="h-[100vh]" images={products}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
        Sindhughatta Grama Devathe Devasthana
        </motion.p>
        <p className="text-base md:text-xl mt-8 bg-clip-text text-transparent  bg-gradient-to-b from-neutral-50 to-neutral-400">
      A 2500-Year-Old Temple of Shri Lakshmi Rupina Durgamata in KR Pete Taluk, Mandya, Karnataka, India
      </p>
        {/* <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Get Directions→</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button> */}
      </motion.div>
    </ImagesSlider>





  </>
  )
}
export const products = [
  "/images/Sindhaghatta_13.jpg",
  "/images/Sindhaghatta_02.jpg",
  "/images/Sindhaghatta_03.jpg",
  "/images/Sindhaghatta_01.jpg",
  "/images/Sindhaghatta_04.jpg",
  "/images/Sindhaghatta_05.jpg",
  "/images/Sindhaghatta_01.jpg",
  "/images/Sindhaghatta_11.jpg",
  "/images/Sindhaghatta_08.jpg",
  "/images/Sindhaghatta_09.jpg",
  "/images/Sindhaghatta_10.jpg",
  "/images/Sindhaghatta_07.jpg",
  "/images/Sindhaghatta_12.jpg",
  "/images/Sindhaghatta_06.jpg",
  "/images/Sindhaghatta_14.jpg"
];
