import Image from "next/image";
import { Handjet } from "next/font/google";
import { Pacifico } from "next/font/google";
const handjet = Handjet({
  weight: ["500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const pacifico = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
});

export default function TopG() {
  return (
    <div className="relative py-14 px-28">
      <h1
        className={`${pacifico.className} text-white text-center text-7xl pb-20 `}
      >
        Endless Influence
      </h1>
      <Image src="/BG/03.png" alt="bg" fill className="object-cover -z-10" />
      <div className="relative flex justify-between items-center mx-5">
        <div className="flex items-center">
          <div className=" flex flex-col items-start gap-y-5">
            <div className="w-80 flex flex-col gap-5">
              <h1
                className={`${handjet.className} text-white text-8xl tracking-wider`}
              >
                DNG COMICS
              </h1>
              <span className="text-white uppercase text-sm">
                As the world teeters on the brink of chaos,..{" "}
              </span>
              <span className="text-white uppercase text-sm">
                Top G clashes with the forces of tyranny in the darkest depths
                of his own mind.{" "}
              </span>
            </div>
            <div className="flex relative -left-14">
              <img src="/SELECTION_ASSETS/SHOP DNG.png" width={350} />
            </div>
            <div className="flex items-center mt-10">
              <img src="/SELECTION_ASSETS/STARS.png" width={150} alt="Stars" />
              <span className="text-white">
                Marked by +80,000 as the &quot;Fan’s Favorite&quot; .
              </span>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/SELECTION_ASSETS/smoke left.png"
        width={500}
        className="absolute -top-96 left-0 opacity-55"
      />
      <img
        src="/SELECTION_ASSETS/fade.png"
        width={"100%"}
        className="absolute -top-48 right-0 -z-10"
      />
    </div>
  );
}
