import React from "react";
import Description from "./components/Description";

const Home = () => {
  return (
    <div className="container mx-auto my-auto flex h-screen items-center justify-center">
      <div className="flex h-3/5 w-3/4">
        <Description />
      </div>
    </div>
  );
};

export default Home;
