import suankularb from "../assets/png/suankularb.png";
import darunsikkhalai from "../assets/png/darunsikkhalai.png";
import kmutt from "../assets/png/kmutt.png";

const Education = () => {
  const educationData = [
    {
      id: 1,
      level: "Middle school",
      school: "Suankularb Wittayalai School",
      details: ["Regular program", "GPAX - 3.99"],
      image: suankularb,
      alt: "Suankularb Wittayalai",
    },
    {
      id: 2,
      level: "High school",
      school: "Darunsikkhalai School",
      details: [
        "(Engineering Science Classroom)",
        "Mathematic-Science program",
        "GPAX - 3.61",
      ],
      image: darunsikkhalai,
      alt: "Darunsikkhalai",
    },
    {
      id: 3,
      level: "Bachelor degree (studying)",
      school: "Computer Engineering Department",
      details: ["International program", "GPAX - 3.23"],
      image: kmutt,
      alt: "KMUTT",
    },
  ];

  return (
    <div className="font-mono">
      <p className="text-center text-4xl font-bold my-8">Education</p>

      {/* Small screens */}
      <div className="md:hidden mx-4">
        {educationData.map((edu) => (
          <div key={edu.id}>
            <div className="m-8 flex justify-center">
              <img
                className="rounded-2xl w-[300px] h-[300px]"
                src={edu.image}
                alt={edu.alt}
              />
            </div>
            <div className="text-center m-8 text-2xl font-semibold">
              {edu.level}
              <div className="text-xl font-normal mt-4">
                <p>{edu.school}</p>
                {edu.details.map((detail, index) => (
                  <p key={index}>{detail}</p>
                ))}
              </div>
            </div>
            <hr className="w-full border-gray-300" />
          </div>
        ))}
      </div>

      {/* Medium screens or larger */}
      <div className="hidden md:block mx-16">
        {educationData.map((edu) => (
          <div key={edu.id}>
            <div className="flex justify-between items-center">
              <div className="m-8 text-2xl font-semibold">
                {edu.level}
                <div className="text-xl font-normal mt-4">
                  <p>{edu.school}</p>
                  {edu.details.map((detail, index) => (
                    <p key={index}>{detail}</p>
                  ))}
                </div>
              </div>
              <div className="m-8">
                <img
                  className="rounded-2xl w-[300px] h-[300px]"
                  src={edu.image}
                  alt={edu.alt}
                />
              </div>
            </div>
            <hr className="w-full border-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
