import mypic from '../assets/mypic.jpg'
const HeroHome = () => {
  return (
    <div className="font-mono">
      <div className="flex justify-center font-bold pt-8 text-4xl ">
        Welcome to my website
      </div>
      <div className="flex justify-between pt-10">
        <div className="ml-20">
          <img
            className="rounded-2xl"
            style={{ width: 300.6, height: 387.3 }}
            src={mypic}
            alt="my profile picture"
          />
        </div>
        <div className="mr-20">
          <p className="text-xl font-semibold pb-3">About me</p>
          My name is Supanut Wongtanom. I am studying at the faculty <br />
          of computer engineering in the 3rd year of international <br />
          program at KMUTT at the moment. I am interested in front-end <br />
          development especially React JS and CSS tailwind framework. <br />
          Nice to meet you!
        </div>
      </div>
    </div>
  )
}

export default HeroHome
