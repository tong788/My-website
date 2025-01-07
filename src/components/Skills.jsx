import ProgressBar from "./ProgressBar";

import html from "../assets/svg/html.svg";
import css from "../assets/svg/css.svg";
import javascript from "../assets/svg/js.svg";
import typescript from "../assets/svg/typescript.svg";
import react from "../assets/svg/react-native.svg";
import tailwind from "../assets/svg/tailwindcss.svg";
import nextjs from "../assets/svg/nextjs.svg";
import python from "../assets/svg/python.svg";
import c from "../assets/svg/c.svg";
import figma from "../assets/svg/figma.svg";
import jira from "../assets/svg/jira.svg";

const Skills = () => {
    return (
      <div className="font-mono mt-16">
        <div className="flex justify-center text-4xl font-bold mb-16">
          Skills
        </div>
        <div className="grid grid-cols-3 m-24 justify-center ">
          <div className="">
            <p className="text-2xl mb-6 text-center">Programming Languages</p>
            <div className="flex items-center justify-center mb-4">
              <img src={html} className="w-24" />
              <ProgressBar bound={85} />
            </div>
            <div className="flex items-center justify-center mb-4">
              <img src={css} className="w-24" />
              <ProgressBar bound={80} />
            </div>
            <div className="flex items-center justify-center mb-4">
              <img src={javascript} className="w-24" />
              <ProgressBar bound={80} />
            </div>
            <div className="flex items-center justify-center mb-4">
              <img src={typescript} className="w-24" />
              <ProgressBar bound={75} />
            </div>
            <div className="flex items-center justify-center mb-4">
              <img src={python} className="w-24" />
              <ProgressBar bound={65} />
            </div>
            <div className="flex items-center justify-center mb-4">
              <img src={c} className="w-24" />
              <ProgressBar bound={90} />
            </div>
          </div>
          <div className="">
            <p className="text-2xl mb-6 text-center">Frameworks</p>
            <div className="flex items-center justify-center mb-4">
              <img src={react} className="w-24" />
              <ProgressBar bound={75} />
            </div>
            <div className="flex items-center justify-center mb-4">
              <img src={nextjs} className="w-24" />
              <ProgressBar bound={80} />
            </div>
            <div className="flex items-center justify-center mb-4">
              <img src={tailwind} className="w-24" />
              <ProgressBar bound={70} />
            </div>
          </div>
          <div className="">
            <p className="text-2xl mb-6 text-center">Tools</p>
            <div className="flex items-center justify-center mb-4">
              <img src={figma} className="w-24" />
              <ProgressBar bound={60} />
            </div>
            <div className="flex items-center justify-center mb-4">
              <img src={jira} className="w-24" />
              <ProgressBar bound={85} />
            </div>
          </div>
        </div>
      </div>
    ); 
}

export default Skills