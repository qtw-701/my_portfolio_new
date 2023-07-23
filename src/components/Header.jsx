import React, { useState } from 'react';
import { BsFillMoonFill } from 'react-icons/bs';
import Button from './Button';
import { useNavigateContext } from '../context/NavigateContext';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header() {
  const { homeRef, aboutRef, skillsRef, projectsRef, contactRef } =
    useNavigateContext();
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleClick = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
    setToggle(false);
  };
  return (
    <header className=" w-full flex justify-between items-center p-3.5 fixed bg-black bg-opacity-50 z-50 shadow-md">
      <a className="flex items-center gap-1" href="/">
        <BsFillMoonFill className="text-xl text-yellow-500" />
        <h1 className="text-3xl font-bold">Sojung</h1>
      </a>
      <button className="hidden max-md:block" onClick={handleToggle}>
        <GiHamburgerMenu className="text-xl" />
      </button>
      <nav
        className={`flex items-center gap-2 text-lg max-md:flex-col max-md:bg-black max-md:bg-opacity-50 max-md:absolute max-md:top-16 max-md:left-0 max-md:gap-0 max-md:w-full ${
          toggle ? `max-md:block` : `max-md:hidden`
        }`}
      >
        <Button text={'Home'} id="home" onClick={() => handleClick(homeRef)} />
        <Button
          text={'About me'}
          id="about"
          onClick={() => handleClick(aboutRef)}
        />
        <Button
          text={'Skills'}
          id="skills"
          onClick={() => handleClick(skillsRef)}
        />
        <Button
          text={'My work'}
          id="projects"
          onClick={() => handleClick(projectsRef)}
        />
        <Button
          text={'Contact me'}
          id="contact"
          onClick={() => handleClick(contactRef)}
        />
      </nav>
    </header>
  );
}
