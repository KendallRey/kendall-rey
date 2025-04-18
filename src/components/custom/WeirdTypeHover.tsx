'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';

type WeirdTypeHoverProps = {
  text: string;
  hoverText: string;
  el: React.HTMLElementType;
  className?: string;
};

export const WeirdTypeHover: React.FC<WeirdTypeHoverProps> = (props) => {
  const { text, hoverText, el: Element, className } = props;
  const maxLen = useMemo(
    () => Math.max(text.length + 1, hoverText.length + 1),
    [text, hoverText],
  );
  const _hoverText = useRef(hoverText.padEnd(maxLen));
  const _text = useRef(text.padEnd(maxLen));
  const [hover, setHover] = useState(false);
  const [_displayText, _setDisplayText] = useState(text);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if ((hover && currentIndex >= maxLen - 1) || (!hover && currentIndex <= 0))
      return;
    const interval = setInterval(() => {
      const offset = hover ? +1 : -1;
      setCurrentIndex((prev) => Math.min(prev + offset, maxLen));
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [hover, maxLen, currentIndex]);

  useEffect(() => {
    const _formattedText =
      _hoverText.current.substring(0, currentIndex) +
      _text.current.substring(currentIndex, maxLen);
    _setDisplayText(_formattedText);
  }, [_text.current, _hoverText.current, currentIndex]);

  return (
    <Element
      onPointerEnter={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      className={className}
    >
      {_displayText}
    </Element>
  );
};
