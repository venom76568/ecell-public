"use client";
import React from "react";
import Image from "next/image";
import init from "./assets/INITIATIVES.png";
import line from "./assets/Line 3.png";
import neo from "./assets/neo.png";
import CS from "./assets/CS.png";
import event from "./assets/EVENTS.png";
const InitAndEvents = () => {
  return (
    <div
      className="bg-[url('./assets/back.png')]  bg-no-repeat bg-left bg-cover "
      style={{ height: "150vh" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80">
        <div
          className="flex flex-col items-center justify-center h-screen"
          style={{ marginTop: "-300px" }}
        >
          <Image
            src={init}
            alt="My Image"
            width={300}
            height={77}
            style={{ marginBottom: "40rem", marginTop: "2rem" }}
          />
          <Image
            src={line}
            alt="My Image"
            width={300}
            height={77}
            style={{ marginTop: "-39rem" }}
          />
        </div>
      </div>
      <div
        className="flex flex-col justify-center md:flex-row"
        style={{ paddingTop: "200px" }}
      >
        <div className="flex flex-col mr-40">
          <div className=" h-56 w-72 mb-4 z-10">
            <Image
              src={CS}
              alt="My Image"
              width={200}
              height={77}
              style={{ marginLeft: "50px", marginTop: "10px" }}
            />
            <Image
              src={line}
              alt="My Image"
              width={300}
              height={77}
              style={{ marginTop: "-0.2rem" }}
            />
          </div>
          <div
            className="bg-[#161616] h-56  w-72 z-10 py-3 px-9"
            style={{ height: "300px" }}
          >
            <h1 className="text-blue-600 font-bold">C-SUITES</h1>
            <p className="text-sm text-white">
              It is a community of like-minded people within VNIT Nagpur where
              we grow ourselves individually along with people around us. The
              mission seeks to create a self-sustained ecosystem, where peers
              discuss and learn from each other through regular group
              interactions.
            </p>
            <button className="bg-blue-700 font-bold py-2 px-5 ml-9 mt-5 text-white">
              {" "}
              KNOW MORE
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className=" h-56 w-60 mb-4 z-10 flex flex-col">
            <Image src={neo} alt="My Image" width={300} height={77} />
            <Image
              src={line}
              alt="My Image"
              width={300}
              height={77}
              style={{ marginTop: "-2rem" }}
            />
          </div>
          <div
            className="bg-[#161616] h-80 w-72 z-10 py-3 px-9"
            style={{ height: "300px" }}
          >
            <h1 className="text-blue-600 font-bold">NEO</h1>
            <p className="text-sm text-white">
              National Entrepreneurship Olympiad is a PAN - India examination
              and a skill enhancement program for the students of class 7th to
              12th grade to nurture and test their entrepreneurial skills. This
              Olympiad includes sections like Basic Entrepreneurial Concepts,
              Value Proposition, Finances...
            </p>
            <button className="bg-blue-700 font-bold py-2 px-5 ml-9 mt-5 text-white">
              {" "}
              KNOW MORE
            </button>
          </div>
        </div>
      </div>
      <div
        className="bg-[url('./assets/back2.png')]  bg-no-repeat bg-left bg-cover "
        style={{ height: "200vh" }}
      >
        <div className="flex flex-col items-center justify-center h-screen">
          <Image
            src={event}
            alt="My Image"
            width={200}
            height={77}
            style={{ marginTop: "-28rem", marginBottom: "1rem" }}
          />
          <Image src={line} alt="My Image" width={220} height={77} />
        </div>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-1">
      <div className="bg-gray-200 h-24"></div>
      <div className="bg-gray-200 h-24"></div>
      <div className="bg-gray-200 h-24"></div>
      <div className="bg-gray-200 h-24"></div>
      <div className="bg-gray-200 h-24"></div>
      <div className="bg-gray-200 h-24"></div>
      <div className="bg-gray-200 h-24"></div>
      <div className="bg-gray-200 h-24"></div>
      <div className="bg-gray-200 h-24"></div>
    </div>
      </div>
    </div>
  );
};

export default InitAndEvents;
