import React from "react";
import Description from "./components/Description";
import { LuChevronDown } from "react-icons/lu";
import ResumeSection from "./components/ResumeSection";
import education from "@/constants/education";
import TypingIntroOverlay from "./components/TypingIntroOverlay";
import ScrollDisappearChevronDown from "./components/ScrollDisappearChevronDown";
import experience from "@/constants/experience";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <main className="container mx-auto my-auto flex flex-col items-center">
      <section className="flex h-screen w-full flex-col items-center justify-center px-4">
        <Description />
        <ScrollDisappearChevronDown className="hidden sm:block" />
      </section>

      <section className="mt-8 flex w-full max-w-prose flex-col items-start justify-around px-8 sm:w-2/3">
        <ResumeSection sectionTitle="Education" resumeItems={education} />
      </section>

      <section className="mt-16 flex w-full max-w-prose flex-col items-start justify-around px-8 sm:w-2/3">
        <ResumeSection sectionTitle="Experience" resumeItems={experience} />
      </section>

      <footer className="mt-32 mb-8">
        <Footer />
      </footer>
    </main>
  );
};

export default Home;
