import React from 'react';

export default function ProgressCircle({
  percentage,
  circleWidth,
  imgURL,
  isInter,
}) {
  let percent = isInter ? percentage : 0;
  const radius = 85;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percent) / 100;
  return (
    <div className="w-52 relative">
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth={'15px'}
          r={radius}
          className="fill-none stroke-slate-50"
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth={'15px'}
          r={radius}
          className=" fill-none stroke-grorange circle-progress"
          style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
        />
        {/* <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          className="text-xl"
        >
          {percent}%
        </text> */}
      </svg>
      <img
        src={imgURL}
        alt="img"
        className="block w-52 h-52 absolute top-0 left-0"
      />
    </div>
  );
}
