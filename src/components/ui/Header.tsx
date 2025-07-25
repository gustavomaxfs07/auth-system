'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface HeaderComponentProps {
  session: any;
}

export function HeaderComponent({ session }: HeaderComponentProps) {
  const [menuShow, setMenuShow] = useState(false);
  const [showAuthButtons, setShowAuthButtons] = useState(true);

  function toggleMenu() {
    setMenuShow(prev => !prev);
  }

  useEffect(() => {
    setShowAuthButtons(!session);
  }, [session]);

  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-2.5">
      <nav className="relative bg-white">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="hidden sm:block self-center text-xl font-semibold whitespace-nowrap text-blue-500">
              Auth System
            </span>
          </Link>

          <div className="flex items-center lg:order-2">
            <div className={`${showAuthButtons ? 'flex' : 'hidden'}`}>
              <Link href={`/auth/login`}
                className={`text-white bg-blue-500 border-blue-500 hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 lg:px-5 lg:py-2.5 mr-2 focus:outline-none transition-colors duration-200`}>
                Log in
              </Link>

              <Link href={`/auth/register`}
                className={`text-blue-500 border-blue-500 border-2 hover:bg-blue-500 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-colors duration-200`}>
                Register
              </Link>
            </div>

            <Link href={`/auth/logout`}
              className={`${session ? 'block' : 'hidden'} text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1.5 lg:px-5 lg:py-2.5 mr-2 focus:outline-none transition-colors duration-200`}>
              Logout
            </Link>

            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-blue-500 rounded-lg lg:hidden hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
              aria-controls="btn-menu"
              aria-expanded={menuShow}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className={`${menuShow ? 'flex' : 'hidden'} absolute top-full left-0 right-0 z-50 w-full bg-white shadow-lg border-t border-gray-200 flex-col lg:static lg:flex lg:w-auto lg:order-1 lg:bg-transparent lg:shadow-none lg:border-0`}
            id="btn-menu"
          >
            <ul className="flex flex-col py-4 px-4 font-medium lg:flex-row lg:space-x-8 lg:p-0">
              <li>
                <Link href={"/dashboard"}
                  className="block py-3 px-2 text-blue-500 font-medium rounded-lg lg:bg-transparent lg:p-0 hover:bg-blue-50 lg:hover:bg-transparent lg:hover:text-blue-600 transition-colors duration-200"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-3 px-2 text-gray-700 rounded-lg hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-blue-600 lg:p-0 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}