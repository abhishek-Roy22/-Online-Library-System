import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="w-full bg-slate-900 shadow-md shadow-slate-500 sticky top-0 z-[99999]">
      <div className="max-w-7xl mx-auto py-5 px-1 flex items-center justify-between">
        <h1 className="text-3xl text-slate-100 font-serif">
          Online Library System!
        </h1>
        <div className="flex items-center gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-slate-100 bg-slate-800 p-2 rounded-md transition-all duration-300 font-serif'
                : 'text-slate-100 transition-all duration-300 p-2 font-serif'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/browse"
            className={({ isActive }) =>
              isActive
                ? 'text-slate-100 bg-slate-800 p-2 rounded-md transition-all duration-300 font-serif'
                : 'text-slate-100 transition-all duration-300 p-2 font-serif'
            }
          >
            Browse Book
          </NavLink>
          <NavLink
            to="/addbook"
            className={({ isActive }) =>
              isActive
                ? 'text-slate-100 bg-slate-800 p-2 rounded-md transition-all duration-300 font-serif'
                : 'text-slate-100 transition-all duration-300 p-2 font-serif'
            }
          >
            Add Book
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
