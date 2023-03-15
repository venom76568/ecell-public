"use client";
import React from "react";
import Image from "next/image";
import about from "../public/assets/about.png";
import Link from "next/link";

const About = () => {
    return (
        <div id="about" className="min-h-screen bg-[#0C0C0C] bg-[url('/assets/back2.png')] bg-cover bg-no-repeat bg-blend-luminosity">
            <div className="h-5/6 lg:h-screen bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(12,12,12,0.8)] grid grid-cols-1 content-center bg-opacity-80">
                <div className="px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#1B1B1B] shadow-[0_8px_40px_2px_rgba(255,255,255,0.08)]">
                        <div className="bg-gradient-to-b from-[#1B1B1B] to-[rgba(0,0,0,0)]">
                            <Image src={about} alt="about" className="h-full" />
                        </div>
                        <div className="flex flex-col px-10 py-14 gap-10 justify-end h-full">
                            <div className="uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA] font-bold">ABOUT E-CELL VNIT</div>
                            <div className="text-white font-light text-lg">
                                E-Cell VNIT is an entrepreneurship cell at <Link href="https://vnit.ac.in" target="_blank">Visvesvaraya National Institute of Technology</Link>, aimed at fostering a community of contemporary and seasoned entrepreneurs while mentoring new and budding startups across the country. Since its establishment in 2003, E-Cell has guided more than 5,000 startups and impacted over 200,000 students and would-be-entrepreneurs. With various programs, E-Cell plays a key role in developing entrepreneurial skills and providing deserving individuals with opportunities. Additionally, E-Cell invokes a sense of responsibility towards the nation in students by empowering social startups. Throughout the year, E-Cell organizes expert talks, webinars, workshops, skill development events, rewarding competitions, pitching scenarios, and more.
                            </div>
                            <div className="w-full flex flex-col sm:flex-row gap-10 items-center justify-center text-white text-sm lg:text-xl lg:justify-between p-4">
                                <Link href="/team" target="_blank" className="bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase text-center w-full md:w-1/3 py-4">Team</Link>
                                <Link href="/glimpses" target="_blank" className="bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase text-center w-full md:w-1/3 py-4">Glimpses</Link>
                                <Link href="/#contact" target="_blank" className="bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase text-center w-full md:w-1/3 py-4">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;