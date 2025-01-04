"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

import bhatt_sir from "../../public/assets/team/bhatt_sir.png";
import karthik_sir from "../../public/assets/team/karthik_sir.png";
import priyanshu from "../../public/assets/team/priyanshu3.jpg";
import agasti_sir from "../../public/assets/team/agasti_sir.jpeg";
import bhosale_sir from "../../public/assets/team/bhosale_sir.jpg";
import harsh from "../../public/assets/team/harsh8.jpg";
import aneesh from "../../public/assets/team/aneesh3.jpg";
import harshitha from "../../public/assets/team/harshitha2.jpg";
import jai from "../../public/assets/team/jai1.jpg";
import khushi from "../../public/assets/team/khushi3.jpg";
import nikhil from "../../public/assets/team/nikhil3.jpg";
import pranay from "../../public/assets/team/pranay3.jpg";
import shravani from "../../public/assets/team/shravani.jpeg";
import shruti from "../../public/assets/team/shruti1.jpg";
import anubhav from "../../public/assets/team/anubhav.jpg";
import ishan from "../../public/assets/team/ishan4.jpg";
import aditya from "../../public/assets/team/aditya7.jpg";
import sanchit from "../../public/assets/team/sanchit.png";
import nirmayee from "../../public/assets/team/nirmayee1.jpeg";
import tanvi from "../../public/assets/team/tanvi1.jpeg";
import anshul from "../../public/assets/team/anshul1i.jpg";
import sudhanshu from "../../public/assets/team/sudhanshu1.jpg";
import apurva from "../../public/assets/team/apurva1.jpg";
import bhakti from "../../public/assets/team/bhakti1.jpg";
import anurag from "../../public/assets/team/anurag1.jpeg";
import harshA from "../../public/assets/team/Harsh1.jpeg";
import anuj from "../../public/assets/team/anuj1.jpg";
import aquib from "../../public/assets/team/aquib1.jpg";
import rohit from "../../public/assets/team/rohit1.jpg";
import chayan from "../../public/assets/team/chayan.jpg";
import khatri from "../../public/assets/team/khatri.jpg";
import abhijeet from "../../public/assets/team/abhijeet1.jpg";
import Link from "next/link";

