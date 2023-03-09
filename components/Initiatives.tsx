"use client";
import React from "react";
import Image from "next/image";
import NEO from "../public/assets/NEO.png";
import CS from "../public/assets/CS.png";

const Initiatives = () => {
  return (
    <div id="initiatives" className="min-h-screen mt-20 bg-[url('/assets/back.png')] bg-no-repeat bg-center bg-cover background-blend-luminosity">
      <div className="bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.2)]">
        <div className="flex flex-col gap-3 items-center justify-center text-6xl font-semibold">
          <span className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">Initiatives</span>
          <svg width="450" height="1" viewBox="0 0 580 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="580" y2="0.5" stroke="url(#paint0_linear_11_3)" />
            <defs>
              <linearGradient id="paint0_linear_11_3" x1="622.006" y1="1" x2="-40.7939" y2="0.999999" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="0.501042" stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-evenly pt-20 gap-10">
          <div className="flex flex-col items-end">
            <div className="">
              <Image
                src={CS}
                alt="My Image"
                width={200}
                height={77}
                className="ml-28"
              />
              <svg width="400" height="1" viewBox="0 0 500 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="604" y2="0.5" stroke="url(#paint0_linear_28_8)" />
                <defs>
                  <linearGradient id="paint0_linear_28_8" x1="500.362" y1="1" x2="50.6017" y2="1" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="0.501042" stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="h-full w-1/2 bg-[#161616] mt-8 p-8 flex flex-col justify-end">
              <div>
                <div className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">C-suites</div>
                <p className="text-base mt-2 text-white">
                  C-Suites is a community of like-minded people within VNIT Nagpur where we grow ourselves individually along with people around us. The mission seeks to create a self-sustained ecosystem, where peers discuss and learn from each other through regular group
                  interactions.
                </p>
              </div>
              <button className="bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase w-1/2 self-center py-4 mt-6 text-white">Know More</button>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="mt-2">
              <Image
                src={NEO}
                alt="My Image"
                width={200}
                height={77}
                className="ml-20"
              />
              <svg width="380" height="1" viewBox="0 0 500 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="454" y2="0.5" stroke="url(#paint0_linear_28_8)" />
                <defs>
                  <linearGradient id="paint0_linear_28_8" x1="330.362" y1="1" x2="-100.6017" y2="1" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="0.501042" stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="h-full w-1/2 bg-[#161616] mt-8 p-8 flex flex-col justify-center">
              <div>
                <h1 className="font-bold text-2xl uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">Neo</h1>
                <p className="text-base mt-2 text-white">
                  National Entrepreneurship Olympiad is a PAN - India examination and a skill enhancement program for the students of class 7th to 12th grade to nurture and test their entrepreneurial skills. This Olympiad includes sections like Basic Entrepreneurial Concepts, Value Proposition, Finances...
                </p>
              </div>
              <button className="bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase w-1/2 self-center py-4 mt-6 text-white">Know More</button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div >
  );
};

export default Initiatives;
