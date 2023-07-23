import React from 'react';

export default function About({ year, imgURL, title, description }) {
  return (
    <li className="about flex flex-col items-center w-60 max-md:flex-row max-md:w-auto">
      <p className="ml-2 text-xl">{year}</p>
      {imgURL && (
        <div className="flex flex-col items-center text-center max-md:text-left max-md:flex-row gap-2 m-2 p-2 bg-gray-500 bg-opacity-50 rounded-md">
          <img className="block w-20" src={imgURL} alt={title} />
          <div className="font-hangul">
            <p className="text-lg font-bold">{title}</p>
            <p className="text-sm text-gray-300">{description}</p>
          </div>
        </div>
      )}
      {!imgURL && (
        <p className="text-lg font-bold m-2 p-7 bg-black bg-opacity-50 rounded-md">
          {title}
        </p>
      )}
    </li>
  );
}
