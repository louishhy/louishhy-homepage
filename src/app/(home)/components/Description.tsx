import React from "react";
import AvatarPanel from "./AvatarPanel";
import SummaryPanel from "./SummaryPanel";

const Description = () => {
  return (
    <div className="flex h-full w-full flex-1 flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
      <div>
        <AvatarPanel />
      </div>

      <div>
        <SummaryPanel />
      </div>
    </div>
  );
};

export default Description;
