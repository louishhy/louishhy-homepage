import { Button } from "@/components/ui/button";
import React from "react";
import basicInfo from "@/constants/basicInfo";
import { FaBlog } from "react-icons/fa6";

const BlogButton = () => {
  return (
    <a
      href={basicInfo.blogUrl}
      target="_blank"
      rel="noreferrer noopener"
      className="no-underline"
    >
      <Button
        className={`group flex w-32 cursor-pointer items-center rounded-4xl ring-1 sm:w-32`}
        variant={"ghost"}
      >
        <FaBlog className="mr-2 text-xl" />
        <span className="text-sm font-bold">Blog</span>
      </Button>
    </a>
  );
};

export default BlogButton;
