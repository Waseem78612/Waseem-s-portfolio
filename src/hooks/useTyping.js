
import { useState, useEffect, useRef } from "react";
// useTyping.js - A custom React hook for creating a typing animation effect
// It takes an array of strings (titles) and returns the currently typed string, simulating a typing and deleting effect. The speed of typing and the pause duration can be customized through parameters.
export function useTyping(titles, speed = 100, pauseMs = 1400) {
  // State to hold the currently typed string that will be displayed in the UI
  const [typed, setTyped] = useState("");
  // Refs to keep track of the current index of the title being typed, the character index within that title, whether we are currently deleting text, and whether we are in a pause state. These refs allow us to maintain mutable values that persist across renders without causing re-renders when they change.
  const idxRef = useRef(0);
  // Ref to track the current character index in the title being typed
  const charRef = useRef(0);
  // Ref to track whether we are currently deleting text (true) or typing (false)
  const delRef = useRef(false);
  // Ref to track whether we are in a pause state after finishing typing a title before starting to delete it
  const pauseRef = useRef(false);

  // useEffect hook that runs when component mounts and when dependencies change
  useEffect(() => {

    // Main animation function that runs every 'speed' milliseconds
    const tick = () => {

      // If we're currently in a pause period (between typing and deleting), do nothing
      if (pauseRef.current) return;

      // Get the current word/phrase from the titles array using current index
      const word = titles[idxRef.current];

      // Check if we are NOT in delete mode (meaning we are typing/adding characters)
      if (!delRef.current) {

        // ===== TYPING MODE =====
        // Increase character count by 1 to add another letter
        charRef.current += 1;

        // Update displayed text: show first N characters of current word
        // slice(0, charRef.current) takes characters from index 0 up to current count
        setTyped(word.slice(0, charRef.current));

        // Check if we've typed the ENTIRE word
        if (charRef.current === word.length) {

          // Pause between typing and deleting (show full word for a moment)
          pauseRef.current = true;

          // After pauseMs milliseconds, end the pause and switch to delete mode
          setTimeout(() => {
            pauseRef.current = false;  // End the pause
            delRef.current = true;     // Switch from typing to deleting
          }, pauseMs);
        }

      } else {

        // ===== DELETING MODE =====
        // Decrease character count by 1 to remove one letter
        charRef.current -= 1;

        // Update displayed text: show fewer characters (deleting effect)
        setTyped(word.slice(0, charRef.current));

        // Check if we've deleted EVERYTHING (no characters left)
        if (charRef.current === 0) {

          // Switch back to typing mode for the next word
          delRef.current = false;

          // Move to the NEXT word in the array
          // % (modulo) wraps around to 0 when we reach the end of array
          // Example: if length=3, indexes go 0→1→2→0→1→2...
          idxRef.current = (idxRef.current + 1) % titles.length;
        }
      }
    };

    // Set up an interval timer that calls tick() every 'speed' milliseconds
    // Example: if speed = 100, tick runs every 0.1 seconds (10 times per second)
    const timer = setInterval(tick, speed);

    // Cleanup function: runs when component unmounts or dependencies change  // Prevents memory leaks by clearing the interval timer
    return () => clearInterval(timer);

    // Dependencies array: re-run this effect if titles, speed, or pauseMs change
  }, [titles, speed, pauseMs]);
  return typed;
}
