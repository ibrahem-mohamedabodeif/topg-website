import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="relative h-screen">
      <Image src="/BG/04.png" alt="bg" fill className="object-cover -z-10" />
      <Image src="/BG/02.png" alt="image" fill className="object-contain" />
      <img
        src="/SELECTION_ASSETS/smoke left.png"
        width={300}
        className=" absolute -top-20 left-0 opacity-55"
      />
      <img
        src="/SELECTION_ASSETS/smoke right.png"
        width={400}
        className=" absolute bottom-0 right-0 opacity-50"
      />
      <img
        src="/SELECTION_ASSETS/fade.png"
        width={"100%"}
        className="absolute -top-40 right-0 -z-10"
      />
      <img
        src="/SELECTION_ASSETS/fade.png"
        width={"100%"}
        className="absolute -bottom-32 right-0 -z-10"
      />
    </div>
  );
}
