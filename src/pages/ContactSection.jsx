import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';

export default function ContactSection({ id, scroll, sectionClass }) {
  return (
    <section
      id={id}
      ref={scroll}
      className={`${sectionClass} h-80 bg-contact bg-center bg-no-repeat bg-cover flex flex-col justify-center gap-4`}
    >
      <h1 className="font-bold text-3xl font-hangul text-center">
        감사합니다. 연락주세요.
      </h1>
      <div className="flex flex-col items-center gap-4">
        <p className="text-4xl">qkrthwjd701@naver.com</p>
        <p className="text-4xl">qkrthwjd95@gmail.com</p>
        <div className="flex items-center gap-4">
          <AiFillGithub className="text-7xl cursor-pointer hover:text-grorange transition" />
          <BsFillFileEarmarkPersonFill className="text-7xl cursor-pointer hover:text-grorange transition" />
        </div>
      </div>
    </section>
  );
}
