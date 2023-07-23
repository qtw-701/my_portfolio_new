import React, { useEffect, useRef } from 'react';
import about from '../data/about.json';
import keyword from '../data/keyword.json';
import About from '../components/About';
import { v4 as uuid } from 'uuid';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function AboutSection({ id, scroll, sectionClass }) {
  const aboutData = about.about;
  const keywordData = keyword.keyword;
  const ref = useRef(null);
  const isIntersecting = useIntersectionObserver(ref);
  useEffect(() => {
    const animNode = ref.current;
    const abouts = animNode.querySelectorAll('.about');
    if (isIntersecting) {
      abouts.forEach((about) => {
        about.classList.remove('about-anim-out');
        about.classList.add('about-anim-in');
      });
    } else {
      abouts.forEach((about) => {
        about.classList.remove('about-anim-in');
        about.classList.add('about-anim-out');
      });
    }
  }, [isIntersecting]);

  return (
    <section id={id} ref={scroll} className={`${sectionClass} h-auto px-10`}>
      <h1 className="font-bold text-3xl font-hangul m-4 mb-12 text-center">
        저의 인생.
      </h1>
      <ul className="flex justify-around">
        {keywordData &&
          keywordData.map((data) => (
            <li className="p-4 mb-4 rounded-md text-2xl">#{data.text}</li>
          ))}
      </ul>
      <ul
        className="flex items-start justify-around gap-2 border-t mx-auto overflow-hidden transition max-md:border-l max-md:border-t-0 max-md:flex-col max-md:w-full"
        ref={ref}
      >
        {aboutData &&
          aboutData.map((data) => (
            <About
              key={uuid()}
              year={data.year}
              imgURL={data.imgURL}
              title={data.title}
              description={data.description}
            />
          ))}
      </ul>
    </section>
  );
}
