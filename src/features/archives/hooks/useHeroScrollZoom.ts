import { useEffect, useState } from 'react';

export function useHeroScrollZoom() {
  const [zoom, setZoom] = useState(1);
  const [fade, setFade] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const progress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
      setZoom(1 + progress * 0.18);
      setFade(progress);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { zoom, fade };
}
