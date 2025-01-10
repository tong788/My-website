import ig from "../assets/svg/instagram.svg";
import fb from "../assets/svg/facebook.svg";
import gmail from "../assets/svg/gmail.svg";
import phone from "../assets/svg/phone.svg";
import gh from "../assets/svg/github.svg";

const Footer = () => {

  return (
    <div className="items-center font-mono text-white bg-indigo-500 mt-8">
      <div className="mt-10 pt-6 pl-10 text-2xl font-bold">Contact</div>

      <div className="pt-6 pl-10 pb-6 text-xl font-bold">
        <div className="flex items-center gap-x-2">
          <img className="" src={phone} />
          <ul className="">0615325744</ul>
        </div>

        <div className="flex items-center gap-x-2">
          <img className="" src={gmail} />
          <ul className="">tongs2004@gmail.com</ul>
        </div>

        <div className="flex items-center gap-x-2">
          <a href="https://web.facebook.com/supanut.wongtanom?locale=th_TH">
            <img className="cursor-pointer" src={fb} alt="Facebook" />
          </a>
          <ul className="">Supanut Wongtanom</ul>
        </div>

        <div className="flex items-center gap-x-2">
          <a href="https://www.instagram.com/supernut_t/">
            <img className="cursor-pointer" src={ig} alt="Instagram" />
          </a>
          <ul className="">supernut_t</ul>
        </div>

        <div className="flex items-center gap-x-2">
          <a href="https://github.com/tong788">
            <img className="cursor-pointer hover:shadow-md" src={gh} alt="Github" />
          </a>
          <ul className="">tong788</ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
