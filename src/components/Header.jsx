import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsSearch, BsCameraVideoFill, BsBellFill } from "react-icons/bs";

const Header = () => {
  const navigate = useNavigate();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target[0].value;
    navigate(`/results?search_query=${query}`);
  };
  return (
    <header className="flex justify-between items-center p-4">
      <Link to={"/"} className="flex items-center gap-[6px]">
        <img className="w-10" src="/youtube.png" />
        <h1 className="text-2xl hidden md:block">Youtube</h1>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="flex items-center border border-gray-400 rounded-[20px] py-1 px-1"
      >
        <input className="bg-black outline-none rounded-[20px]" type="search" />
        <button className="grid place-items-center border-l px-2 h-fü text-xl">
          <BsSearch />
        </button>
      </form>

      <div className="flex gap-2 text-xl cursor-pointer">
        <BsBellFill />
        <BsCameraVideoFill />
      </div>
    </header>
  );
};

export default Header;
