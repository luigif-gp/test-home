import React from 'react';

const Navigation = () => {
  const navName = ['Home', 'other', 'other'];
  return (
    <div
      className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0  z-20"
      id="nav-content"
    >
      <ul className="list-reset lg:flex flex-1 items-center px-4 md:px-0">
        {navName.map((nav) => (
          <li className="mr-6 my-2 md:my-0">
            <a
              href="/"
              className="block py-1 md:py-3 pl-1 align-middle text-blue-400 no-underline hover:text-gray-100 border-b-2 border-blue-400 hover:border-blue-400"
            >
              <i className="fas fa-home fa-fw mr-3 text-blue-400"></i>
              <span className="pb-1 md:pb-0 text-sm">{nav} </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
