import mypic from "../assets/jpg/mypic.jpg";
import { TypeAnimation } from "react-type-animation";


const HeroHome = () => {

  const transcriptUrl = "http://localhost:5173/transcript_SupanutWongtanom.pdf";
  const CvUrl = "http://localhost:5173/CV_SupanutWongtanom.pdf";

  const downloadFileAtUrl = (url) => {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(blob);
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };
  


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
      <p className="flex justify-center mt-4">You can download and see my</p>
      <div className="flex justify-center mt-4 gap-x-8">
        <button
          className="bg-indigo-500 rounded-xl w-32 h-8 text-white hover:opacity-90 duration-100"
          onClick={() => {
            downloadFileAtUrl(transcriptUrl);
          }}
        >
          transcript
        </button>
        <button
          className="bg-indigo-500 rounded-xl w-32 h-8 text-white hover:opacity-90 duration-100"
          onClick={() => {
            downloadFileAtUrl(CvUrl);
          }}
        >
          CV
        </button>
      </div>
    </div>
  );
};

export default HeroHome;
