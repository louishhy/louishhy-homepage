import React from "react";
import BlogButton from "./BlogButton";

const SummaryPanel = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center py-8 md:border-l-2">
      {/* Description part */}
      <div className="mx-6 flex flex-col justify-between">
        <p className="max-w-prose text-2xl font-bold">Hi!👋</p>
        <p className="mt-6 max-w-prose">
          I am currently a master student at{" "}
          <a
            className={`font-bold underline decoration-blue-400`}
            href="https://www.ut-vision.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Yoichi Sato lab
          </a>{" "}
          in The University of Tokyo. My research topic is deep learning and
          egocentric computer vision.
        </p>
        <p className="mt-6 max-w-prose">
          Before joining UTokyo, I received a B.Eng. degree in Computer Science
          in The University of Hong Kong and was a research assistant at{" "}
          <a
            className={`font-bold underline decoration-blue-400`}
            href="https://aiot.hku.hk/"
            target="_blank"
            rel="noreferrer noopener"
          >
            HKU Artificial Intelligence of Things Lab
          </a>
          , where I conducted research on gesture interaction systems.
        </p>
      </div>

      {/* Link buttons */}
      <div className="mt-12">
        <BlogButton />
      </div>
    </div>
  );
};

export default SummaryPanel;
