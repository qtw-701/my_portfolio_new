import React from 'react';
import Work from '../components/Work';
import work from '../data/work.json';
import { v4 as uuid } from 'uuid';

export default function ProjectsSection({
  id,
  scroll,
  sectionClass,
  slideClass,
}) {
  const workData = work.work;
  return (
    <section id={id} ref={scroll} className={`${sectionClass} h-screen`}>
      <h1 className="font-bold text-3xl font-hangul px-10 mt-4 text-center">
        작은 프로젝트들.
      </h1>
      <div className={`${slideClass} translate-y-1/4`}>
        <ul className="flex animate-slide">
          {workData &&
            workData.map((data) => (
              <Work
                key={uuid()}
                title={data.title}
                info={data.info}
                imgURL={data.imgURL}
                linkURL={data.linkURL}
              />
            ))}
        </ul>
        <ul className="flex animate-slide">
          {workData &&
            workData.map((data) => (
              <Work
                key={uuid()}
                title={data.title}
                info={data.info}
                imgURL={data.imgURL}
                linkURL={data.linkURL}
              />
            ))}
        </ul>
      </div>
    </section>
  );
}
