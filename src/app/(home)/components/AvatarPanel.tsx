import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";
import Image from "next/image";
import avatarImg from "@/app/(home)/assets/avatar.jpg";
import basicInfo from "@/constants/basicInfo";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

const AvatarPanel = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      {/* Avatar Image */}
      <Avatar className="size-25 ring-2 md:size-50">
        <AvatarImage asChild src="avatar.jpg">
          <Image src={avatarImg} alt="avatar" fill priority />
        </AvatarImage>
        <AvatarFallback>LH</AvatarFallback>
      </Avatar>

      {/* Name and link section */}
      <div className="mt-4 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">{basicInfo.name}</h1>
        <p className="text-gray-700">{basicInfo.localName}</p>

        {/* Social media links */}
        <div className="mt-2 flex w-1/2 items-center justify-around">
          <a
            href={basicInfo.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            <LuGithub className="text-xl" />
          </a>
          <a
            href={basicInfo.linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            <LuLinkedin className="text-xl" />
          </a>
          <a href={`mailto:${basicInfo.email}`}>
            <LuMail className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AvatarPanel;
