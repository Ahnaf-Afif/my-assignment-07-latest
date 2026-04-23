import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Section1 from "@/components/Hero/Section1/Section1";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Section1></Section1>
    </div>
  );
}
