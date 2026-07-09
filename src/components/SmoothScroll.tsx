"use client";

import { useEffect } from "react";
import Lenis from "lenis";

declare global {
  interface Window {
    __yavixLenis?: Lenis;
  }
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    window.__yavixLenis?.destroy();

    window.__yavixLenis = new Lenis({
      duration: isTouchDevice ? 1.05 : 1.35,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      orientation: "vertical",
      gestureOrientation: "vertical",
      autoRaf: true,
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: isTouchDevice ? 0.09 : 0.045,
      touchInertiaExponent: isTouchDevice ? 1.45 : 1.15,
      wheelMultiplier: 1,
      touchMultiplier: isTouchDevice ? 1.15 : 0.8,
      infinite: false,
      anchors: {
        offset: -96,
      },
      allowNestedScroll: true,
      prevent: (node) =>
        node.closest(
          "[data-lenis-prevent], [data-lenis-prevent-wheel], [data-lenis-prevent-touch]"
        ) !== null,
    });

    return () => {
      window.__yavixLenis?.destroy();
      window.__yavixLenis = undefined;
    };
  }, []);

  return <>{children}</>;
}
