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

    window.__yavixLenis?.destroy();

    window.__yavixLenis = new Lenis({
      lerp: 0.05,
      orientation: "vertical",
      gestureOrientation: "vertical",
      autoRaf: true,
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.05,
      touchMultiplier: 1.8,
      wheelMultiplier: 1.1,
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
