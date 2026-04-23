import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Section1 from "@/components/Hero/Section1/Section1";
import Section2 from "@/components/Hero/Section2/Section2";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Section1></Section1>
      <Section2></Section2>
    </div>
  );
}
