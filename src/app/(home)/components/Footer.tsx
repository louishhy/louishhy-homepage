import React from "react";

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
        Next.js
      </a>
      &nbsp;and&nbsp;
      <a
        className="font-bold underline decoration-blue-500"
        href="https://tailwindcss.com"
        target="_blank"
        rel="noreferrer"
      >
        Tailwind CSS
      </a>
      .
    </div>
  );
};

export default Footer;
