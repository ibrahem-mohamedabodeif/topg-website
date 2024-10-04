import { Handjet } from "next/font/google";
import Image from "next/image";
const handjet = Handjet({
  weight: ["500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export default function Contact() {
  return (
    <div className="relative h-screen">
      <Image src="/BG/01.png" alt="bg" fill className="object-cover -z-10" />
      <div className="flex flex-col justify-center items-center pt-24">
        <div className="text-white text-center">
          <h2 className="text-sm pb-2">E S C A P E</h2>
          <h1 className={`${handjet.className} text-6xl pb-10`}>
            T H E <span className="pl-5"> M A T R I X</span>
          </h1>
          <p className="text-xl uppercase w-[600px]">
            AND Keep yourself in the know with the latest news and updates from
            TopG.
          </p>
        </div>
        <div className="flex flex-col items-center ">
          <div className="relative">
            <img
              src="/SELECTION_ASSETS/SELECTION[SUBMIT].png"
              width={600}
              className="-mt-48"
            />
            <span className="uppercase text-[#3e3e3e] text-xl absolute top-24 left-20">
              your e-mail address
            </span>
            <span
              className={`${handjet.className} text-black uppercase text-5xl absolute top-[84px] right-[68px]`}
            >
              join
            </span>
          </div>
          <h1 className="text-white text-sm -mt-52">
            BY SIGNING UP YOU AGREE TO OUR TERM AND CONDITIONS
          </h1>
        </div>
      </div>
    </div>
  );
}
