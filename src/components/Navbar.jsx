import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiXMark, HiBars3 } from "react-icons/hi2";

const Navbar = () => {
  const links = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Profile", path: "/profile" },
    { id: 3, title: "Achievement", path: "/achievement" },
  ];

  const [isOpen, setIsOpen] = useState(false)

  const NavToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="font-mono text-white bg-indigo-500">
      <div className="flex items-center justify-between">
        <NavLink
          to={"/"}
          className="m-4 text-2xl font-bold hover:text-slate-300 duration-300"
        >
          Supanut Wongtanom
        </NavLink>
        <div className="hidden md:flex m-4 gap-x-6 text-xl font-bold">
          {links.map((element) => (
            <NavLink
              to={element.path}
              key={element.id}
              className="hover:text-slate-300 duration-300"
            >
              {element.title}
            </NavLink>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={NavToggle} className="flex mr-8 text-2xl">
            {isOpen ? (
              <HiXMark className="hover:text-slate-300 duration-300" />
            ) : (
              <HiBars3 className="hover:text-slate-300 duration-300" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Dropdown Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col gap-4 py-4 text-xl font-bold items-center">
            {links.map((element) => (
              <li key={element.id}>
                <NavLink
                  to={element.path}
                  className="hover:text-slate-300 duration-300"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {element.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
