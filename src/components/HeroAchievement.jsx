import pythoncertificate from "../assets/png/pythoncertificate.png";
import WeCooked from "../assets/png/WeCooked.png";

const HeroAchievement = () => {

  const navigate = () => {
     window.location.href = "https://github.com/tong788/WeCooked-Frontend"; 
  }

  return (
    <div className="font-mono mx-24 mt-12">
      <div className="text-4xl font-bold mb-8">Achievement</div>
      <div className="text-2xl font-semibold mb-4">My projects</div>
      <p className="text-xl mb-4">WeCooked Project</p>
      <div className="grid grid-cols-2">
        <div>
          <img src={WeCooked} />
        </div>
        <div className="ml-8">
          <p>
            A platform that empowers users to learn and enhance their culinary
            skills from the comfort of their own home. I have worked as a
            Frontend developer in this project.
          </p>
          <button
            className="flex items-center justify-center w-24 h-8 bg-gradient-to-b from-indigo-400 to-indigo-600 rounded-xl text-white mt-2 hover:shadow-lg duration-300"
            onClick={navigate}
          >
            See More
          </button>
        </div>
      </div>
      <div className="text-2xl font-semibold mt-8 mb-4">Certificates</div>
      <div className="grid grid-cols-2">
        <div>
          <p className="text-xl mb-4">Python Certificate</p>
          <img src={pythoncertificate} />
        </div>
        <div>{/** */}</div>
      </div>
    </div>
  );
};

export default HeroAchievement;
