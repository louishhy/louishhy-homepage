import React from "react";
import AvatarPanel from "./AvatarPanel";
import SummaryPanel from "./SummaryPanel";

const Description = () => {
  return (
    <div className="flex h-full w-full flex-1 flex-col items-center justify-center md:flex-row md:gap-8">
      <div>
        <AvatarPanel />
      </div>

      <div className="mt-8">
        <SummaryPanel />
      </div>
    </div>
  );
};

export default Description;
