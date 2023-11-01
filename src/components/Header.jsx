import React from "react";
import { BsJustify } from "react-icons/bs"
import { FiSearch } from 'react-icons/fi';
import { BiNotification } from 'react-icons/bi';

import { NavLink } from "react-router-dom";
import { useProductContext } from "../../context/productContext";

const Header = () => {
  const { showMenu, setShowMenu } = useProductContext()
  return (
    <div>
      <div className="w-full h-[60px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 md:px-10 flex items-center justify-between fixed z-20">
        <div className="flex items-center">
          <span className="md:hidden text-white cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
            <BsJustify size={24} />
          </span>
          <h1 className="text-3xl cursor-pointer font-semibold text-white ml-5">
            <NavLink to="/">Connecting Tarik CMS</NavLink>
          </h1>
        </div>
        <div className="flex gap-5">
          <div className="text-white font-semibold cursor-pointer"><FiSearch size={24} /></div>
          <div className="text-white font-semibold cursor-pointer"><BiNotification size={24} /></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
