"use client";

import Image from "next/image";
import Header from "./header";

import { Handjet } from "next/font/google";
import { SetStateAction, useState } from "react";
const handjet = Handjet({
  weight: ["500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Product4() {
  const [hoveredCard, setHoveredCard] = useState(2);

  // Function to handle mouse enter
  const handleMouseEnter = (index: SetStateAction<number>) => {
    setHoveredCard(index);
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setHoveredCard(2); // Reset when the mouse leaves
  };

  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image src="/BG/04.png" alt="bg" fill className="object-cover" />
      </div>

      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <div className="h-screen flex flex-col justify-center items-center">
        {/* Title Section */}
        <div className="text-white text-center space-y-2 my-20">
          <span className="text-xs tracking-wider">HIGH PERFORMANCE GEAR</span>
          <h1 className={`${handjet.className} text-6xl tracking-wider`}>
            PICK YOUR POISON
          </h1>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-5">
          {/* Card 1 */}
          <div
            className={`relative flex flex-col justify-center items-center transition-all duration-300 ${
              hoveredCard === 1 || hoveredCard === null ? "" : "blur-sm"
            }`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="/SELECTION_ASSETS/SELECTION_BOX[MAIN].png"
              alt="card-background"
              className="object-cover"
              width={250}
            />
            <img
              src="/prod/For Classic/Wudan Fists/PNG.png"
              alt="product-1"
              className="absolute top-24 w-56"
            />
            <h1 className="text-white text-lg">MERCH</h1>
          </div>

          {/* Card 2 (center card, always active) */}
          <div
            className={`relative flex flex-col justify-center items-center transition-all duration-300 ${
              hoveredCard === 2 || hoveredCard === null ? "" : "blur-sm"
            }`}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="/SELECTION_ASSETS/SELECTION_BOX[MAIN].png"
              alt="card-background"
              className="object-cover"
              width={300}
            />
            <img
              src="/prod/For Classic/Cards & Cash/PNG.png"
              alt="product-2"
              className="absolute top-16 w-96 -rotate-12"
            />
            <h1 className="text-white text-lg">METAL-WORK</h1>
          </div>

          {/* Card 3 */}
          <div
            className={`relative flex flex-col justify-center items-center transition-all duration-300 ${
              hoveredCard === 3 || hoveredCard === null ? "" : "blur-sm"
            }`}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="/SELECTION_ASSETS/SELECTION_BOX[MAIN].png"
              alt="card-background"
              className="object-cover"
              width={250}
            />
            <img
              src="/prod/For Classic/UNFAZED/png.png"
              alt="product-3"
              className="absolute top-14 w-96"
            />
            <h1 className="text-white text-lg">CLOTHING</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 mt-10">
        <h1 className="text-white w-80 text-center tracking-wider">
          Crafted for those who dare to endure hardship on their path to
          unparalleled strength and vitality.
        </h1>
        <img src="/SELECTION_ASSETS/VISIT WEBSITE.png" width={250} />
      </div>
      <div className="flex items-center justify-between -my-20">
        <img src="/SELECTION_ASSETS/snake2.png" width={400} />
        <div className="flex items-center justify-between gap-10">
          <div className="relative flex flex-col items-center gap-4">
            <div>
              <img src="/SELECTION_ASSETS/square.png" width={60} />
              <img
                src="/SELECTION_ASSETS/ball.png"
                width={50}
                className="absolute top-1 left-8"
              />
            </div>
            <span className={`text-white ${handjet.className} `}>
              SHIPPING WORLDWIDE
            </span>
          </div>
          <div className="relative flex flex-col items-center gap-4 mt-4">
            <div>
              <img src="/SELECTION_ASSETS/square.png" width={60} />
              <img
                src="/SELECTION_ASSETS/helmet.png"
                width={50}
                className="absolute top-1 left-2"
              />
            </div>
            <span
              className={`text-white w-16 ${handjet.className} text-center`}
            >
              OWN A PIECE OF HISTORY
            </span>
          </div>
          <div className="relative flex flex-col items-center gap-4">
            <div>
              <img src="/SELECTION_ASSETS/square.png" width={60} />
              <img
                src="/SELECTION_ASSETS/reish.png"
                width={45}
                className="absolute top-2 left-9"
              />
            </div>
            <span className={`text-white  ${handjet.className} `}>
              BUILT FOR PERFORMANCE
            </span>
          </div>
        </div>
        <img src="/SELECTION_ASSETS/snake1.png" width={400} />
      </div>
      <img
        src="/SELECTION_ASSETS/smoke left.png"
        width={400}
        className=" absolute bottom-0 left-0 opacity-55"
      />
    </div>
  );
}
