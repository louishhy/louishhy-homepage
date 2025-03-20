import React from "react";
import AvatarPanel from "./AvatarPanel";
import SummaryPanel from "./SummaryPanel";

const Description = () => {
  return (
    <div className="flex h-full w-full">
      <div className="h-full w-2/5">
        <AvatarPanel />
      </div>

      <div className="flex h-full w-3/5 flex-col items-center justify-center">
        <SummaryPanel />
      </div>
    </div>
  );
};

export default Description;
