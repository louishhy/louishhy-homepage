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
        <Image
          className="aspect-square overflow-hidden rounded-2xl border-2 object-cover"
          src={props.orgIconSrc}
          alt=""
          width={50}
          height={50}
        />
      )}

      <div className="flex flex-col">
        <p className="text-lg font-bold">{props.positionTitle}</p>
        <p className="text-md">{props.orgName}</p>
        <p className="text-sm">{props.timespan}</p>
        <p className="mt-4 text-sm whitespace-pre-line">{props.description}</p>
      </div>
    </div>
  );
};

export default ResumeItem;
