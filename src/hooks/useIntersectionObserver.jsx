import { useEffect, useState } from 'react';

export default function useIntersectionObserver(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const target = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    observer.observe(target, { threshold: 1.0 });
    return () => {
      observer.disconnect();
    };
  }, [ref]);
  return isIntersecting;
}
