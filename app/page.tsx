import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HomeSec from "@/components/home-sec";
import Product1 from "@/components/product1";
import Product2 from "@/components/product2";
import Product3 from "@/components/product3";
import Product4 from "@/components/product4";
import Testimonials from "@/components/testimonials";
import TopG from "@/components/topg";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeSec />
      <Product1 />
      <Product2 />
      <Product3 />
      <Product4 />
      <TopG />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
