import pythoncertificate from "../assets/png/pythoncertificate.png";

const Certificates = () => {
    return (
      <div className="font-mono mx-24">
        <div className="text-2xl font-semibold mt-8 mb-4">Certificates</div>
        <p className="text-xl mb-4">Python Certificate</p>
        <div className="grid grid-cols-2">
          <div>
            <img src={pythoncertificate} />
          </div>
          <div className="ml-8">
            <p>
              A certificate which ensured that I have completed the fundamental
              of Python for data science such as Lists, dictionaries, loops, and
              implementation of external libraries.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Certificates;