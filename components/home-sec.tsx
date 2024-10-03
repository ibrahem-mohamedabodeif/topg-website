"use client";
import Image from "next/image";
import { Handjet } from "next/font/google";
import { useState } from "react";
const handjet = Handjet({
  weight: ["500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export default function HomeSec() {
  const backgrounds = ["/BG/00.png", "/BG/000.png"];

  // State to keep track of the current background
  const [currentBackground, setCurrentBackground] = useState(0);

  // Function to change the background based on the index
  const nextProduct = () => {
    setCurrentBackground((prevIndex) =>
      prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevProduct = () => {
    setCurrentBackground((prevIndex) =>
      prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <Image
        src={backgrounds[currentBackground]}
        alt={`bg-${currentBackground}`}
        fill
        className="object-cover -z-10 duration-200 transition-opacity"
      />
      <div className="z-10 px-28 py-2 flex items-center justify-between">
        <div
          className={`${handjet.className} font-bold text-white text-xl tracking-wider uppercase flex items-center gap-10`}
        >
          <span>shop</span>
          <span>get fireblood</span>
          <span>get g-offee</span>
        </div>
        <Image src="/BG/logo.png" alt="logo" width={250} height={200} />
        <div className="flex items-center gap-5">
          <img src="/SELECTION_ASSETS/SEARCHQ.png" alt="search" width={28} />
          <img src="/SELECTION_ASSETS/LOGIN.png" alt="search" width={28} />
          <img src="/SELECTION_ASSETS/CART.png" alt="search" width={28} />
          <img src="/SELECTION_ASSETS/MATRIX.png" alt="search" width={80} />
        </div>
      </div>
      <div className="relative flex justify-between items-center my-16 mx-5">
        <div className="flex items-center">
          <img
            src="/SELECTION_ASSETS/03.png"
            width={150}
            onClick={nextProduct} // Change to background 1
            className="cursor-pointer"
          />
          <div className="w-56 flex flex-col items-start gap-y-5">
            <h1
              className={`${handjet.className} text-white text-8xl tracking-wider`}
            >
              COBRA’S SHIELD
            </h1>
            <span className="text-white uppercase text-lg">
              Don your armour. Repel weakness. Win.
            </span>
            <div className="flex relative -left-5">
              <img src="/SELECTION_ASSETS/SHOP NOW.png" width={300} />
            </div>
          </div>
        </div>
        <img
          src="/SELECTION_ASSETS/02.png"
          width={150}
          onClick={prevProduct} // Change to background 2
          className="cursor-pointer"
        />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-10 absolute right-48 bottom-10">
          <div className="relative">
            {/* Background Image */}
            <img
              src="/BG/PNG_4bars.png"
              width={220}
              className="object-cover float-right -z-10"
              alt="Background Bars"
            />

            {/* Logo Image */}
            <img
              src="/BG/logo.png"
              width={200}
              className="absolute top-6 left-[120px] z-10"
              alt="Logo"
            />
          </div>

          {/* Rating Section */}
          <div className="flex items-center space-x-4">
            <img src="/SELECTION_ASSETS/STARS.png" width={80} alt="Stars" />
            <span className="text-white text-sm">
              Rated by +100,000 men of distinction.
            </span>
          </div>
        </div>
        <div className="flex ">
          <div className="flex items-center gap-5 absolute bottom-10 left-24 ">
            <span className="text-white text-sm">
              {" "}
              {currentBackground + 1} / {backgrounds.length}
            </span>
            <div className="flex gap-4">
              {backgrounds.map((_, index) => (
                <span
                  key={index}
                  className={`border rounded-full w-2 h-2 cursor-pointer transition-all duration-300 ${
                    currentBackground === index
                      ? "ring-1 ring-gray-400 ring-offset-4 ring-offset-foreground bg-gray-400"
                      : "bg-gray-400 border-transparent"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
