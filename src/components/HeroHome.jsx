import mypic from "../assets/jpg/mypic.jpg";
import { TypeAnimation } from "react-type-animation";

const HeroHome = () => {
  return (
    <div className="font-mono">
      <div className="flex justify-center font-bold pt-8 text-4xl">
        Welcome to my website
      </div>

      <div className="flex justify-center pt-8 text-4xl">
        <TypeAnimation
          className="inline-block text-3xl"
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "I am interested in Web application",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "I am interested in Frontend development",
            1000,
            "I am interested in Software Engineering",
            1000,
            "I am interested in Frontend developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>
      <div className="grid grid-col-2 pt-10">
        <div className="col-start-1 ml-20">
          <img
            className="rounded-2xl"
            style={{ width: 300.6, height: 387.3 }}
            src={mypic}
            alt="my profile picture"
          />
        </div>
        <div className="col-start-2 mr-20">
          <p className="text-xl font-semibold pb-3">About me</p>
          My name is Supanut Wongtanom. I am studying at the faculty <br />
          of computer engineering in the 3rd year of international <br />
          program at KMUTT at the moment. I am interested in front-end <br />
          development especially React JS, NextJS and CSS tailwind framework.
          <br />
          Nice to meet you!
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default HeroHome;
