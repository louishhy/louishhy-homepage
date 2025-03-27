"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";

const TypingIntroOverlay = () => {
  const [showIntro, setShowIntro] = React.useState(true);
  const introCompleted = React.useRef(false);

  // Function to handle when the typewriter effect completes
  const handleTypewriterComplete = () => {
    // Set a timeout to hide the intro after the typing is complete
    setTimeout(() => {
      introCompleted.current = true;
      setShowIntro(false);
    }, 1000); // Wait 1 second after typing completes before transitioning
  };

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -50,
            transition: {
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
            },
          }}
        >
          <div className="mx-auto w-full max-w-prose px-6 text-center font-mono text-lg font-bold whitespace-pre-line md:w-1/2 md:text-3xl">
            <Typewriter
              options={{
                delay: 50,
                cursor: "|",
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Nice to meet you! ")
                  .pauseFor(300)
                  .typeString(":")
                  .pauseFor(300)
                  .typeString(")")
                  .pauseFor(500)
                  .callFunction(handleTypewriterComplete)
                  .start();
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TypingIntroOverlay;
