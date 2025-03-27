import React from "react";
import ResumeItem, { ResumeItemProps } from "./ResumeItem";

interface ResumeSectionProps {
  sectionTitle: string;
  resumeItems: ResumeItemProps[];
}

const ResumeSection = (props: ResumeSectionProps) => {
  return (
    <div>
      <h3 className="text-3xl font-bold">{props.sectionTitle}</h3>
      <div className={`mt-6 flex flex-col gap-8`}>
        {props.resumeItems.map((item) => (
          <ResumeItem key={item.itemId} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ResumeSection;
