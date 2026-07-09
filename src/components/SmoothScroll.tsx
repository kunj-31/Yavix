"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.35,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      orientation: "vertical",
      gestureOrientation: "vertical",
      autoRaf: true,
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.045,
      touchInertiaExponent: 1.15,
      wheelMultiplier: 1,
      touchMultiplier: 0.8,
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
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
