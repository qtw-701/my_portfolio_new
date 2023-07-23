import React, { useEffect, useRef, useState } from 'react';
import Skill from '../components/Skill';
import skill from '../data/skill.json';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function SkillsSection({ id, scroll, sectionClass }) {
  const [check, setCheck] = useState(false);
  const skillData = skill.skill;
  const ref = useRef(null);
  const isIntersecting = useIntersectionObserver(ref);
  useEffect(() => {
    if (isIntersecting) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [isIntersecting]);
  return (
    <section id={id} ref={scroll} className={`${sectionClass}`}>
      <h1 className="font-bold text-3xl font-hangul px-10 m-4 text-center">
        이런 것을 할 수 있어요.
      </h1>
      <ul
        ref={ref}
        className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-1 mx-auto"
      >
        {skillData &&
          skillData.map((data, i) => (
            <Skill
              key={i}
              imgURL={data.imgURL}
              title={data.title}
              description={data.description}
              percentage={data.percentage}
              isInter={check}
            />
          ))}
      </ul>
    </section>
  );
}
