import React, { useState, useEffect, useRef } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  highlight?: { word: string; className: string };
  onComplete?: () => void;
}

export default function Typewriter({
  text,
  speed = 50,
  delay = 0,
  className = '',
  highlight,
  onComplete,
}: TypewriterProps) {
  const [charIndex, setCharIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const completedRef = useRef(false);
  const done = started && charIndex >= text.length;

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started || charIndex >= text.length) return;

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + 1);
    }, speed);
    return () => clearTimeout(timeout);
  }, [charIndex, started, text, speed]);

  useEffect(() => {
    if (done && !completedRef.current) {
      completedRef.current = true;
      onComplete?.();
    }
  }, [done, onComplete]);

  // Render each character individually, making untyped ones transparent
  const renderText = () => {
    const chars = text.split('');

    if (highlight) {
      const hlStart = text.indexOf(highlight.word);
      if (hlStart !== -1) {
        const hlEnd = hlStart + highlight.word.length;
        return chars.map((char, i) => {
          const isTyped = i < charIndex;
          const isHighlight = i >= hlStart && i < hlEnd;
          const style: React.CSSProperties = isTyped
            ? {}
            : { color: 'transparent' };

          if (isHighlight) {
            return (
              <span key={i} className={highlight.className} style={style}>
                {char}
              </span>
            );
          }
          return (
            <span key={i} style={style}>
              {char}
            </span>
          );
        });
      }
    }

    return chars.map((char, i) => (
      <span
        key={i}
        style={i < charIndex ? {} : { color: 'transparent' }}
      >
        {char}
      </span>
    ));
  };

  return (
    <span className={className} style={{ display: 'inline' }}>
      {renderText()}
    </span>
  );
}
