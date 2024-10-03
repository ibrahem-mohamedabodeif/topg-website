import Image from "next/image";
import Header from "./header";
import { Handjet } from "next/font/google";
const handjet = Handjet({
  weight: ["500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export default function Product2() {
  return (
    <>
      <Header />
      <div className="relative">
        <Image src="/BG/06.png" alt="bg" className="object-center -z-10" fill />
        <div className="flex justify-center items-center gap-52 pt-72">
          <div className="relative flex flex-col items-center">
            <div className="hover:scale-105 duration-200 ease-in-out">
              <img
                src="/SELECTION_ASSETS/SELECTION_BOX[MAIN].png"
                width={300}
                className="object-cover -z-10"
              />
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[500px] h-96">
                <Image
                  src="/prod/fireblood/FIREBLOOD2JARSTRANSPARENT.png"
                  fill
                  alt="product"
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 w-96">
              <h1
                className={`${handjet.className} text-white text-4xl tracking-wider`}
              >
                FIREBLOOD
              </h1>
              <span className="text-white text-xs uppercase text-center tracking-wider">
                Crafted for those who dare to endure hardship on their path to
                unparalleled strength and vitality.
              </span>
              <img src="/SELECTION_ASSETS/VISIT WEBSITE.png" width={200} />
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="hover:scale-105 duration-200 ease-in-out">
              <img
                src="/SELECTION_ASSETS/SELECTION_BOX[MAIN].png"
                width={300}
                className="object-cover -z-10"
              />
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-64 h-80">
                <Image src="/prod/G/G.png" fill alt="product" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 w-96">
              <h1
                className={`${handjet.className} text-white text-4xl tracking-wider`}
              >
                G-OFFEE
              </h1>
              <span className="text-white text-xs uppercase text-center tracking-wider">
                A brew for the bold, the brave, & the fearless. Every sip is a
                charge of pure grit, arming you with the energy to dominate your
                destiny.
              </span>
              <img src="/SELECTION_ASSETS/VISIT WEBSITE.png" width={200} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
