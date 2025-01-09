import suankularb from "../assets/png/suankularb.png";
import darunsikkhalai from '../assets/png/darunsikkhalai.png'
import kmutt from '../assets/png/kmutt.png'

const Education = () => {

  return (
    <div className="font-mono mx-32">
      <div className="flex text-4xl font-bold justify-center m-8">
        Education
      </div>
      <div className="mx-16">
        <div className="flex justify-between items-center">
          <div className="m-8 text-2xl font-semibold">
            Middle school
            <div className="text-xl font-normal mt-4">
              <p>Suankularb Wittayalai School</p>
              <p>Regular program</p>
              <p>GPAX - 3.99</p>
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
        <hr className="w-full border-gray-300" />
        <div className="flex justify-between items-center">
          <div className="m-8 text-2xl font-semibold">
            High school
            <div className="text-xl font-normal mt-4">
              <p>Darunsikkhalai School (Engineering Science Classroom)</p>
              <p>Mathematic-Science program</p>
              <p>GPAX - 3.61</p>
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
        <hr className="w-full border-gray-300" />
        <div className="flex justify-between items-center">
          <div className="m-8 text-2xl font-semibold">
            Bachelor degree (studying)
            <div className="text-xl font-normal mt-4">
              <p>Computer Engineering Department</p>
              <p>International program</p>
              <p>GPAX - 3.23</p>
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
        <hr className="w-full border-gray-300" />
      </div>
    </div>
  );
}

export default Education
