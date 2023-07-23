import React from 'react';
import ProgressCircle from './ProgressCircle';

export default function Skill({
  imgURL,
  title,
  description,
  percentage,
  isInter,
}) {
  return (
    <li className="flex flex-col items-center">
      <ProgressCircle
        percentage={percentage}
        circleWidth={'208'}
        imgURL={imgURL}
        isInter={isInter}
      />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="w-3/4 font-hangul">{description}</p>
    </li>
  );
}
