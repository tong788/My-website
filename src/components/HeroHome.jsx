import mypic from "../assets/jpg/mypic.jpg";
import { TypeAnimation } from "react-type-animation";
import { useReducer } from "react";

const HeroHome = () => {
  const counterReducer = (state, action) => {
    switch (action.type) {
      case "Add":
        return { ...state, count: state.count + 1 }; // Create a new state object
      case "Sub":
        return { ...state, count: state.count - 1 }; // Create a new state object
      default:
        return state; // Return the current state for unknown actions
    }
  };

  const [state, dispatch] = useReducer(counterReducer, { count: 0 }); // Initial state is an object



  return (
    <div className="font-mono">
      <p className="text-center font-bold pt-8 text-4xl">
        Welcome to my website
      </p>

      <div className="text-center pt-8 text-4xl">
        <div className="block text-3xl h-[3rem] md:h-[3rem]">
          <TypeAnimation
            className="block"
            sequence={[
              "I am interested in Web application",
              1000,
              "I am interested in Frontend development",
              1000,
              "I am interested in Software Engineering",
              1000,
              "I am interested in UX/UI design",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
      </div>
      <div className="md:grid grid-col-2 pt-10">
        <div className="flex justify-center md:block md:col-start-1 md:ml-20">
          <img
            className="rounded-2xl w-[12rem] h-[16rem] md:w-[16rem] md:h-[20rem]"
            src={mypic}
            alt="my profile picture"
          />
        </div>
        <div className="md:col-start-2 mx-8 md:mx-20 text-justify">
          <p className="text-center md:text-start text-xl font-semibold mt-8 md:mt-0 pb-3">
            About me
          </p>
          My name is Supanut Wongtanom. I am studying at the faculty of computer
          engineering in the 3rd year of international program at KMUTT at the
          moment. I am interested in front-end development especially React JS,
          NextJS and CSS tailwind framework. Nice to meet you!
        </div>
      </div>
      <p className="flex justify-center mt-4">Count: {state.count}</p>
      <div className="flex justify-center mt-4 gap-x-4">
        <button
          className="bg-indigo-500 rounded-xl w-24 h-8 text-white"
          onClick={() => dispatch({ type: "Add" })}
        >
          Add
        </button>
        <button
          className="bg-indigo-500 rounded-xl w-24 h-8 text-white"
          onClick={() => dispatch({ type: "Sub" })}
        >
          Subtract
        </button>
      </div>
    </div>
  );
};

export default HeroHome;
