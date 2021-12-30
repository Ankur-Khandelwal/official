import React from "react";
import "./css/Pie.css"
import BlueRoundIcon from "./BlueRoundIcon"
const cleanPercentage = (percentage) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ colour, pct }) => {
  const r = 30;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
      strokeWidth={"0.3rem"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
      
    ></circle>
  );
};

const Text = ({ percentage }) => {
  return (
    <text
      x="50%"
      y="45%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={"1.3em"}
      fontFamily="Bebas Neue"
      color ="#0000"
    >
      {percentage.toFixed(0)}%
    </text>
    // <p style={{fontSize:"1.3rem",x:"50%",y:"45%",dominantBaseline:"central",textAnchor:"middle"}}>
    //     {percentage.toFixed(0)}%
    // </p>
  );
};

const Pie = ({ percentage, colour }) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={200} height={200}>
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle colour="lightgrey" />
        <Circle colour={colour} pct={pct} />
      </g>
      
      {/* <Text className="textColor" percentage={pct} /> */}
      
    </svg>
  );
};

export default Pie;
