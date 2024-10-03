import { Handjet } from "next/font/google";
const handjet = Handjet({
  weight: ["500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <div className="bg-white flex items-center justify-between uppercase px-60 py-5">
      <div className="flex flex-col">
        <h1 className={`${handjet.className} text-4xl font-extrabold pb-10`}>
          MY ACCOUNT
        </h1>
        <span className="text-sm">ORDERS</span>
        <span className="text-sm">ACCOUNT DETAILS</span>
      </div>
      <div className="flex flex-col">
        <h1 className={`${handjet.className} text-4xl font-extrabold pb-10`}>
          SITEMAP
        </h1>
        <span className="text-sm">SHOP</span>
        <span className="text-sm">MY ACCOUNT</span>
      </div>
      <div className="flex flex-col">
        <h1 className={`${handjet.className} text-4xl font-extrabold pb-10`}>
          LEGAL
        </h1>
        <span className="text-sm">REFUND POLICY</span>
        <span className="text-sm">PRIVACY POLICY</span>
      </div>
      <div className="flex flex-col">
        <h1 className={`${handjet.className} text-4xl font-extrabold pb-5`}>
          FOLLOW US ON
        </h1>
        <div className="flex items-center gap-2">
          <img src="/SELECTION_ASSETS/twitter.png" width={40} />
          <img src="/SELECTION_ASSETS/insta.png" width={60} />
        </div>
      </div>
      <div>
        <img src="/SELECTION_ASSETS/logo.png" width={180} className="-mt-4" />
      </div>
    </div>
  );
}
