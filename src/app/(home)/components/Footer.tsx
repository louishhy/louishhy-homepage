import React from "react";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="flex items-center justify-center font-mono text-xs sm:text-sm">
      Built with&nbsp;
      <a
        className="font-bold underline decoration-blue-500"
        href="https://nextjs.org"
        target="_blank"
        rel="noreferrer"
      >
        <RiNextjsFill />
      </a>
      &nbsp;and&nbsp;
      <a
        className="font-bold underline decoration-blue-500"
        href="https://tailwindcss.com"
        target="_blank"
        rel="noreferrer"
      >
        <RiTailwindCssFill />
      </a>
      .
    </div>
  );
};

export default Footer;
