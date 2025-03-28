import React from "react";
import Image from "next/image";

export interface ResumeItemProps {
  itemId: string;
  orgIconSrc?: string;
  orgName: string;
  positionTitle: string;
  timespan: string;
  description: string;
}

const ResumeItem = (props: ResumeItemProps) => {
  return (
    <div className="flex flex-row items-start justify-start gap-4">
      {props.orgIconSrc && (
        <div className="relative h-[50px] w-[50px] flex-shrink-0">
          <Image
            className="rounded-2xl border-2 object-cover"
            src={props.orgIconSrc}
            alt={`${props.orgName} logo`}
            fill
            sizes="50px"
          />
        </div>
      )}

      <div className="flex flex-col">
        <p className="text-md font-bold sm:text-lg">{props.positionTitle}</p>
        <p className="sm:text-md text-sm">{props.orgName}</p>
        <p className="text-xs sm:text-sm">{props.timespan}</p>
        <p className="mt-4 text-sm whitespace-pre-line">{props.description}</p>
      </div>
    </div>
  );
};

export default ResumeItem;
