import React from "react";
import Description from "./components/Description";

const Home = () => {
  return (
    <div className="container mx-auto my-auto flex flex-col items-center justify-center">
      <section className="flex w-full md:h-screen md:w-3/4">
        <Description />
      </section>
    </div>
  );
};

export default Home;
