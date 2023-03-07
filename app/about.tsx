"use client";
import React from "react";
import Image from "next/image"
import About from "./assets/about.png"
import BackImg from "./assets/BackgroundImage1.png";

const AboutEcell = () => {
    return (
        <div className="about">
            <Image src={About} alt='about'/>
            <h1 className="">ABOUT E-CELL VNIT</h1>
        </div>
    )
}

export default AboutEcell;