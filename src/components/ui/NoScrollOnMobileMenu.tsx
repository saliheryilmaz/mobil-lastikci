"use client";

import { useEffect } from "react";

export default function NoScrollOnMobileMenu({
  enabled,
}: {
  enabled: boolean;
}) {
  useEffect(() => {
    if (!enabled) return;

    const body = document.body;
    const prevOverflow = body.style.overflow;
    const prevPaddingRight = body.style.paddingRight;

    // iOS Safari / scrollbar jump düzeltmesi
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = "hidden";
    if (scrollBarWidth > 0) body.style.paddingRight = `${scrollBarWidth}px`;

    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPaddingRight;
    };
  }, [enabled]);

  return null;
}

