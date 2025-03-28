import { Button } from "@/components/ui/button";
import React from "react";
import basicInfo from "@/constants/basicInfo";
import { IoDocumentText } from "react-icons/io5";

const ResumeButton = () => {
  return (
    <a
      href={basicInfo.resumeUrl}
      target="_blank"
      rel="noreferrer noopener"
      className="no-underline"
    >
      <Button
        className={`group flex w-32 cursor-pointer items-center rounded-4xl ring-1 sm:w-32`}
        variant={"ghost"}
      >
        <IoDocumentText className="mr-2 text-xl" />
        <span className="text-sm font-bold">Resume</span>
      </Button>
    </a>
  );
};

export default ResumeButton;
