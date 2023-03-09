"use client";
import React from "react";
import Image from "next/image";
import about from "../public/assets/about.png";

const About = () => {
    return (
        <div id="about" className="mt-56 xl:mt-0 min-h-screen bg-[#0C0C0C]">
            <div className="min-h-screen bg-[url('/assets/back2.png')] bg-cover bg-no-repeat bg-blend-luminosity">
                <div className="h-screen bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(12,12,12,0.8)] grid grid-cols-1 content-center bg-opacity-80">
                    <div className="px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#1B1B1B] shadow-[0_8px_40px_2px_rgba(255,255,255,0.08)]">
                            <div className="bg-gradient-to-r from-[#1B1B1B] to-[rgba(0,0,0,0)]">
                                <Image src={about} alt="about" className="h-full" />
                            </div>
                            <div className="flex flex-col p-10 gap-10 justify-end h-full">
                                <div className="uppercase text-2xl text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA] font-bold">ABOUT E-CELL VNIT</div>
                                <div className="text-white font-light text-lg">
                                    E-Cell VNIT is the entrepreneurship cell of Visvesvaraya National Institute of Technology. As the name suggests, the very purpose of E-Cell is to foster a community of contemporary as well as seasoned entrepreneurs, besides mentoring of new and budding startups across the country.
                                    Established since 2003, E-Cell has been the driving force for channelizing and guiding more than 5,000 startups, impacting over 200,000 students and would-be entrepreneurs.
                                    With a variety of programs E-Cell organization plays a key role in development of entrepreneurial skills and giving an opportunity to the deserving.
                                    At the same time, it has been invoking a sense of responsibility towards the nation in students by empowering social startups as well.
                                    Throughout the year, the E-Cell organizes expert talks, webinar, workshops, light skill development events as well as highly rewarding competitions, pitching scenarios and much more.
                                </div>
                                <div className="w-full flex gap-10 text-white text-xl justify-between p-4">
                                    <button className="bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase w-1/3 py-4">Team</button>
                                    <button className="bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase w-1/3 py-4">Glimpses</button>
                                    <button className="bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase w-1/3 py-4">Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;