"use client";
import React from "react";

import flagship from "../public/assets/flagship.png"
import suc from "../public/assets/suc.png"
import jugaad from "../public/assets/jugaad.png"
import adventure from "../public/assets/adventure.png"
import wallstreet from "../public/assets/wallstreet.png"
import ceo from "../public/assets/ceo.png"
import render from "../public/assets/render.png"
import ipl from "../public/assets/ipl.png"
import swades from "../public/assets/swades.png";
import Image from "next/image";

const Events = () => {
  return (
    <div id="events" className="min-h-screen mt-20 bg-[url('/assets/back3.png')] bg-no-repeat bg-bottom bg-cover bg-blend-luminosity">
      <div className="bg-gradient-to-b from-[rgba(0,0,0,0.14)] to-[rgba(0,0,0.4,1)]">
        <div className="flex flex-col gap-3 items-center justify-center text-6xl font-semibold">
          <span className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">Events</span>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly items-center pt-20 gap-10">
          <div className="flex flex-col justify-center h-full gap-6">
            <Image
              src={flagship}
              width={200}
              height={100}
              alt="Flagship"
              className="self-center"
            />
            <div className="flex flex-col justify-center gap-8">

              <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase">Flagship</span>
              <button className="bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase w-1/3 self-center py-4 text-white">Know More</button>
            </div>
          </div>
          <div className="flex flex-col justify-center h-full gap-6">
            <Image
              src={suc}
              width={330}
              height={100}
              alt="Startup Conclave"
              className="self-center"
            />
            <div className="flex flex-col justify-center gap-8">

              <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase">Startup Conclave</span>
              <button className="bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase w-1/3 self-center py-4 text-white">Know More</button>
            </div>
          </div>
          <div className="flex flex-col justify-center h-full gap-6">
            <Image
              src={jugaad}
              width={200}
              height={100}
              alt="Jugaad"
              className="self-center"
            />
            <div className="flex flex-col justify-center gap-8">

              <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase">Jugaad</span>
              <button className="bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase w-1/3 self-center py-4 text-white">Know More</button>
            </div>
          </div>
          <div className="flex flex-col justify-center h-full gap-6">
            <Image
              src={adventure}
              width={340}
              height={100}
              alt="Adventure"
              className="self-center"
            />
            <div className="flex flex-col justify-center gap-8">

              <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase">Adventure</span>
              <button className="bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase w-1/3 self-center py-4 text-white">Know More</button>
            </div>
          </div>
          <div className="flex flex-col justify-center h-full gap-6">
            <Image
              src={wallstreet}
              width={340}
              height={340}
              alt="Wallstreet"
              className="self-center"
            />
            <div className="flex flex-col justify-center gap-8">

              <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase">Wallstreet</span>
              <button className="bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase w-1/3 self-center py-4 text-white">Know More</button>
            </div>
          </div>
          <div className="flex flex-col justify-center h-full gap-6">
            <Image
              src={ceo}
              width={340}
              height={100}
              alt="CEO"
              className="self-center"
            />
            <div className="flex flex-col justify-center gap-8">

              <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase">CEO</span>
              <button className="bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase w-1/3 self-center py-4 text-white">Know More</button>
            </div>
          </div>
          <div className="flex flex-col justify-center h-full gap-6">
            <Image
              src={render}
              width={320}
              height={100}
              alt="Render.ico"
              className="self-center"
            />
            <div className="flex flex-col justify-center gap-8">

              <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase">Render.ico</span>
              <button className="bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase w-1/3 self-center py-4 text-white">Know More</button>
            </div>
          </div>
          <div className="flex flex-col justify-center h-full gap-6">
            <Image
              src={ipl}
              width={230}
              height={50}
              alt="IPL Auction"
              className="self-center"
            />
            <div className="flex flex-col justify-center gap-8">

              <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase">IPL Auction</span>
              <button className="bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase w-1/3 self-center py-4 text-white">Know More</button>
            </div>
          </div>
          <div className="flex flex-col justify-center h-full gap-6">
            <Image
              src={swades}
              width={230}
              height={100}
              alt="Swades"
              className="self-center"
            />
            <div className="flex flex-col justify-center gap-8">

              <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase">Swades</span>
              <button className="bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase w-1/3 self-center py-4 text-white">Know More</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};
export default Events;
