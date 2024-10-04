"use client";
import { Handjet } from "next/font/google";
import { motion } from "framer-motion"; // استيراد Framer Motion

const handjet = Handjet({
  weight: ["500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Header() {
  return (
    <div className="relative overflow-hidden bg-gray-100">
      <motion.div
        className={`${handjet.className} text-2xl px-5 h-10 flex items-center justify-between uppercase text-black`}
        initial={{ x: "-100%" }} // بداية الحركة من اليمين
        animate={{ x: "100%" }} // الحركة نحو اليسار
        transition={{
          duration: 15, // مدة الحركة
          ease: "linear", // نوع الحركة
          repeat: Infinity, // تكرار الحركة بشكل لا نهائي
        }}
      >
        <h1 className="font-normal">
          TYPE IN <span className="font-extrabold">“LUCKYLUC”</span>{" "}
          <span className="font-bold">AT CHECKOUT</span> AND YOU MIGHT JUST GET
          LUCKY..
        </h1>
        <span className="font-extrabold">-</span>
        <h1>
          EXCLUSIVELY <span className="font-bold">AT WWW.TOPG.COM</span>
        </h1>
        <span className="font-extrabold">-</span>
        <h1 className="flex items-center">
          <img
            src="/SELECTION_ASSETS/01.png"
            alt="truck-logo"
            width={150}
            className="-mr-12"
          />
          FREE DELIVERY FOR ANY ORDERS OVER $100
        </h1>
      </motion.div>
    </div>
  );
}
