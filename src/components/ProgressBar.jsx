import "./progressbar.css";
import PropTypes from "prop-types";

const ProgressBar = ({ bound, isInView }) => {
  return (
    <div className="ml-4 rounded-full border w-72 h-4 overflow-hidden">
      <div
        className={`progress-fill ${
          isInView ? "animate" : ""
        } rounded-full h-full bg-green-500`}
        style={{
          "--bound": `${bound}%`,
          "--duration": `${bound / 30}s`,
        }}
      ></div>
    </div>
  );
};

// Add prop validation
ProgressBar.propTypes = {
  bound: PropTypes.number.isRequired, // `bound` must be a number and is required
  isInView: PropTypes.bool.isRequired, // Tracks whether the animation should trigger
};

export default ProgressBar;