const Team = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#0C0C0C] pt-10 pb-36">
        <div className="w-full h-full flex justify-center overflow-hidden">
          <div className="w-full max-w-6xl 2xl:max-w-[95%] p-6">
            <div className="flex flex-col gap-3 items-center justify-center text-4xl xs:text-5xl lg:text-6xl font-semibold">
              <span className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                Our Team
              </span>
              <svg
                className="px-5"
                width="450"
                height="1"
                viewBox="0 0 580 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="0.5"
                  x2="580"
                  y2="0.5"
                  stroke="url(#paint0_linear_11_3)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_11_3"
                    x1="622.006"
                    y1="1"
                    x2="-40.7939"
                    y2="0.999999"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="0.501042" stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-evenly items-center pt-20 gap-10">
              {/* Faculty Title */}
              <div className="md:col-span-3 lg:col-span-3 justify-center items-center flex flex-col gap-10">
                <div className="flex flex-col gap-3 items-center justify-center text-4xl xl:text-5xl font-semibold">
                  <span className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                    Faculty
                  </span>
                  <svg
                    width="350"
                    height="1"
                    viewBox="0 0 580 1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      y1="0.5"
                      x2="580"
                      y2="0.5"
                      stroke="url(#paint0_linear_11_3)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_11_3"
                        x1="622.006"
                        y1="1"
                        x2="-40.7939"
                        y2="0.999999"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" stopOpacity="0" />
                        <stop offset="0.501042" stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Professor 1 */}
              <div>
                <div className="border-2 border-gradient-t-secondary scale-90">
                  <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)]">
                    <div className="relative w-full h-[320px]">
                      <Image
                        src={agasti_sir}
                        alt="agasti"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-2 mt-4">
                  <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                    Dr. Amrut Agasti
                  </span>
                  <span className="font-medium text-lg text-center text-white">
                    Professor Incharge
                  </span>
                </div>
              </div>

              {/* Professor 2 */}
              <div>
                <div className="border-2 border-gradient-t-secondary scale-90">
                  <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)]">
                    <div className="relative w-full h-[320px]">
                      <Image
                        src={chayan}
                        alt="chayanDas_sir"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-2 mt-4">
                  <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                    Dr. Chayan Das
                  </span>
                  <span className="font-medium text-lg text-center text-white">
                    Professor Incharge
                  </span>
                </div>
              </div>

              {/* Professor 3 */}
              <div>
                <div className="border-2 border-gradient-t-secondary scale-90">
                  <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)]">
                    <div className="relative w-full h-[320px]">
                      <Image
                        src={khatri}
                        alt="khatri_sir"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-2 mt-4">
                  <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                    Dr. Ashish P. Khatri
                  </span>
                  <span className="font-medium text-lg text-center text-white">
                    Professor Incharge
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly items-center pt-36 gap-10 px-2">
              <div className="md:col-span-2 lg:col-span-3 justify-center items-center flex flex-col gap-10">
                <div className="flex flex-col gap-3 items-center justify-center text-4xl xl:text-5xl font-semibold">
                  <span className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                    Core Committee
                  </span>
                  <svg
                    width="450"
                    height="1"
                    viewBox="0 0 580 1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      y1="0.5"
                      x2="580"
                      y2="0.5"
                      stroke="url(#paint0_linear_11_3)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_11_3"
                        x1="622.006"
                        y1="1"
                        x2="-40.7939"
                        y2="0.999999"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" stopOpacity="0" />
                        <stop offset="0.501042" stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 max-w-xs md:max-w-5xl">
                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={ishan}
                            alt="Ishan Pandey"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        Ishan Pandey
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        President
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        <Link
                          href="https://www.linkedin.com/in/ishan-pandey-489a3519b"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="mailto:ishanpandey@duck.com">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:6376317859">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={pranay}
                            alt="pranay"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        Pranay Gaidhane
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        Vice President
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        <Link
                          href="https://www.linkedin.com/in/pranay-gaidhane-319843217"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="mailto:gaidhanepranay19@gmail.com">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:8308728488">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={anshul}
                            alt="anshul"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        Anshul Mukati
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        Treasurer
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        <Link
                          href="https://www.linkedin.com/in/anshul-mukati-643a15285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="mailto:anshulmukati2021@gmail.com">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:9479402002">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={sudhanshu}
                            alt="sudhanshu"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        Sudhanshu Tiwari
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        Head of Corporate Communications
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        <Link
                          href="https://www.linkedin.com/in/sudhanshu-tiwari-843ba525b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="mailto:sudhanshutiwari4117@gmail.com">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:9130692448">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={apurva}
                            alt="apurva"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        Apurva Ugale
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        Head of Corporate Communications
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        <Link
                          href="https://www.linkedin.com/in/apurva-ugale-3964b1267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="mailto:bt22mme018@vnit.students.ac.in">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:8208874080">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={bhakti}
                            alt="bhakti"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        Bhakti Umarkar
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        Head of Brand Marketing
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        <Link
                          href="https://www.linkedin.com/in/bhakti-umarkar-101754282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="mailto:bhaktiumarkar497@gmail.com">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:9552990692">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={anurag}
                            alt="anurag"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        Anurag Tiwari
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        Head of Brand Marketing
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        <Link
                          href="https://www.linkedin.com/in/anurag-tiwari-172a59250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="mailto:tiwanurag44@gmail.com">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:7572041766">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={harshA}
                            alt="harshA"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        Harsh Agrawal
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        Head of Technical Affairs
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        <Link
                          href="https://www.linkedin.com/in/harsh-agrawal-1o0/"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="mailto:hagrawal560@gmail.com">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:8805214581">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={anuj}
                            alt="anuj"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        Anuj Singh
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        Head Of Public Relations
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        <Link
                          href="https://www.linkedin.com/in/anujsingh5"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="mailto:anujsingh.442211@gmail.com">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:9373765481">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={aquib}
                            alt="aquib"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        Aquib Iqbal Shaikh
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        Head Of Public Relations
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        <Link
                          href="https://www.linkedin.com/in/aquib-iqbal-shaikh-042504253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="mailto:aquibshaikh200215@gmail.com">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:8581930601">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={tanvi}
                            alt="tanvi"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        Tanvi Malode
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        Head of Operations and Planning
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        <Link
                          href="https://www.linkedin.com/in/tanvi-malode-5744a4258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="mailto:malodetanvi01@gmail.com">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:9096779472">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={abhijeet}
                            alt="abhijeet"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        Abhijeet Singh
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        Head of Operations and Planning
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        <Link
                          href="https://www.linkedin.com/in/abhijeet-singh-as1510"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="mailto:malodetanvi01@gmail.com">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:9096779472">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border-2 border-gradient-t-secondary scale-90">
                      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)] ">
                        <div className="relative w-full h-[320px]">
                          <Image
                            src={rohit}
                            alt="rohit"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 mt-4">
                      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                        Rohit Shirvas
                      </span>
                      <span className="font-medium text-lg text-center text-white">
                        Head of Operations and Planning
                      </span>
                      <div className="flex justify-center gap-5 mb-5">
                        <Link href="" target="_blank">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="mailto:rohitshrivas453@gmail.com">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 2.45953V16.3685C24 17.2725 23.268 18.0045 22.364 18.0045H18.545V8.73253L12 13.6425L5.455 8.73253V18.0055H1.636C1.42107 18.0055 1.20825 17.9632 1.0097 17.8809C0.811145 17.7986 0.63075 17.678 0.47882 17.526C0.32689 17.374 0.206404 17.1935 0.124246 16.9949C0.0420884 16.7963 -0.000131068 16.5835 3.05652e-07 16.3685V2.45953C3.05652e-07 0.436531 2.309 -0.718469 3.927 0.495531L5.455 1.64253L12 6.55053L18.545 1.64053L20.073 0.495531C21.69 -0.717469 24 0.436531 24 2.45953Z"
                              fill="#0298F9"
                            />
                          </svg>
                        </Link>
                        <Link href="tel:7440391889">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.62167 15.6033 6.81333 14.3367 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.48 5.295 0.000666667 3.19933 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.729 4.746 6.687 4.938C6.645 5.13 6.54933 5.30067 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1127 17.775 12.288C17.925 12.4633 18 12.6673 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                              fill="#0298F9"
                            />
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
    </div>
  );
};
export default Team;
