import React, { useRef } from 'react';

const IMAGE_CLASS = 'absolute home__anim opacity-80';
export default function HomeSection({ id, scroll, sectionClass }) {
  const moveRef = useRef(null);
  const handleMove = (e) => {
    const moveNode = moveRef.current;
    const imgNode = moveNode.querySelectorAll('.home__anim');
    imgNode.forEach((img) => {
      const speed = img.getAttribute('data-speed');
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;
      img.style.transform = `translate(${x}px, ${y}px)`;
    });
  };
  return (
    <section
      id={id}
      ref={scroll}
      className={`${sectionClass} h-screen p-0 px-10`}
    >
      <div
        className="w-full h-full relative flex justify-center items-center overflow-hidden"
        ref={moveRef}
        onPointerMove={(e) => handleMove(e)}
      >
        <h1
          className="absolute font-bold text-5xl font-hangul text-center home__anim z-30 max-sm:text-4xl"
          data-speed="2"
        >
          안녕하세요.
          <br />
          <br />
          박소정의 포트폴리오.
          <br />
          <br />
          환영합니다.
          <br />
          <br />
        </h1>
        <img
          className={`${IMAGE_CLASS}`}
          src="images/HTML5.png"
          alt="html5 logo"
          data-speed="3"
        />
        <img
          className={`${IMAGE_CLASS}`}
          src="images/CSS3.png"
          alt="css3 logo"
          data-speed="-3"
        />
        <img
          className={`${IMAGE_CLASS}`}
          src="images/Javascript.png"
          alt="javasript logo"
          data-speed="6"
        />
        <img
          className={`${IMAGE_CLASS}`}
          src="images/figma.png"
          alt="figma logo"
          data-speed="-2"
        />
        <img
          className={`${IMAGE_CLASS}`}
          src="images/react.png"
          alt="react logo"
          data-speed="6"
        />
        <img
          className={`${IMAGE_CLASS}`}
          src="images/tailwind.png"
          alt="tailwind logo"
          data-speed="-5"
        />
        <img
          className={`${IMAGE_CLASS}`}
          src="images/glitter_bg.png"
          alt="tailwind logo"
          data-speed="-0.5"
        />
      </div>
    </section>
  );
}
