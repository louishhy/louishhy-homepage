import React from "react";

const SummaryPanel = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-around border-l-2">
      <div className="mx-6 flex flex-col justify-between">
        <p className="text-2xl font-bold">Hi!👋</p>
        <p className="mt-6">
          I am currently a master student at{" "}
          <a
            className={`font-bold underline decoration-blue-400`}
            href="https://www.ut-vision.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Yoichi Sato lab
          </a>{" "}
          in The University of Tokyo.
        </p>
        <p className="mt-6">
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
          .
        </p>
      </div>
    </div>
  );
};

export default SummaryPanel;
