import React from "react";
import AvatarPanel from "./AvatarPanel";
import SummaryPanel from "./SummaryPanel";

const Description = () => {
  return (
    <div className="flex w-full flex-col md:h-full md:flex-row">
      <div className="md:h-full md:w-2/5">
        <AvatarPanel />
      </div>

      <div className="flex flex-col items-center justify-center md:h-full md:w-3/5">
        <SummaryPanel />
      </div>
    </div>
  );
};

export default Description;
