"use client";
import { Handjet } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion"; // استيراد Framer Motion
import ReactPlayer from "react-player";

const handjet = Handjet({
  weight: ["500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Product1() {
  const products = [
    {
      name: "HARD TO KILL [TEE]",
      price: "$69",
      image: "/prod/h2k/Hard to kill tee/PNG.png",
      selectionBox: "/SELECTION_ASSETS/SELECTION_BOX[WIDE].png",
      video: "/prod/h2k/Hard to kill tee/1920x1920.mp4",
    },
    {
      name: "HARD TO KILL [HOODIE]",
      price: "$350",
      image: "/prod/h2k/HARD_TO_KILL[HOODIE]/PNG.png",
      selectionBox: "/SELECTION_ASSETS/SELECTION_BOX[WIDE].png",
      video: "/prod/h2k/HARD_TO_KILL[HOODIE]/Hard to Kill Tee H.mp4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // حالة التحكم في الفيديو

  // Function to move to the next product
  const nextProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative mt-14 py-20 px-24">
      <Image src={"/BG/07.png"} alt="bg" fill className="object-cover -z-10" />

      <div aria-label="container" className="grid grid-cols-3 items-center">
        {/* Text Container */}
        <div aria-label="text container">
          <div className="relative">
            <Image
              src={"/BG/PNG_4bars.png"}
              alt="bars"
              width={300}
              height={400}
            />
            <div className="absolute top-6 left-16">
              <Image
                src={"/prod/h2k-logo.png"}
                alt="logo"
                width={170}
                height={200}
              />
            </div>
          </div>
          <div className="mt-20 w-64">
            <h1 className={`${handjet.className} text-8xl text-white pb-12`}>
              TOP- RATED
            </h1>
            <h2 className="text-white text-xl uppercase pb-5">
              Community favorites – shop now to secure your picks before they’re
              gone.
            </h2>
            <Image
              src={"/SELECTION_ASSETS/SHOP NOW.png"}
              alt="shop logo"
              width={300}
              height={400}
              className="-ml-6"
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          {/* Main Product Section */}
          <motion.div
            aria-label="main product"
            className="mt-10 "
            key={currentIndex} // Key to trigger animation on index change
            initial={{ opacity: 0, x: 100 }} // Initial position
            animate={{ opacity: 1, x: 0 }} // Animate to visible position
            exit={{ opacity: 0, x: -100 }} // Exit animation
            transition={{ duration: 0.5 }} // Duration of the animation
          >
            <div className="flex flex-col gap-20 items-center">
              <div
                className="relative mt-24 overflow-clip w-[350px] h-[500px]"
                onMouseEnter={() => setIsHovered(true)} // إظهار الفيديو عند التمرير
                onMouseLeave={() => setIsHovered(false)} // إخفاء الفيديو عند الخروج
              >
                {/* Product Image */}
                <div
                  className={`absolute -top-0 w-[550px] -left-28 transition-opacity duration-500 ${
                    isHovered ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <Image
                    src={products[currentIndex].image}
                    alt="main-product"
                    width={600}
                    height={300}
                  />
                </div>

                {/* Video - Shows on Hover */}
                <div
                  className={`-z-10 absolute top-0 w-[540px] -left-28 transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <ReactPlayer
                    url={products[currentIndex].video}
                    playing={isHovered}
                    muted
                    loop
                    width={540}
                    height={"100%"}
                  />
                </div>
              </div>

              {/* Frame */}
              <div className="-z-10 w-[580px] h-[600px] absolute top-0 -left-[115px]">
                <img
                  src={"/SELECTION_ASSETS/SELECTION_BOX[WIDE].png"}
                  alt="frame"
                  className="w-[580px] h-[700px]"
                />
              </div>

              {/* Product Info */}
              <div
                aria-label="product-info"
                className="flex flex-col items-center gap-2 -mt-10"
              >
                <span className="text-red-700 tracking-widest">N E W</span>
                <h1 className={`${handjet.className} text-white text-4xl`}>
                  {products[currentIndex].name}
                </h1>
                <span className={`text-red-700 ${handjet.className} text-4xl`}>
                  {products[currentIndex].price}
                </span>
              </div>
            </div>
          </motion.div>
          {/* Next Button */}
          <button
            aria-label="next-btn"
            className="-mt-10 z-20 cursor-pointer"
            onClick={nextProduct}
          >
            <img
              src="/SELECTION_ASSETS/NEXT.png"
              width={70}
              alt="next-button"
            />
          </button>
        </div>
        {/* Next Product (Blurred Preview) */}
        <div aria-label="next product" className="pl-16">
          <div className="blur-sm relative mt-24 overflow-clip w-[300px] h-[400px]">
            <div className="w-[580px] -top-32 absolute -left-36">
              <Image
                src={products[(currentIndex + 1) % products.length].image}
                alt="next-product"
                width={600}
                height={300}
              />
            </div>
          </div>
          <div className="blur-sm w-[500px] h-[550px] absolute top-[235px] right-[75px]">
            <img
              src={"/SELECTION_ASSETS/SELECTION_BOX[WIDE].png"}
              alt="frame"
              className="w-[500px] h-[550px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
