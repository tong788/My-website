import { useEffect, useRef, useState } from "react";
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
  const [isInView, setIsInView] = useState(false);
  const skillsRef = useRef(); //to create reference to a dom (skills component)

  //IntersectionObserver is an API which tells if an element is enter or exit viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { //call back function to check if the component is in viewport or not
        if (entry.isIntersecting) {
          setIsInView(true); // Trigger animation when in view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the component is visible
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div ref={skillsRef} className="font-mono mt-16">
      <div className="flex justify-center text-4xl font-bold mb-16">Skills</div>
      <div className="grid grid-cols-3 m-24 justify-center ">
        <div>
          <p className="text-2xl mb-6 text-center">Programming Languages</p>
          <div className="flex items-center justify-center mb-4">
            <img src={html} className="w-24" alt="HTML" />
            <ProgressBar bound={85} isInView={isInView} />
          </div>
          <div className="flex items-center justify-center mb-4">
            <img src={css} className="w-24" alt="CSS" />
            <ProgressBar bound={80} isInView={isInView} />
          </div>
          <div className="flex items-center justify-center mb-4">
            <img src={javascript} className="w-24" alt="JavaScript" />
            <ProgressBar bound={80} isInView={isInView} />
          </div>
          <div className="flex items-center justify-center mb-4">
            <img src={typescript} className="w-24" alt="TypeScript" />
            <ProgressBar bound={75} isInView={isInView} />
          </div>
          <div className="flex items-center justify-center mb-4">
            <img src={python} className="w-24" alt="Python" />
            <ProgressBar bound={65} isInView={isInView} />
          </div>
          <div className="flex items-center justify-center mb-4">
            <img src={c} className="w-24" alt="C Language" />
            <ProgressBar bound={90} isInView={isInView} />
          </div>
        </div>
        <div>
          <p className="text-2xl mb-6 text-center">Frameworks</p>
          <div className="flex items-center justify-center mb-4">
            <img src={react} className="w-24" alt="React" />
            <ProgressBar bound={75} isInView={isInView} />
          </div>
          <div className="flex items-center justify-center mb-4">
            <img src={nextjs} className="w-24" alt="Next.js" />
            <ProgressBar bound={80} isInView={isInView} />
          </div>
          <div className="flex items-center justify-center mb-4">
            <img src={tailwind} className="w-24" alt="Tailwind CSS" />
            <ProgressBar bound={70} isInView={isInView} />
          </div>
        </div>
        <div>
          <p className="text-2xl mb-6 text-center">Tools</p>
          <div className="flex items-center justify-center mb-4">
            <img src={figma} className="w-24" alt="Figma" />
            <ProgressBar bound={60} isInView={isInView} />
          </div>
          <div className="flex items-center justify-center mb-4">
            <img src={jira} className="w-24" alt="Jira" />
            <ProgressBar bound={85} isInView={isInView} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
