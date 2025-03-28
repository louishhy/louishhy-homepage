import React from "react";
import Typewriter from "typewriter-effect";

const GreetingTypewriter = () => {
  return (
    <Typewriter
      options={{
        delay: 50,
        cursor: "▌",
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Nice to meet you! ")
          .pauseFor(300)
          .typeString(":")
          .pauseFor(300)
          .typeString(")")
          .pauseFor(500)
          .start();
      }}
    />
  );
};

export default GreetingTypewriter;
