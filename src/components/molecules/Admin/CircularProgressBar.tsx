import React from "react";

interface CircularProgressProps {
  total: number;
  current: number; // active
  left: number; // inactive
  radius?: number;
  strokeWidth?: number;
  activeColor?: string;
  inactiveColor?: string;
  bgColor?: string;
}

const CircularProgressBar: React.FC<CircularProgressProps> = ({
  total,
  current,
  left,
  radius = 50,
  strokeWidth = 10,
  activeColor = "green",
  inactiveColor = "red",
  bgColor = "#EFF5FF",
}) => {
  const actualRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * actualRadius;

  // arc lengths
  const activeLength = (current / total) * circumference;
  const inactiveLength = (left / total) * circumference;

  return (
    <div
      style={{
        width: radius * 2,
        height: radius * 2,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width={radius * 2} height={radius * 2}>
        {/* Background circle */}
        <circle
          cx={radius}
          cy={radius}
          r={actualRadius}
          stroke={bgColor}
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Active (green) arc */}
        <circle
          cx={radius}
          cy={radius}
          r={actualRadius}
          stroke={activeColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={`${activeLength} ${circumference - activeLength}`}
          strokeDashoffset={0}
          strokeLinecap="round"
          transform={`rotate(-90 ${radius} ${radius})`}
        />

        {/* Inactive (red) arc */}
        <circle
          className="z-10"
          cx={radius}
          cy={radius}
          r={actualRadius}
          stroke={inactiveColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={`${inactiveLength} ${
            circumference - inactiveLength
          }`}
          strokeDashoffset={-activeLength}
          strokeLinecap="round"
          transform={`rotate(-90 ${radius} ${radius})`}
        />
      </svg>
    </div>
  );
};

export default CircularProgressBar;
