import { createContext, useContext, useRef } from 'react';

const NavigateContext = createContext();

export function NavigateProvider({ children }) {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <NavigateContext.Provider
      value={{ homeRef, aboutRef, skillsRef, projectsRef, contactRef }}
    >
      {children}
    </NavigateContext.Provider>
  );
}

export function useNavigateContext() {
  return useContext(NavigateContext);
}
