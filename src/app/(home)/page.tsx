import React from "react";
import Description from "./components/Description";
import { LuChevronDown } from "react-icons/lu";

const Home = () => {
  return (
    <main className="container mx-auto my-auto flex flex-col">
      <section className="flex h-screen w-full flex-col items-center justify-center">
        <Description />
        <LuChevronDown className="animate-bounce pb-2 text-4xl" />
      </section>
    </main>
  );
};

export default Home;
