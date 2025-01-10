import pythoncertificate from "../assets/png/pythoncertificate.png";

const Certificates = () => {
    return (
      <div className="font-mono mx-24">
        <div className="text-2xl font-semibold mt-8 mb-4">Certificates</div>
        <p className="text-xl mb-4">Python Certificate</p>
        <div className="md:grid md:grid-cols-2">
          <div>
            <img src={pythoncertificate} />
          </div>
          <div className="md:ml-8 mt-4 md:mt-0">
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