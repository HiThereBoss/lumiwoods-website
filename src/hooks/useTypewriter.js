import { useState, useEffect } from 'react';

export default function useTypewriter(text, speed = 100) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let idx = 0;
    const timer = setInterval(() => {
      setDisplayed(text.slice(0, ++idx));
      if (idx === text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return displayed;
}