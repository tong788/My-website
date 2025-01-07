import suankularb from "../assets/png/suankularb.png";
import darunsikkhalai from '../assets/png/darunsikkhalai.png'
import kmutt from '../assets/png/kmutt.png'

const Education = () => {

  return (
    <div className="font-mono">
      <div className="flex text-4xl font-bold justify-center m-8">
        Education
      </div>
      <div className="mx-16">
        <div className="flex justify-between">
          <div className="m-8 text-2xl font-semibold">
            Middle school
            <div className="text-xl font-normal mt-4">
              Suankularb Wittayalai School <br />
              Regular program <br />
              GPAX - 3.99
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
        <div className="flex justify-between">
          <div className="m-8 text-2xl font-semibold">
            High school
            <div className="text-xl font-normal mt-4">
              Darunsikkhalai School (Engineering Science Classroom) <br />
              Mathematic-Science branch <br />
              GPAX - 3.61
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
        <div className="flex justify-between">
          <div className="m-8 text-2xl font-semibold">
            Bachelor degree
            <div className="text-xl font-normal mt-4">
              Computer Engineering Department <br />
              International program <br />
              GPAX - 3.18
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
      </div>

      
    </div>
  );
}

export default Education
