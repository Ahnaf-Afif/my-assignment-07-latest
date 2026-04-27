import React from "react";
import TimelineBox from "@/components/TimelineBox/TimelineBox";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const page = () => {
  return (
    <div className="grid gap-10">
      <Navbar />
      <TimelineBox></TimelineBox>
      <Footer />
    </div>
  );
};

export default page;
