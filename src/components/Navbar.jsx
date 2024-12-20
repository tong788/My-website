const Navbar = () => {
  return (
    <div className="flex items-center justify-between font-mono text-white bg-indigo-500">
      <a href={"/"} className="m-4 text-2xl font-bold hover:text-slate-300 duration-300">
        Supanut Wongtanom
      </a>
      <div className="flex m-4 gap-x-6 text-xl font-bold">
        <a
          href={"/"}
          className="hover:text-slate-300 duration-300"
        >
          Home
        </a>
        <a
          href={"/profile"}
          className="hover:text-slate-300 duration-300"
        >
          Profile
        </a>
        <a
          href={"/achievement"}
          className="hover:text-slate-300 duration-300"
        >
          Achievement
        </a>
      </div>
    </div>
  );
}

export default Navbar
