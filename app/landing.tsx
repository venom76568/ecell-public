"use client";
import React from "react";
import Image from "next/image"
import About from "./assets/about.png"
import BackImg from "./assets/BackgroundImage1.png";
import Face from "./assets/facebook.png";
import Insta from "./assets/insta.png";
import Linkedin from './assets/Linkedin.png'
import Twitter from './assets/twitter.png'
import Utube from "./assets/utube.png"

const Landing = () => {
    return(
        <div className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.56)),url('./assets/BackgroundImage1.png')]  bg-no-repeat bg-left bg-cover"
        style={{ height: "150vh" }}>
            <div className="justify-content title">
                <h1 className="text-white ">THE</h1>
                <h1 className="text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[#086BEA] to-[#0298F9]">ENTREPRENEURSHIP CELL</h1>
                <h1 className="text-white ">VNIT NAGPUR</h1>
            </div>
            <hr className="line1"/>
            <Image src={Twitter} alt="Twitter" className="twitter"/>
            <Image src={Face} alt="Twitter" className="face"/>
            <Image src={Insta} alt="Twitter" className="insta"/>
            <Image src={Linkedin} alt="Twitter" className="linkedin"/>
            <Image src={Utube} alt="Twitter" className="utube"/>
            <hr className="line2"/>
            <div className="border-solid">
                <div className="explore">
                    <h1>Explore</h1> 
                </div>
            </div>
        </div>
    )
}

export default Landing;