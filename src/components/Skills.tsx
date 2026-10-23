import { useEffect, useRef, useState } from "react";
import SkillCarousel from "./SkillCarousel";

import html from "../assets/svg/html.svg";
import css from "../assets/svg/css.svg";
import javascript from "../assets/svg/js.svg";
import typescript from "../assets/svg/typescript.svg";
import reactIcon from "../assets/svg/react-native.svg";
import tailwind from "../assets/svg/tailwindcss.svg";
import nextjs from "../assets/svg/nextjs.svg";
import python from "../assets/svg/python.svg";
import c from "../assets/svg/c.svg";
import figma from "../assets/svg/figma.svg";
import jira from "../assets/svg/jira.svg";
import cs from "../assets/svg/c-sharp.svg";
import netcore from "../assets/svg/net-core.svg";
import git from "../assets/svg/git.svg";
import github from "../assets/svg/github.svg";
import ado from "../assets/svg/ado.svg";
import adf from "../assets/svg/adf.svg";
import docker from "../assets/svg/docker.svg";
import k8s from "../assets/svg/kubernetes.svg";

const programmingSkills = [
  { icon: html, label: "HTML" },
  { icon: css, label: "CSS" },
  { icon: javascript, label: "JavaScript" },
  { icon: typescript, label: "TypeScript" },
  { icon: python, label: "Python" },
  { icon: c, label: "C Programming" },
  { icon: cs, label: "C#" },
];

const frameworkSkills = [
  { icon: reactIcon, label: "React" },
  { icon: nextjs, label: "Next.js" },
  { icon: netcore, label: ".NET Core" },
  { icon: tailwind, label: "Tailwind CSS" },
];

const toolSkills = [
  { icon: git, label: "Git" },
  { icon: github, label: "Github" },
  { icon: ado, label: "Azure Devops" },
  { icon: adf, label: "Azure Data Factory" },
  { icon: docker, label: "Docker" },
  { icon: k8s, label: "Kubernetes" },
  { icon: jira, label: "Jira" },
  { icon: figma, label: "Figma" },
];

const Skills: React.FC = () => {
  const [isInView, setIsInView] = useState<boolean>(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = skillsRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.2 },
    );
    if (element) observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div ref={skillsRef} className="font-mono mt-16">
      <div className="text-center text-4xl font-bold mb-16">Skills</div>
      <div className="md:grid md:grid-cols-3 md:m-24 mx-8 justify-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <p className="text-2xl mb-2 text-center">Programming</p>
          <SkillCarousel skills={programmingSkills} isInView={isInView} />
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-2xl mb-2 text-center">Frameworks</p>
          <SkillCarousel skills={frameworkSkills} isInView={isInView} />
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-2xl mb-2 text-center">Tools</p>
          <SkillCarousel skills={toolSkills} isInView={isInView} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
