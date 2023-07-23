import React from 'react';

export default function Work({ imgURL, title, info, linkURL }) {
  return (
    <a href={linkURL}>
      <li className="w-80 text-center bg-slate-100 rounded-md text-black mx-5 py-5 group">
        <div className="overflow-hidden">
          <img
            className="block group-hover:scale-110 transition"
            src={imgURL}
            alt="ottogi redesign jQuery"
          />
        </div>
        <div className="font-hangul mt-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-gray-500">{info}</p>
        </div>
      </li>
    </a>
  );
}
