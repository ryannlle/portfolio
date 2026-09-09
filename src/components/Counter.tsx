"use client";

import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface CounterProps {
  target: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  commas?: boolean;
}

export default function Counter({
  target,
  decimals = 0,
  suffix = "",
  prefix = "",
  duration = 2,
  commas = false,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  // Start at the final value so the number is correct on first paint and even
  // if the in-view animation never fires (e.g. observer misses a fast scroll).
  const [count, setCount] = useState(target);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const totalFrames = Math.round(duration * 60);
    let frame = 0;
    setCount(0);

    const timer = setInterval(() => {
      frame++;
      if (frame >= totalFrames) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount((target / totalFrames) * frame);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  const formatted =
    decimals > 0
      ? count.toFixed(decimals)
      : commas
        ? Math.floor(count).toLocaleString()
        : Math.floor(count).toString();

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
