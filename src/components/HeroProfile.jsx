import darunsikkhalai from '../assets/darunsikkhalai.png'
import kmutt from '../assets/kmutt.png'
import { FaJs } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { FaPython } from 'react-icons/fa'

const HeroProfile = () => {
  return (
    <div className="font-mono">
      <div className="flex text-4xl font-bold justify-center m-8">
        Education
      </div>
      <div className="flex justify-between">
        <div className="m-8 text-2xl font-semibold">
          High school
          <div className="text-xl font-normal mt-4">
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
      <div className="flex justify-center text-4xl font-bold">Skills</div>
      <div className="text-6xl text-[#e34c26]">
        <FaHtml5 />
      </div>
      <div className="text-6xl text-[#264de4]">
        <FaCss3Alt />
      </div>
      <div className="text-6xl text-[#f0db4f]">
        <FaJs />
      </div>
      <div className="text-6xl text-[#61dafb]">
        <FaReact />
      </div>
      <div className="text-6xl text-[#06b6d4]">
        <RiTailwindCssFill />
      </div>
      <div className="text-6xl text-[#ffde57]">
        <FaPython />
      </div>
    </div>
  )
}

export default HeroProfile
