import React from "react";
import PieChartWithPaddingAngle from "@/components/PieChart/PieChart";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid gap-10">
        <div className="text-3xl font-bold text-center mt-5">
          Friendship Analytics
        </div>
        <div className="flex justify-center items-center">
          <PieChartWithPaddingAngle></PieChartWithPaddingAngle>
        </div>
      </div>
      <div className="flex justify-center items-center gap-10 mt-10">
        <div>
          <button className="btn bg-[#FFBB28] max-w-2"></button>
          <span className="ml-3 text-xl font-bold">Video</span>
        </div>
        <div>
          <button className="btn bg-[#0088FE] max-w-2"></button>
          <span className="ml-3 text-xl font-bold">Call</span>
        </div>
        <div>
          <button className="btn bg-[#00C49F] max-w-2"></button>
          <span className="ml-3 text-xl font-bold">Text</span>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default page;
