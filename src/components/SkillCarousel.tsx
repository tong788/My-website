import { useState } from "react";

interface Skill {
  icon: string;
  label: string;
}

interface SkillCarouselProps {
  skills: Skill[];
  isInView: boolean;
}

const SkillCarousel: React.FC<SkillCarouselProps> = ({ skills }) => {
  const [current, setCurrent] = useState(0);

  const go = (dir: number) => {
    setCurrent((prev) => (prev + dir + skills.length) % skills.length);
  };

  const skill = skills[current];

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Card + arrows */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => go(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 transition"
        >
          ‹
        </button>

        <div
          key={current}
          className="flex flex-col items-center justify-center gap-2 w-56 h-56 rounded-2xl border border-gray-300 dark:border-gray-600 shadow-md bg-white animate-fade-in"
        >
          <img
            src={skill.icon}
            className="w-14 h-14 object-contain"
            alt={skill.label}
          />
          <span className="text-lg font-semibold">{skill.label}</span>
        </div>

        <button
          onClick={() => go(1)}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 transition"
        >
          ›
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex gap-1">
        {skills.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i - current)}
            className={`h-2 rounded-full transition-all duration-300 ${i === current ? "bg-green-500 w-4" : "bg-gray-300 w-2"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCarousel;
