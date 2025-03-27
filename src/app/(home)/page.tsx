import React from "react";
import Description from "./components/Description";
import { LuChevronDown } from "react-icons/lu";
import ResumeSection from "./components/ResumeSection";
import education from "@/constants/education";
import TypingIntroOverlay from "./components/TypingIntroOverlay";

const Home = () => {
  return (
    <main className="container mx-auto my-auto flex flex-col">
      <TypingIntroOverlay />
      <section className="flex h-screen w-full flex-col items-center justify-center px-4">
        <Description />
        <LuChevronDown className="hidden animate-bounce pb-2 text-4xl md:block" />
      </section>

      <section className="flex flex-col items-center justify-around py-8">
        <ResumeSection sectionTitle="Education" resumeItems={education} />
      </section>
    </main>
  );
};

export default Home;
