'use client'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

import adobe from "../../public/assets/sponsors/adobe.png";
import air_india from "../../public/assets/sponsors/air_india.png";
import akudo from "../../public/assets/sponsors/akudo.png";
import astrail from "../../public/assets/sponsors/astrail.png";
import bsnl from "../../public/assets/sponsors/bsnl.png";
import canara from "../../public/assets/sponsors/canara.png";
import ccd from "../../public/assets/sponsors/ccd.png";
import central from "../../public/assets/sponsors/central.png";
import coal_india from "../../public/assets/sponsors/coal_india.png";
import coco_cola from "../../public/assets/sponsors/coco_cola.png";
import dhl from "../../public/assets/sponsors/dhl.png";
import hp from "../../public/assets/sponsors/hp.png";
import iball from "../../public/assets/sponsors/iball.png";
import insurance from "../../public/assets/sponsors/insurance.jpeg";
import itc from "../../public/assets/sponsors/itc.png";
import kawasaki from "../../public/assets/sponsors/kawasaki.png";
import lenskart from "../../public/assets/sponsors/lenskart.png";
import moil from "../../public/assets/sponsors/moil.png";
import ntpc from "../../public/assets/sponsors/ntpc.png";
import ola from "../../public/assets/sponsors/ola.png";
import oyo from "../../public/assets/sponsors/oyo.png";
import radisson from "../../public/assets/sponsors/radisson.png";
import rc from "../../public/assets/sponsors/rc.png";
import sbi from "../../public/assets/sponsors/sbi.png";
import sidbi from "../../public/assets/sponsors/sidbi.png";
import uber from "../../public/assets/sponsors/uber.png";
import unacademy from "../../public/assets/sponsors/unacademy.png";
import zebronics from "../../public/assets/sponsors/zebronics.png";

const Sponsors = () => {
    return (
        <>
            <Navbar />
            <div className="p-10">
                <div className="flex justify-center items-center">
                    <span className="uppercase text-transparent text-7xl font-bold bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">Our Sponsors</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-10">
                    <div className="flex justify-center items-center">
                        <Image className="" src={zebronics} alt="zebronics" />
                    </div>
                    <div className="flex justify-center items-center ">
                        <Image className="" src={unacademy} alt="unacademy" />
                    </div>
                    <div className="flex justify-center items-center ">
                        <Image className="" src={akudo} alt="akudo" />
                    </div>
                    <div className="flex justify-center items-center">
                        <Image className="" src={kawasaki} alt="kawasaki" />
                    </div>
                    <div className="flex justify-center items-center">
                        <Image className="" src={coco_cola} alt="cocacola" />
                    </div>
                    <div className="flex justify-center items-center">
                        <Image className="" src={radisson} alt="radisson blu" />
                    </div>
                    <div className="flex justify-center items-center">
                        <Image className=" max-w-28" src={adobe} alt="adobe" />
                    </div>
                    <div className="flex justify-center items-center">
                        <Image className="" src={air_india} alt="air india" />
                    </div>
                    <div className="flex justify-center items-center">
                        <Image className="" src={central} alt="central" />
                    </div>
                    <div className="lg:col-span-3 flex flex-col lg:flex-row gap-10 lg:gap-6">
                        <div className="flex justify-center items-center">
                            <Image className="" src={ntpc} alt="ntpc" />
                        </div>
                        <div className="flex justify-center items-center ">
                            <Image className="" src={coal_india} alt="coal india" />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image className="" src={moil} alt="moil" />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image className="" src={sidbi} alt="sidbi" />
                        </div>
                    </div>
                    <div className="lg:col-span-3 flex flex-col lg:flex-row gap-10 lg:gap-6">
                        <div className="flex justify-center items-center">
                            <Image className="" src={canara} alt="canara" width={1000} />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image className="" src={sbi} alt="sbi" />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image className="" src={bsnl} alt="bsnl" />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image className="" src={insurance} alt="national insurance" />
                        </div>
                    </div>
                    <div className="lg:col-span-3 flex flex-col lg:flex-row gap-10 lg:gap-6">
                        <div className="flex justify-center items-center">
                            <Image className="" src={oyo} alt="oyo" />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image className="" src={lenskart} alt="lenskart" />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image className="" src={itc} alt="itc" />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image className="" src={ola} alt="ola" />
                        </div>
                    </div>
                    <div className="lg:col-span-3 flex flex-col lg:flex-row gap-10 lg:gap-6">
                        <div className="flex justify-center items-center">
                            <Image className="" src={hp} alt="hp" width={400} />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image className="" src={uber} alt="uber" width={500} />
                        </div>
                        <div className="flex justify-center items-center ">
                            <Image className="" src={iball} alt="iball" />
                        </div>
                        <div className="flex justify-center items-center ">
                            <Image className="" src={ccd} alt="ccd" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center ">
                        <Image className="" src={dhl} alt="dhl" />
                    </div>
                    <div className="flex justify-center items-center ">
                        <Image className="" src={astrail} alt="astrail" />
                    </div>
                    <div className="flex justify-center items-center ">
                        <Image className="" src={rc} alt="radio city" />
                    </div>
                </div>
            </div>
            <div className="pt-10 bg-black">
                <Footer />
            </div>
        </>
    );
}

export default Sponsors;