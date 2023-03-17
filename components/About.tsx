"use client";
import React from "react";
import Image from "next/image";
import about from "../public/assets/about.png";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="h-5/6 lg:h-screen bg-[#0C0C0C] bg-[url('/assets/back2.png')] bg-cover bg-no-repeat bg-blend-luminosity">
      <div className="h-5/6 lg:h-screen w-full bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(12,12,12,0.8)] grid grid-cols-1 content-center bg-opacity-80">
        <div className="px-10">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 bg-[#1B1B1B] shadow-[0_8px_40px_2px_rgba(255,255,255,0.08)]">
            <div className="bg-gradient-to-b from-[#1B1B1B] to-[rgba(0,0,0,0)]">
              <Image src={about} alt="about" className="" />
            </div>
            <div className="flex flex-col px-10 py-14 gap-6 lg:gap-14 justify-center">
              <div className="uppercase text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA] font-bold">ABOUT E-CELL VNIT</div>
              <div className="text-white text-justify lg:text-left font-light text-[12px] sm:text-base md:text-[17px] lg:text-lg xl:text-xl">
                E-Cell VNIT is an entrepreneurship cell based at <a href="https://vnit.ac.in">Visvesvaraya National Institute of Technology</a> that mentors and guides new and existing startups. It aims to foster a community of entrepreneurs, with programs and events that provide deserving individuals with opportunities to develop entrepreneurial skills and succeed. E-Cell VNIT also inspires social responsibility in students by empowering social startups. Since its inception in 2003, E-Cell VNIT has guided over 5,000 startups and impacted more than 200,000 students and aspiring entrepreneurs
              </div>
              <div className="w-full flex flex-col sm:flex-row gap-10 items-center justify-center text-white text-sm lg:text-base xl:text-xl lg:justify-between">
                <Link href="/team" target="_blank" className="bg-gradient-to-b from-[#0298F9] to-[#086BEA] hover:from-[#0a6eb6] hover:to-[#086BEB] uppercase text-center w-full md:w-1/3 py-4">Team</Link>
                <Link href="/glimpses" target="_blank" className="bg-gradient-to-b from-[#0298F9] to-[#086BEA] hover:from-[#0a6eb6] hover:to-[#086BEB] uppercase text-center w-full md:w-1/3 py-4">Glimpses</Link>
                <Link href="/#contact" target="_blank" className="bg-gradient-to-b from-[#0298F9] to-[#086BEA] hover:from-[#0a6eb6] hover:to-[#086BEB] uppercase text-center w-full md:w-1/3 py-4">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;