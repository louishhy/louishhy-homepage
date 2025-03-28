"use client";

import React, { useState, useEffect } from "react";
import { LuChevronDown } from "react-icons/lu";
import { cn } from "@/lib/utils";

interface ScrollDisappearChevronDownProps {
  scrollThresh?: number;
  className?: string;
}

const ScrollDisappearChevronDown: React.FC<ScrollDisappearChevronDownProps> = ({
  scrollThresh = 100,
  className = "animate-bounce pb-2 text-4xl",
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition < scrollThresh);
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThresh]);

  if (!isVisible) return null;

  return (
    <LuChevronDown className={cn(className, "animate-bounce pb-2 text-4xl")} />
  );
};

export default ScrollDisappearChevronDown;
