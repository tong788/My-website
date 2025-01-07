import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ bound }) => {
  const [progress, setProgress] = useState(0); // Start at 0%

  useEffect(() => {
    if (progress >= bound) return; // Stop if progress already meets or exceeds bound

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= bound) {
          clearInterval(interval); // Stop the interval when the target is reached
          return prev;
        }
        return prev + 0.25; // Increment by 0.5%
      });
    }, 10); // Adjust speed (lower = faster)

    return () => clearInterval(interval); // Clean up the interval
  }, [bound, progress]); // Re-run effect when `bound` or `progress` changes

  return (
    <div className="ml-4 rounded-full border w-72 h-4">
      <div
        className="rounded-full h-full bg-green-500 transition-all duration-150"
        style={{ width: `${progress}%` }} // Dynamically set the width
      ></div>
    </div>
  );
};

// Add prop validation
ProgressBar.propTypes = {
  bound: PropTypes.number.isRequired, // `bound` must be a number and is required
};

export default ProgressBar;
