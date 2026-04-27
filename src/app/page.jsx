import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Section1 from "@/components/Hero/Section1/Section1";
import Section2 from "@/components/Hero/Section2/Section2";
import Section3 from "@/components/Hero/Section3/Section3";
import Context from "@/context/context";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Footer />
    </div>
  );
}
