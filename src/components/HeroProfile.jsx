import ProgressBar from "./ProgressBar";

import suankularb from "../assets/png/suankularb.png";
import darunsikkhalai from '../assets/png/darunsikkhalai.png'
import kmutt from '../assets/png/kmutt.png'
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

const HeroProfile = () => {

  return (
    <div className="font-mono">
      <div className="flex text-4xl font-bold justify-center m-8">
        Education
      </div>
      <div className="mx-16">
        <div className="flex justify-between">
          <div className="m-8 text-2xl font-semibold">
            Middle school
            <div className="text-xl font-normal mt-4">
              Suankularb Wittayalai School <br />
              Regular program <br />
              GPAX - 3.99
            </div>
          </div>
          <div className="m-8">
            <img
              className="rounded-2xl"
              style={{ width: 300, height: 300 }}
              src={suankularb}
              alt="Suankularb Wittayalai"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="m-8 text-2xl font-semibold">
            High school
            <div className="text-xl font-normal mt-4">
              Darunsikkhalai School (Engineering Science Classroom) <br />
              Mathematic-Science branch <br />
              GPAX - 3.61
            </div>
          </div>
          <div className="m-8">
            <img
              className="rounded-2xl"
              style={{ width: 300, height: 300 }}
              src={darunsikkhalai}
              alt="darunsikkhalai"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="m-8 text-2xl font-semibold">
            Bachelor degree
            <div className="text-xl font-normal mt-4">
              Computer Engineering Department <br />
              International program <br />
              GPAX - 3.18
            </div>
          </div>
          <div className="m-8">
            <img
              className="rounded-2xl"
              style={{ width: 300, height: 300 }}
              src={kmutt}
              alt="kmutt"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center text-4xl font-bold mb-16">Skills</div>
      <div className="grid grid-cols-3 m-24 justify-center h-screen">
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

export default HeroProfile
