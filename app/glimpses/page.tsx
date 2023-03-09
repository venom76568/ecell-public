'use client'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

import abhiuday from "../../public/assets/team/abhiuday.png";
import akanksha from "../../public/assets/team/akanksha.jpg";
import balpande from "../../public/assets/team/balpande.png";
import bhargav from "../../public/assets/team/bhargav.jpg";
import bhatt_sir from "../../public/assets/team/bhatt_sir.png";
import borkute from "../../public/assets/team/borkute.jpeg";
import dweeja from "../../public/assets/team/dweeja.jpg";
import kaabra from "../../public/assets/team/kaabra.jpeg";
import karthik_sir from "../../public/assets/team/karthik_sir.png";
import kench from "../../public/assets/team/kench.png";
import khanwani from "../../public/assets/team/khanwani.jpg";
import kushagra from "../../public/assets/team/kushagra.jpg";
import mitali from "../../public/assets/team/mitali.jpg";
import priyanshu from "../../public/assets/team/priyanshu.jpg";
import rajat from "../../public/assets/team/rajat.jpg";
import rohit from "../../public/assets/team/rohit.jpg";
import taiwade_sir from "../../public/assets/team/taiwade_sir.jpeg";
import tanishqa from "../../public/assets/team/tanishqa.jpg";
import tanmay from "../../public/assets/team/tanmay.jpg";
import Link from "next/link";

const Team = () => {
    return (
        <>
            <Navbar />
            <div className="bg-[#0C0C0C] pt-10 pb-36">
                <div className="flex flex-col gap-3 items-center justify-center text-6xl font-semibold">
                    <span className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">Glimpses</span>
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
                <div className="flex justify-center items-center h-screen text-white text-6xl">Coming Soon!!!</div>
            </div>
            <div className="pt-10 bg-black">
                <Footer />
            </div>
        </>
    );
};
export default Team;
