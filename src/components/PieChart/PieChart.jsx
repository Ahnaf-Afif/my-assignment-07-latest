"use client";

import { Pie, PieChart } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import { useContext, useState } from "react";
import { MsgData } from "@/context/context";

// #endregion

export default function PieChartWithPaddingAngle({ isAnimationActive = true }) {
  const { message } = useContext(MsgData);
  const totalCalls = message.filter((item) => item.type === "Call").length;
  const totalTexts = message.filter((item) => item.type === "Text").length;
  const totalVideos = message.filter((item) => item.type === "Video").length;
  const total = message.length;

  const data = [
    { name: "Calls", value: totalCalls, fill: "#0088FE" },
    { name: "Texts", value: totalTexts, fill: "#00C49F" },
    { name: "Videos", value: totalVideos, fill: "#FFBB28" },
  ];
  return (
    <PieChart
      style={{
        width: "100%",
        maxWidth: "300px",
        maxHeight: "80vh",
        aspectRatio: 1,
      }}
      responsive
    >
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={isAnimationActive}
      />
      <RechartsDevtools />
    </PieChart>
  );
}
