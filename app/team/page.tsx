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
                <div className="w-full h-full flex justify-center overflow-hidden">
                    <div className="w-full max-w-6xl 2xl:max-w-[95%]">
                        <div className="flex flex-col gap-3 items-center justify-center text-6xl font-semibold">
                            <span className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">Our Team</span>
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
                            <div className="md:col-span-2 lg:col-span-3 justify-center items-center flex flex-col gap-10">
                                <div className="flex flex-col gap-3 items-center justify-center text-5xl font-semibold">
                                    <span className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">Faculty</span>
                                    <svg width="350" height="1" viewBox="0 0 580 1" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    <div>
                                        <div className="border-2 border-gradient-t-secondary">
                                            <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                                                <div className="flex flex-col justify-center gap-6 h-80">
                                                    <Image
                                                        src={bhatt_sir}
                                                        alt="Bhatt"
                                                        className="p-1 overflow-hidden h-full w-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center gap-2 mt-4">
                                            <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                                                Dr. S. S. Bhatt
                                            </span>
                                            <span className="font-medium text-lg text-center text-white">Advisor</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="border-2 border-gradient-t-secondary">
                                            <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                                                <div className="flex flex-col justify-center gap-6 h-80">
                                                    <Image
                                                        src={taiwade_sir}
                                                        alt="Taiwade"
                                                        className="p-1 overflow-hidden h-full w-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center gap-2 mt-4">
                                            <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                                                Dr. R. V. Taiwade
                                            </span>
                                            <span className="font-medium text-lg text-center text-white">Professor Incharge</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="border-2 border-gradient-t-secondary">
                                            <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                                                <div className="flex flex-col justify-center gap-6 h-80">
                                                    <Image
                                                        src={karthik_sir}
                                                        alt="Kharthik"
                                                        className="p-1 overflow-hidden h-full w-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center gap-2 mt-4">
                                            <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                                                Dr. Karthik Balasundaram
                                            </span>
                                            <span className="font-medium text-lg text-center text-white">Professor Incharge</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly items-center pt-36 gap-10 px-2">
                            <div className="md:col-span-2 lg:col-span-3 justify-center items-center flex flex-col gap-10">
                                <div className="flex flex-col gap-3 items-center justify-center text-3xl md:text-4xl xl:text-5xl font-semibold">
                                    <span className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">Core Committee</span>
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
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-xs md:max-w-5xl">
                                    <div>
                                        <div className="border-2 border-gradient-t-secondary">
                                            <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                                                <div className="flex flex-col justify-center gap-6 h-80">
                                                    <Image
                                                        src={bhargav}
                                                        alt="Bhargav"
                                                        className="p-1 overflow-hidden h-full w-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center gap-2 mt-4">
                                            <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                                                Bhargav Choudhury
                                            </span>
                                            <span className="font-medium text-lg text-center text-white">President</span>
                                            <div className="flex justify-center gap-5 mb-5">
                                                <Link href="https://www.linkedin.com/in/bhargav-choudhury-2371a7197/">
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="mailto:bhargavchoudhury071@gmail.com">
                                                    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="tel:6376128630">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="border-2 border-gradient-t-secondary">
                                            <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                                                <div className="flex flex-col justify-center gap-6 h-80">
                                                    <Image
                                                        src={rajat}
                                                        alt="Rajat"
                                                        className="p-1 overflow-hidden h-full w-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center gap-2 mt-4">
                                            <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                                                Rajat Patni
                                            </span>
                                            <span className="font-medium text-lg text-center text-white">Vice President</span>
                                            <div className="flex justify-center gap-5 mb-5">
                                                <Link href="https://www.linkedin.com/in/kanishka-meena-50a4a317a">
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="mailto:rajat.s.patni@gmail.com">
                                                    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="tel:7028081122">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="border-2 border-gradient-t-secondary">
                                            <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                                                <div className="flex flex-col justify-center gap-6 h-80">
                                                    <Image
                                                        src={balpande}
                                                        alt="Balpande"
                                                        className="p-1 overflow-hidden h-full w-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center gap-2 mt-4">
                                            <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                                                Atharva Balpande
                                            </span>
                                            <span className="font-medium text-lg text-center text-white">Treasurer</span>
                                            <div className="flex justify-center gap-5 mb-5">
                                                <Link href="https://www.linkedin.com/in/atharva-balpande-59105b218/">
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="mailto:atharvabalpande07@gmail.com">
                                                    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="tel:8446103465">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="border-2 border-gradient-t-secondary">
                                            <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                                                <div className="flex flex-col justify-center gap-6 h-80">
                                                    <Image
                                                        src={kaabra}
                                                        alt="Kabbra"
                                                        className="p-1 overflow-hidden h-full w-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center gap-2 mt-4">
                                            <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                                                Harsh Kaabra
                                            </span>
                                            <span className="font-medium text-lg text-center text-white">Head of Corporate Communications</span>
                                            <div className="flex justify-center gap-5 mb-5">
                                                <Link href="https://www.linkedin.com/in/harsh-kaabra-4641221b9/">
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="mailto:harshkaabra@gmail.com">
                                                    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="tel:7620216041">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="border-2 border-gradient-t-secondary">
                                            <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                                                <div className="flex flex-col justify-center gap-6 h-80">
                                                    <Image
                                                        src={kench}
                                                        alt="Kench"
                                                        className="p-1 overflow-hidden h-full w-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center gap-2 mt-4">
                                            <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                                                Vaishanvi Kench
                                            </span>
                                            <span className="font-medium text-lg text-center text-white">Head of Corporate Communications</span>
                                            <div className="flex justify-center gap-5 mb-5">
                                                <Link href="https://www.linkedin.com/in/vaishnavi-kench-a9651b211/">
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="mailto:vaishnavikench5@gmail.com">
                                                    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="tel:9359630766">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="border-2 border-gradient-t-secondary">
                                            <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                                                <div className="flex flex-col gap-6 h-80">
                                                    <Image
                                                        src={khanwani}
                                                        alt="Khanwani"
                                                        className="p-1"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center gap-2 mt-4">
                                            <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                                                Nikhil Khanwani
                                            </span>
                                            <span className="font-medium text-lg text-center text-white">Head of Corporate Communications</span>
                                            <div className="flex justify-center gap-5 mb-5">
                                                <Link href="https://www.linkedin.com/in/nikhil-khanwani-3a33471ba/">
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="mailto:nk.nikhilkhanwani@gmail.com">
                                                    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="tel:6260911167">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="border-2 border-gradient-t-secondary">
                                            <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                                                <div className="flex flex-col justify-center gap-6 h-80">
                                                    <Image
                                                        src={akanksha}
                                                        alt="Akanksha"
                                                        className="p-1 overflow-hidden h-full w-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center gap-2 mt-4">
                                            <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                                                Akanksha Dudhe
                                            </span>
                                            <span className="font-medium text-lg text-center text-white">Head of Brand Development</span>
                                            <div className="flex justify-center gap-5 mb-5">
                                                <Link href="https://www.linkedin.com/in/akanksha-dudhe-600444205/">
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="mailto:atdudhe29@gmail.com">
                                                    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="tel:72182221890">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="border-2 border-gradient-t-secondary">
                                            <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                                                <div className="flex flex-col justify-center gap-6 h-80">
                                                    <Image
                                                        src={rohit}
                                                        alt="Rohit"
                                                        className="p-1 overflow-hidden h-full w-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center gap-2 mt-4">
                                            <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                                                Rohit Chouhan
                                            </span>
                                            <span className="font-medium text-lg text-center text-white">Head of Brand Development</span>
                                            <div className="flex justify-center gap-5 mb-5">
                                                <Link href="https://www.linkedin.com/in/rohit-chouhan-9a4a95213/">
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="mailto:rohitgone123@gmail.com">
                                                    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="tel:9021255966">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="border-2 border-gradient-t-secondary">
                                            <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                                                <div className="flex flex-col justify-center gap-6 h-80">
                                                    <Image
                                                        src={dweeja}
                                                        alt="Dweeja"
                                                        className="p-1 overflow-hidden h-full w-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center gap-2 mt-4">
                                            <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                                                Dweeja Reddy
                                            </span>
                                            <span className="font-medium text-lg text-center text-white">Head of Technical Affairs</span>
                                            <div className="flex justify-center gap-5 mb-5">
                                                <Link href="https://www.linkedin.com/in/dweeja-reddy-devi-b12508204/">
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="mailto:dweeja54@gmail.com">
                                                    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="tel:8317567940">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="border-2 border-gradient-t-secondary">
                                            <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                                                <div className="flex flex-col justify-center gap-6 h-80">
                                                    <Image
                                                        src={abhiuday}
                                                        alt="Abhiuday"
                                                        className="p-1 overflow-hidden h-full w-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center gap-2 mt-4">
                                            <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                                                Abhiuday Gupta
                                            </span>
                                            <span className="font-medium text-lg text-center text-white">Head of Technical Affairs</span>
                                            <div className="flex justify-center gap-5 mb-5">
                                                <Link href="https://www.linkedin.com/in/cp-Coder">
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="mailto:gupta.abhiuday.109@gmail.com">
                                                    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="tel:9517680322">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="border-2 border-gradient-t-secondary">
                                            <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                                                <div className="flex flex-col justify-center gap-6 h-80">
                                                    <Image
                                                        src={tanmay}
                                                        alt="Tanmay"
                                                        className="p-1 overflow-hidden h-full w-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center gap-2 mt-4">
                                            <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                                                Tanmay Nagrale
                                            </span>
                                            <span className="font-medium text-lg text-center text-white">Head Of Events and Planning</span>
                                            <div className="flex justify-center gap-5 mb-5">
                                                <Link href="https://www.linkedin.com/in/tanmay-nagrale-6b38b7205/">
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="mailto:nagraletanmay123@gmail.com">
                                                    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="tel:9146188972">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="border-2 border-gradient-t-secondary">
                                            <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                                                <div className="flex flex-col justify-center gap-6 h-80">
                                                    <Image
                                                        src={tanishqa}
                                                        alt="Tanishqa"
                                                        className="p-1 overflow-hidden h-full w-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center gap-2 mt-4">
                                            <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                                                Tanishqa Mishra
                                            </span>
                                            <span className="font-medium text-lg text-center text-white">Head Of Events and Planning</span>
                                            <div className="flex justify-center gap-5 mb-5">
                                                <Link href="https://www.linkedin.com/in/tanishqa-mishra-406ab5209/">
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="mailto:tanishqam30@gmail.com">
                                                    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="tel:9179713005">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="border-2 border-gradient-t-secondary">
                                            <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                                                <div className="flex flex-col justify-center gap-6 h-80">
                                                    <Image
                                                        src={priyanshu}
                                                        alt="Priyanshu"
                                                        className="p-1 overflow-hidden h-full w-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center gap-2 mt-4">
                                            <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                                                Priyanshu Singh
                                            </span>
                                            <span className="font-medium text-lg text-center text-white">Head of Public Relations</span>
                                            <div className="flex justify-center gap-5 mb-5">
                                                <Link href="https://www.linkedin.com/in/priyanshu-singh-480405214/">
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="mailto:thisispriyanshu2001@gmail.com">
                                                    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="tel:9920479815">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="border-2 border-gradient-t-secondary">
                                            <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                                                <div className="flex flex-col justify-center gap-6 h-80">
                                                    <Image
                                                        src={mitali}
                                                        alt="Mitali"
                                                        className="p-1 overflow-hidden h-full w-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center gap-2 mt-4">
                                            <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                                                Mitali Khodke
                                            </span>
                                            <span className="font-medium text-lg text-center text-white">Head of Public Relations</span>
                                            <div className="flex justify-center gap-5 mb-5">
                                                <Link href="https://www.linkedin.com/in/mitali-khodke-63408220b/">
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="mailto:mitalikhodke@gmail.com">
                                                    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="tel:9309576732">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="border-2 border-gradient-t-secondary">
                                            <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                                                <div className="flex flex-col justify-center gap-6 h-80">
                                                    <Image
                                                        src={borkute}
                                                        alt="Borkute"
                                                        className="p-1 overflow-hidden h-full w-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center gap-2 mt-4">
                                            <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                                                Atharv Borkute
                                            </span>
                                            <span className="font-medium text-lg text-center text-white">Head of Operations</span>
                                            <div className="flex justify-center gap-5 mb-5">
                                                <Link href="https://www.linkedin.com/in/atharv-borkute-5a396620b/">
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="mailto:borkuteatharva@gmail.com">
                                                    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="tel:8010610772">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden xl:block"></div>
                                    <div>
                                        <div className="border-2 border-gradient-t-secondary">
                                            <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                                                <div className="flex flex-col justify-center gap-6 h-80">
                                                    <Image
                                                        src={kushagra}
                                                        alt="Kushagra"
                                                        className="p-1 overflow-hidden h-full w-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center gap-2 mt-4">
                                            <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                                                Kushagra Upadhyaya
                                            </span>
                                            <span className="font-medium text-lg text-center text-white">Head of Operations</span>
                                            <div className="flex justify-center gap-5 mb-5">
                                                <Link href="https://www.linkedin.com/in/kushagra-upadhyaya-967b7220a/">
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="mailto:kushagraupa5@gmail.com">
                                                    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                                <Link href="tel:9414741300">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z" fill="#0298F9" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-10 bg-black">
                    <Footer />
                </div>
            </div>
        </>
    );
};
export default Team;
